import { DiseaseRepository } from '@modules/disease/disease.repository';
import { HistoryRepository } from '@modules/history/history.repository';
import { MedicalCenterRepository } from '@modules/medical-center/medical-center.repository';
import { NotificationRepository } from '@modules/notification/notification.repository';
import { TreatmentRepository } from '@modules/treament/treament.repository';
import { UserRepository } from '@modules/user/user.repository';
import { VaccineRepository } from '@modules/vaccine/vaccine.repository';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { SendGridService } from '@shared/common/sendgrip-service';
import { SesService } from '@shared/common/ses-service';
import {
  acceptedEmail,
  appointmentEmail,
  confirmVaccineEmail,
  dateFormat,
  registrationEmail,
  remindEmail,
  successResponse,
} from '@shared/constants';
import { SuccessOutputDto } from '@shared/dtos/success-output.dto';
import { plainToInstance } from 'class-transformer';
import moment from 'moment';
import { RegistrationDateParamDto } from './dtos/registration-date-param.dto';
import { RegistrationInputDto } from './dtos/registration-input.dto';
import { RegistrationOutputDto } from './dtos/registration-output.dto';
import { RegistrationParamDto } from './dtos/registration-param.dto';
import { RegistrationsParamDto } from './dtos/registrations-param.dto';
import { UpdateRegistrationInputDto } from './dtos/update-registration-input.dto';
import { RegistrationRepository } from './registration.repository';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class RegistrationService {
  constructor(
    private readonly repository: RegistrationRepository,
    private readonly userRepository: UserRepository,
    private readonly diseaseRepository: DiseaseRepository,
    private readonly medicalCenterRepository: MedicalCenterRepository,
    private readonly historyRepository: HistoryRepository,
    private readonly treatmentRepository: TreatmentRepository,
    private readonly notificationRepository: NotificationRepository,
    private readonly vaccineRepository: VaccineRepository,
    private sesService: SesService,
    private readonly sendGridService: SendGridService,
  ) {}

  async create(
    input: RegistrationInputDto,
    param: RegistrationParamDto,
  ): Promise<SuccessOutputDto> {
    const { userId } = param;
    const [user, disease, medicalCenter, vaccine] = await Promise.all([
      this.userRepository.findOneOrFail(userId),
      this.diseaseRepository.findOneOrFail(input.diseaseId),
      this.medicalCenterRepository.findOneOrFail(input.medicalCenterId),
      this.vaccineRepository.findOneOrFail(input.vaccineId),
    ]);

    await Promise.all([
      this.repository.save(
        this.repository.create({
          userId,
          ...input,
        }),
      ),

      this.notificationRepository.save(
        this.notificationRepository.create({
          userId: user.userId,
          notificationTitle: `You applied for the ${vaccine.vaccineName} vaccine on ${input.registrationTime}`,
          notificationContent: `Name: ${user.userName}\nVaccine: ${vaccine.vaccineName}\nDisease: ${disease.diseaseName}\nDose: ${input.registrationDose}\nDisease Center: ${medicalCenter.name}
          `,
          notificationType: 'Successful vaccine registration',
          notificationStatus: false,
        }),
      ),
    ]);

    await this.sendGridService.sendEmail(
      user.email,
      registrationEmail.subject.replace('{vaccine}', vaccine.vaccineName),
      registrationEmail.context
        .replace('{name}', user.userName)
        .replace('{diseaseCenter}', medicalCenter.name)
        .replace('{vaccine}', vaccine.vaccineName)
        .replace('{disease}', disease.diseaseName)
        .replace('{dose}', input.registrationDose.toString())
        .replace('{time}', input.registrationTime),
    );

    return successResponse;
  }

  async listRegistration(date: string): Promise<RegistrationOutputDto[]> {
    const listRegistration = await this.repository.listRegistration(date);

    return plainToInstance(RegistrationOutputDto, listRegistration);
  }

  async listRegistrationAccepted(
    paramsDate: RegistrationDateParamDto,
  ): Promise<RegistrationOutputDto[]> {
    const { date } = paramsDate;

    const listRegistration = await this.repository.listRegistrationAccepted(
      date,
    );

    return plainToInstance(RegistrationOutputDto, listRegistration);
  }

  async acceptStatus(params: RegistrationsParamDto): Promise<SuccessOutputDto> {
    const { id } = params;

    const registration = await this.repository.findOneById(id);

    if (!registration) {
      throw new NotFoundException();
    }

    await this.repository.update({ registrationId: id }, { status: true });

    await this.notificationRepository.save(
      this.notificationRepository.create({
        userId: registration.user.userId,
        notificationTitle: `${registration.medicalCenter.name} medical Center has accepted your vaccination application`,
        notificationContent: `Name: ${registration.user.userName}\nVaccine: ${registration.vaccine.vaccineName}\nDisease: ${registration.disease.diseaseName}\nDose: ${registration.registrationDose}\nDisease Center: ${registration.medicalCenter.name}
        `,
        notificationType: 'Injection registration has been confirmed',
        notificationStatus: false,
      }),
    );

    await this.sendGridService.sendEmail(
      registration.user.email,
      acceptedEmail.subject.replace(
        '{vaccine}',
        registration.vaccine.vaccineName,
      ),
      acceptedEmail.context
        .replace('{name}', registration.user.userName)
        .replace('{diseaseCenter}', registration.medicalCenter.name)
        .replace('{vaccine}', registration.vaccine.vaccineName)
        .replace('{disease}', registration.disease.diseaseName)
        .replace('{dose}', registration.registrationDose.toString())
        .replace('{time}', registration.registrationTime),
    );

    return successResponse;
  }

  async registration(
    param: RegistrationParamDto,
  ): Promise<RegistrationOutputDto[]> {
    const { userId } = param;

    const [registration] = await Promise.all([
      this.repository.registration(userId),
      this.userRepository.findOneOrFail(userId),
    ]);

    return plainToInstance(RegistrationOutputDto, registration);
  }

  async remove(id: number): Promise<SuccessOutputDto> {
    const registration = await this.repository.findOneOrFail({
      registrationId: id,
    });

    if (registration.status) {
      throw new ForbiddenException();
    }
    await this.repository.delete({ registrationId: id });

    return successResponse;
  }

  async update(
    params: RegistrationsParamDto,
    input: UpdateRegistrationInputDto,
  ): Promise<SuccessOutputDto> {
    const { userId, id } = params;

    const [registration] = await Promise.all([
      this.repository.findOneOrFail({
        registrationId: id,
      }),
      this.userRepository.findOneOrFail(userId),
    ]);

    if (registration.status) {
      throw new ForbiddenException();
    }

    await this.repository.save({ registrationId: id, ...input });

    return successResponse;
  }

  async accept(params: RegistrationsParamDto): Promise<SuccessOutputDto> {
    const { id } = params;

    const registration = await this.repository.findOneOrFail(id);

    const treatment = await this.treatmentRepository.findOneOrFail({
      vaccineId: registration.vaccineId,
      diseaseId: registration.diseaseId,
    });

    if (!registration.status) {
      throw new ForbiddenException('registration not accept');
    }

    const history = await this.repository.findOneById(id);

    await this.repository.manager.transaction(async (manager) => {
      await manager.getCustomRepository(RegistrationRepository).delete(id);

      await manager.getCustomRepository(HistoryRepository).save(
        this.historyRepository.create({
          time: moment().format(dateFormat.dateFormatWithVN),
          dose: registration.registrationDose,
          ...registration,
        }),
      );

      await manager.getCustomRepository(NotificationRepository).save(
        this.notificationRepository.create({
          userId: registration.userId,
          notificationTitle: `You have successfully vaccinated ${history.vaccine?.vaccineName}`,
          notificationContent: `Name: ${history.user.userName} \nVaccine: ${history.vaccine.vaccineName} \nDisease: ${history.disease.diseaseName} \nDose: ${history.registrationDose}\nDisease Center: ${history.medicalCenter.name}`,
          notificationType: 'Confirm you have successfully vaccinated',
          notificationStatus: false,
        }),
      );

      await this.sendGridService.sendEmail(
        history.user.email,
        confirmVaccineEmail.subject.replace(
          '{vaccine}',
          history.vaccine.vaccineName,
        ),
        confirmVaccineEmail.context
          .replace('{name}', history.user.userName)
          .replace('{diseaseCenter}', history.medicalCenter.name)
          .replace('{vaccine}', history.vaccine.vaccineName)
          .replace('{disease}', history.disease.diseaseName)
          .replace('{dose}', history.registrationDose.toString())
          .replace('{time}', moment().format(dateFormat.dateFormatWithVN)),
      );
    });

    if (treatment.amount > registration.registrationDose) {
      const nextDate = moment(
        registration.registrationTime,
        dateFormat.dateFormatWithVN,
      )
        .add(treatment.effect, 'days')
        .format(dateFormat.dateFormatWithVN);

      this.repository.manager.transaction(async (manager) => {
        manager.getCustomRepository(RegistrationRepository).save(
          this.repository.create({
            userId: registration.userId,
            vaccineId: registration.vaccineId,
            medicalCenterId: registration.medicalCenterId,
            diseaseId: registration.diseaseId,
            status: true,
            registrationDose: registration.registrationDose + 1,
            registrationTime: nextDate,
          }),
        );

        await manager.getCustomRepository(NotificationRepository).save(
          this.notificationRepository.create({
            userId: registration.userId,
            notificationTitle: `Schedule an appointment for the next dose of ${history.vaccine.vaccineName} vaccine on ${nextDate}`,
            notificationContent: `Name: ${history.user.userName}\nVaccine: ${
              history.vaccine.vaccineName
            }\nDisease: ${history.disease.diseaseName}\nDose: ${
              history.registrationDose + 1
            }\nDisease Center: ${history.medicalCenter.name}
            `,
            notificationType: 'You have an appointment',
            notificationStatus: false,
          }),
        );

        await this.sendGridService.sendEmail(
          history.user.email,
          appointmentEmail.subject.replace('{time}', nextDate),
          appointmentEmail.context
            .replace('{name}', history.user.userName)
            .replace('{diseaseCenter}', history.medicalCenter.name)
            .replace('{vaccine}', history.vaccine.vaccineName)
            .replace('{disease}', history.disease.diseaseName)
            .replace('{dose}', history.registrationDose.toString())
            .replace('{time}', nextDate),
        );
      });
    }

    return successResponse;
  }

  async findByDate(
    paramsDate: RegistrationDateParamDto,
  ): Promise<RegistrationOutputDto[]> {
    const { date } = paramsDate;

    const dateVN = moment(date).format(dateFormat.dateFormatWithVN);

    const appointment = await this.repository.findByDate(dateVN);

    return plainToInstance(RegistrationOutputDto, appointment);
  }

  async findByUser(
    param: RegistrationParamDto,
  ): Promise<RegistrationOutputDto[]> {
    const { userId } = param;

    const listRegistration = await this.repository.findByUser(userId);

    return plainToInstance(RegistrationOutputDto, listRegistration);
  }

  //*/1 * * * */1
  //@Cron('*/5 * * * */1')
  async handleCron() {
    const registrations = await this.repository.cronFindRegistration();

    registrations.map(async (registration) => {
      await this.notificationRepository.save(
        this.notificationRepository.create({
          userId: registration.userId,
          notificationTitle: `Reminds you to have an appointment for vaccination on ${registration.registrationTime}`,
          notificationContent: `Name: ${registration.user.userName} \nVaccine: ${registration.vaccine.vaccineName} \nDisease: ${registration.disease.diseaseName} \nDose: ${registration.registrationDose}\nDisease Center: ${registration.medicalCenter.name}`,
          notificationType:
            'Reminds you to have an appointment for vaccination.',
          notificationStatus: false,
        }),
      );

      await this.sendGridService.sendEmail(
        registration.user.email,
        remindEmail.subject.replace('{time}', registration.registrationTime),
        remindEmail.context
          .replace('{name}', registration.user.userName)
          .replace('{diseaseCenter}', registration.medicalCenter.name)
          .replace('{vaccine}', registration.vaccine.vaccineName)
          .replace('{disease}', registration.disease.diseaseName)
          .replace('{dose}', registration.registrationDose.toString())
          .replace('{time}', registration.registrationTime),
      );
    });

    return successResponse;
  }
}
