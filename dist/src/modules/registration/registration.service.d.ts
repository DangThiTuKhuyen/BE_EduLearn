import { DiseaseRepository } from '@modules/disease/disease.repository';
import { HistoryRepository } from '@modules/history/history.repository';
import { MedicalCenterRepository } from '@modules/medical-center/medical-center.repository';
import { NotificationRepository } from '@modules/notification/notification.repository';
import { TreatmentRepository } from '@modules/treament/treament.repository';
import { UserRepository } from '@modules/user/user.repository';
import { VaccineRepository } from '@modules/vaccine/vaccine.repository';
import { SendGridService } from '@shared/common/sendgrip-service';
import { SesService } from '@shared/common/ses-service';
import { SuccessOutputDto } from '@shared/dtos/success-output.dto';
import { RegistrationDateParamDto } from './dtos/registration-date-param.dto';
import { RegistrationInputDto } from './dtos/registration-input.dto';
import { RegistrationOutputDto } from './dtos/registration-output.dto';
import { RegistrationParamDto } from './dtos/registration-param.dto';
import { RegistrationsParamDto } from './dtos/registrations-param.dto';
import { UpdateRegistrationInputDto } from './dtos/update-registration-input.dto';
import { RegistrationRepository } from './registration.repository';
export declare class RegistrationService {
    private readonly repository;
    private readonly userRepository;
    private readonly diseaseRepository;
    private readonly medicalCenterRepository;
    private readonly historyRepository;
    private readonly treatmentRepository;
    private readonly notificationRepository;
    private readonly vaccineRepository;
    private sesService;
    private readonly sendGridService;
    constructor(repository: RegistrationRepository, userRepository: UserRepository, diseaseRepository: DiseaseRepository, medicalCenterRepository: MedicalCenterRepository, historyRepository: HistoryRepository, treatmentRepository: TreatmentRepository, notificationRepository: NotificationRepository, vaccineRepository: VaccineRepository, sesService: SesService, sendGridService: SendGridService);
    create(input: RegistrationInputDto, param: RegistrationParamDto): Promise<SuccessOutputDto>;
    listRegistration(date: string): Promise<RegistrationOutputDto[]>;
    listRegistrationAccepted(paramsDate: RegistrationDateParamDto): Promise<RegistrationOutputDto[]>;
    acceptStatus(params: RegistrationsParamDto): Promise<SuccessOutputDto>;
    registration(param: RegistrationParamDto): Promise<RegistrationOutputDto[]>;
    remove(id: number): Promise<SuccessOutputDto>;
    update(params: RegistrationsParamDto, input: UpdateRegistrationInputDto): Promise<SuccessOutputDto>;
    accept(params: RegistrationsParamDto): Promise<SuccessOutputDto>;
    findByDate(paramsDate: RegistrationDateParamDto): Promise<RegistrationOutputDto[]>;
    findByUser(param: RegistrationParamDto): Promise<RegistrationOutputDto[]>;
    handleCron(): Promise<{
        message: string;
    }>;
}
//# sourceMappingURL=registration.service.d.ts.map