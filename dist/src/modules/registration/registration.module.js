"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationModule = void 0;
const common_1 = require("@nestjs/common");
const registration_service_1 = require("./registration.service");
const registration_controller_1 = require("./registration.controller");
const registration_repository_1 = require("./registration.repository");
const shared_module_1 = require("../../shared/shared.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_repository_1 = require("../user/user.repository");
const disease_repository_1 = require("../disease/disease.repository");
const medical_center_repository_1 = require("../medical-center/medical-center.repository");
const history_repository_1 = require("../history/history.repository");
const treament_repository_1 = require("../treament/treament.repository");
const notification_repository_1 = require("../notification/notification.repository");
const vaccine_repository_1 = require("../vaccine/vaccine.repository");
const ses_service_1 = require("../../shared/common/ses-service");
const sendgrip_service_1 = require("../../shared/common/sendgrip-service");
let RegistrationModule = class RegistrationModule {
};
RegistrationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            shared_module_1.SharedModule,
            typeorm_1.TypeOrmModule.forFeature([
                registration_repository_1.RegistrationRepository,
                user_repository_1.UserRepository,
                disease_repository_1.DiseaseRepository,
                medical_center_repository_1.MedicalCenterRepository,
                history_repository_1.HistoryRepository,
                treament_repository_1.TreatmentRepository,
                notification_repository_1.NotificationRepository,
                vaccine_repository_1.VaccineRepository,
            ]),
        ],
        controllers: [registration_controller_1.RegistrationController],
        providers: [registration_service_1.RegistrationService, ses_service_1.SesService, sendgrip_service_1.SendGridService],
        exports: [registration_service_1.RegistrationService],
    })
], RegistrationModule);
exports.RegistrationModule = RegistrationModule;
//# sourceMappingURL=registration.module.js.map