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
exports.Registration = void 0;
const constants_1 = require("../shared/constants");
const moment_1 = __importDefault(require("moment"));
const typeorm_1 = require("typeorm");
const disease_entity_1 = require("./disease.entity");
const medical_center_entity_1 = require("./medical-center.entity");
const user_entity_1 = require("./user.entity");
const vaccine_entity_1 = require("./vaccine.entity");
let Registration = class Registration extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'registration_id' }),
    __metadata("design:type", Number)
], Registration.prototype, "registrationId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", String)
], Registration.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'vaccine_id' }),
    __metadata("design:type", Number)
], Registration.prototype, "vaccineId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'medical_center_id' }),
    __metadata("design:type", Number)
], Registration.prototype, "medicalCenterId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'disease_id' }),
    __metadata("design:type", Number)
], Registration.prototype, "diseaseId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'registration_dose' }),
    __metadata("design:type", Number)
], Registration.prototype, "registrationDose", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'registration_time',
        transformer: {
            to: (value) => {
                return (0, moment_1.default)(value, constants_1.dateFormat.dateFormatWithVN).format(constants_1.dateFormat.dateOnlyFormat);
            },
            from: (value) => {
                return (0, moment_1.default)(value).format(constants_1.dateFormat.dateFormatWithVN);
            },
        },
    }),
    __metadata("design:type", String)
], Registration.prototype, "registrationTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status' }),
    __metadata("design:type", Boolean)
], Registration.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Registration.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Registration.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.registrations),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], Registration.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vaccine_entity_1.Vaccine, (vaccine) => vaccine.registrations),
    (0, typeorm_1.JoinColumn)({ name: 'vaccine_id' }),
    __metadata("design:type", vaccine_entity_1.Vaccine)
], Registration.prototype, "vaccine", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medical_center_entity_1.MedicalCenter, (medicalCenter) => medicalCenter.registrations),
    (0, typeorm_1.JoinColumn)({ name: 'medical_center_id' }),
    __metadata("design:type", medical_center_entity_1.MedicalCenter)
], Registration.prototype, "medicalCenter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => disease_entity_1.Disease, (disease) => disease.registrations),
    (0, typeorm_1.JoinColumn)({ name: 'disease_id' }),
    __metadata("design:type", disease_entity_1.Disease)
], Registration.prototype, "disease", void 0);
Registration = __decorate([
    (0, typeorm_1.Entity)('registration')
], Registration);
exports.Registration = Registration;
//# sourceMappingURL=registration.entity.js.map