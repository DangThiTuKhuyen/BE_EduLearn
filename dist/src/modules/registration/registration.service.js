"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationService = void 0;
const disease_repository_1 = require("../disease/disease.repository");
const history_repository_1 = require("../history/history.repository");
const medical_center_repository_1 = require("../medical-center/medical-center.repository");
const notification_repository_1 = require("../notification/notification.repository");
const treament_repository_1 = require("../treament/treament.repository");
const user_repository_1 = require("../user/user.repository");
const vaccine_repository_1 = require("../vaccine/vaccine.repository");
const common_1 = require("@nestjs/common");
const sendgrip_service_1 = require("../../shared/common/sendgrip-service");
const ses_service_1 = require("../../shared/common/ses-service");
const constants_1 = require("../../shared/constants");
const class_transformer_1 = require("class-transformer");
const moment_1 = __importDefault(require("moment"));
const registration_output_dto_1 = require("./dtos/registration-output.dto");
const registration_repository_1 = require("./registration.repository");
let RegistrationService = class RegistrationService {
    constructor(repository, userRepository, diseaseRepository, medicalCenterRepository, historyRepository, treatmentRepository, notificationRepository, vaccineRepository, sesService, sendGridService) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.diseaseRepository = diseaseRepository;
        this.medicalCenterRepository = medicalCenterRepository;
        this.historyRepository = historyRepository;
        this.treatmentRepository = treatmentRepository;
        this.notificationRepository = notificationRepository;
        this.vaccineRepository = vaccineRepository;
        this.sesService = sesService;
        this.sendGridService = sendGridService;
    }
    async create(input, param) {
        const { userId } = param;
        const [user, disease, medicalCenter, vaccine] = await Promise.all([
            this.userRepository.findOneOrFail(userId),
            this.diseaseRepository.findOneOrFail(input.diseaseId),
            this.medicalCenterRepository.findOneOrFail(input.medicalCenterId),
            this.vaccineRepository.findOneOrFail(input.vaccineId),
        ]);
        await Promise.all([
            this.repository.save(this.repository.create({
                userId,
                ...input,
            })),
            this.notificationRepository.save(this.notificationRepository.create({
                userId: user.userId,
                notificationTitle: `You applied for the ${vaccine.vaccineName} vaccine on ${input.registrationTime}`,
                notificationContent: `Name: ${user.userName}\nVaccine: ${vaccine.vaccineName}\nDisease: ${disease.diseaseName}\nDose: ${input.registrationDose}\nDisease Center: ${medicalCenter.name}
          `,
                notificationType: 'Successful vaccine registration',
                notificationStatus: false,
            })),
        ]);
        await this.sendGridService.sendEmail(user.email, constants_1.registrationEmail.subject.replace('{vaccine}', vaccine.vaccineName), constants_1.registrationEmail.context
            .replace('{name}', user.userName)
            .replace('{diseaseCenter}', medicalCenter.name)
            .replace('{vaccine}', vaccine.vaccineName)
            .replace('{disease}', disease.diseaseName)
            .replace('{dose}', input.registrationDose.toString())
            .replace('{time}', input.registrationTime));
        return constants_1.successResponse;
    }
    async listRegistration(date) {
        const listRegistration = await this.repository.listRegistration(date);
        return (0, class_transformer_1.plainToInstance)(registration_output_dto_1.RegistrationOutputDto, listRegistration);
    }
    async listRegistrationAccepted(paramsDate) {
        const { date } = paramsDate;
        const listRegistration = await this.repository.listRegistrationAccepted(date);
        return (0, class_transformer_1.plainToInstance)(registration_output_dto_1.RegistrationOutputDto, listRegistration);
    }
    async acceptStatus(params) {
        const { id } = params;
        const registration = await this.repository.findOneById(id);
        if (!registration) {
            throw new common_1.NotFoundException();
        }
        await this.repository.update({ registrationId: id }, { status: true });
        await this.notificationRepository.save(this.notificationRepository.create({
            userId: registration.user.userId,
            notificationTitle: `${registration.medicalCenter.name} medical Center has accepted your vaccination application`,
            notificationContent: `Name: ${registration.user.userName}\nVaccine: ${registration.vaccine.vaccineName}\nDisease: ${registration.disease.diseaseName}\nDose: ${registration.registrationDose}\nDisease Center: ${registration.medicalCenter.name}
        `,
            notificationType: 'Injection registration has been confirmed',
            notificationStatus: false,
        }));
        await this.sendGridService.sendEmail(registration.user.email, constants_1.acceptedEmail.subject.replace('{vaccine}', registration.vaccine.vaccineName), constants_1.acceptedEmail.context
            .replace('{name}', registration.user.userName)
            .replace('{diseaseCenter}', registration.medicalCenter.name)
            .replace('{vaccine}', registration.vaccine.vaccineName)
            .replace('{disease}', registration.disease.diseaseName)
            .replace('{dose}', registration.registrationDose.toString())
            .replace('{time}', registration.registrationTime));
        return constants_1.successResponse;
    }
    async registration(param) {
        const { userId } = param;
        const [registration] = await Promise.all([
            this.repository.registration(userId),
            this.userRepository.findOneOrFail(userId),
        ]);
        return (0, class_transformer_1.plainToInstance)(registration_output_dto_1.RegistrationOutputDto, registration);
    }
    async remove(id) {
        const registration = await this.repository.findOneOrFail({
            registrationId: id,
        });
        if (registration.status) {
            throw new common_1.ForbiddenException();
        }
        await this.repository.delete({ registrationId: id });
        return constants_1.successResponse;
    }
    async update(params, input) {
        const { userId, id } = params;
        const [registration] = await Promise.all([
            this.repository.findOneOrFail({
                registrationId: id,
            }),
            this.userRepository.findOneOrFail(userId),
        ]);
        if (registration.status) {
            throw new common_1.ForbiddenException();
        }
        await this.repository.save({ registrationId: id, ...input });
        return constants_1.successResponse;
    }
    async accept(params) {
        const { id } = params;
        const registration = await this.repository.findOneOrFail(id);
        const treatment = await this.treatmentRepository.findOneOrFail({
            vaccineId: registration.vaccineId,
            diseaseId: registration.diseaseId,
        });
        if (!registration.status) {
            throw new common_1.ForbiddenException('registration not accept');
        }
        const history = await this.repository.findOneById(id);
        await this.repository.manager.transaction(async (manager) => {
            await manager.getCustomRepository(registration_repository_1.RegistrationRepository).delete(id);
            await manager.getCustomRepository(history_repository_1.HistoryRepository).save(this.historyRepository.create({
                time: (0, moment_1.default)().format(constants_1.dateFormat.dateFormatWithVN),
                dose: registration.registrationDose,
                ...registration,
            }));
            await manager.getCustomRepository(notification_repository_1.NotificationRepository).save(this.notificationRepository.create({
                userId: registration.userId,
                notificationTitle: `You have successfully vaccinated ${history.vaccine?.vaccineName}`,
                notificationContent: `Name: ${history.user.userName} \nVaccine: ${history.vaccine.vaccineName} \nDisease: ${history.disease.diseaseName} \nDose: ${history.registrationDose}\nDisease Center: ${history.medicalCenter.name}`,
                notificationType: 'Confirm you have successfully vaccinated',
                notificationStatus: false,
            }));
            await this.sendGridService.sendEmail(history.user.email, constants_1.confirmVaccineEmail.subject.replace('{vaccine}', history.vaccine.vaccineName), constants_1.confirmVaccineEmail.context
                .replace('{name}', history.user.userName)
                .replace('{diseaseCenter}', history.medicalCenter.name)
                .replace('{vaccine}', history.vaccine.vaccineName)
                .replace('{disease}', history.disease.diseaseName)
                .replace('{dose}', history.registrationDose.toString())
                .replace('{time}', (0, moment_1.default)().format(constants_1.dateFormat.dateFormatWithVN)));
        });
        if (treatment.amount > registration.registrationDose) {
            const nextDate = (0, moment_1.default)(registration.registrationTime, constants_1.dateFormat.dateFormatWithVN)
                .add(treatment.effect, 'days')
                .format(constants_1.dateFormat.dateFormatWithVN);
            this.repository.manager.transaction(async (manager) => {
                manager.getCustomRepository(registration_repository_1.RegistrationRepository).save(this.repository.create({
                    userId: registration.userId,
                    vaccineId: registration.vaccineId,
                    medicalCenterId: registration.medicalCenterId,
                    diseaseId: registration.diseaseId,
                    status: true,
                    registrationDose: registration.registrationDose + 1,
                    registrationTime: nextDate,
                }));
                await manager.getCustomRepository(notification_repository_1.NotificationRepository).save(this.notificationRepository.create({
                    userId: registration.userId,
                    notificationTitle: `Schedule an appointment for the next dose of ${history.vaccine.vaccineName} vaccine on ${nextDate}`,
                    notificationContent: `Name: ${history.user.userName}\nVaccine: ${history.vaccine.vaccineName}\nDisease: ${history.disease.diseaseName}\nDose: ${history.registrationDose + 1}\nDisease Center: ${history.medicalCenter.name}
            `,
                    notificationType: 'You have an appointment',
                    notificationStatus: false,
                }));
                await this.sendGridService.sendEmail(history.user.email, constants_1.appointmentEmail.subject.replace('{time}', nextDate), constants_1.appointmentEmail.context
                    .replace('{name}', history.user.userName)
                    .replace('{diseaseCenter}', history.medicalCenter.name)
                    .replace('{vaccine}', history.vaccine.vaccineName)
                    .replace('{disease}', history.disease.diseaseName)
                    .replace('{dose}', history.registrationDose.toString())
                    .replace('{time}', nextDate));
            });
        }
        return constants_1.successResponse;
    }
    async findByDate(paramsDate) {
        const { date } = paramsDate;
        const dateVN = (0, moment_1.default)(date).format(constants_1.dateFormat.dateFormatWithVN);
        const appointment = await this.repository.findByDate(dateVN);
        return (0, class_transformer_1.plainToInstance)(registration_output_dto_1.RegistrationOutputDto, appointment);
    }
    async findByUser(param) {
        const { userId } = param;
        const listRegistration = await this.repository.findByUser(userId);
        return (0, class_transformer_1.plainToInstance)(registration_output_dto_1.RegistrationOutputDto, listRegistration);
    }
    async handleCron() {
        const registrations = await this.repository.cronFindRegistration();
        registrations.map(async (registration) => {
            await this.notificationRepository.save(this.notificationRepository.create({
                userId: registration.userId,
                notificationTitle: `Reminds you to have an appointment for vaccination on ${registration.registrationTime}`,
                notificationContent: `Name: ${registration.user.userName} \nVaccine: ${registration.vaccine.vaccineName} \nDisease: ${registration.disease.diseaseName} \nDose: ${registration.registrationDose}\nDisease Center: ${registration.medicalCenter.name}`,
                notificationType: 'Reminds you to have an appointment for vaccination.',
                notificationStatus: false,
            }));
            await this.sendGridService.sendEmail(registration.user.email, constants_1.remindEmail.subject.replace('{time}', registration.registrationTime), constants_1.remindEmail.context
                .replace('{name}', registration.user.userName)
                .replace('{diseaseCenter}', registration.medicalCenter.name)
                .replace('{vaccine}', registration.vaccine.vaccineName)
                .replace('{disease}', registration.disease.diseaseName)
                .replace('{dose}', registration.registrationDose.toString())
                .replace('{time}', registration.registrationTime));
        });
        return constants_1.successResponse;
    }
};
RegistrationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [registration_repository_1.RegistrationRepository,
        user_repository_1.UserRepository,
        disease_repository_1.DiseaseRepository,
        medical_center_repository_1.MedicalCenterRepository,
        history_repository_1.HistoryRepository,
        treament_repository_1.TreatmentRepository,
        notification_repository_1.NotificationRepository,
        vaccine_repository_1.VaccineRepository,
        ses_service_1.SesService,
        sendgrip_service_1.SendGridService])
], RegistrationService);
exports.RegistrationService = RegistrationService;
//# sourceMappingURL=registration.service.js.map