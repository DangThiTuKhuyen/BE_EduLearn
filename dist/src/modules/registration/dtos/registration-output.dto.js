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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationOutputDto = void 0;
const disease_output_dto_1 = require("../../disease/dtos/disease-output.dto");
const medical_center_output_dto_1 = require("../../medical-center/dtos/medical-center-output.dto");
const dtos_1 = require("../../user/dtos");
const vaccine_output_dto_1 = require("../../vaccine/dtos/vaccine-output.dto");
const class_transformer_1 = require("class-transformer");
class RegistrationOutputDto {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], RegistrationOutputDto.prototype, "registrationId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], RegistrationOutputDto.prototype, "userId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], RegistrationOutputDto.prototype, "vaccineId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], RegistrationOutputDto.prototype, "medicalCenterId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], RegistrationOutputDto.prototype, "diseaseId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], RegistrationOutputDto.prototype, "registrationDose", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], RegistrationOutputDto.prototype, "registrationTime", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], RegistrationOutputDto.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => dtos_1.UserOutputDto),
    __metadata("design:type", dtos_1.UserOutputDto)
], RegistrationOutputDto.prototype, "user", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => medical_center_output_dto_1.MedicalCenterOutputDto),
    __metadata("design:type", medical_center_output_dto_1.MedicalCenterOutputDto)
], RegistrationOutputDto.prototype, "medicalCenter", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => vaccine_output_dto_1.VaccineOutputDto),
    __metadata("design:type", vaccine_output_dto_1.VaccineOutputDto)
], RegistrationOutputDto.prototype, "vaccine", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => disease_output_dto_1.DiseaseOutputDto),
    __metadata("design:type", disease_output_dto_1.DiseaseOutputDto)
], RegistrationOutputDto.prototype, "disease", void 0);
exports.RegistrationOutputDto = RegistrationOutputDto;
//# sourceMappingURL=registration-output.dto.js.map