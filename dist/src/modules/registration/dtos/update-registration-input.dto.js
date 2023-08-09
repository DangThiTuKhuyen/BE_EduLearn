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
exports.UpdateRegistrationInputDto = void 0;
const constants_1 = require("../../../shared/constants");
const validations_1 = require("../../../shared/validations");
const class_validator_1 = require("class-validator");
class UpdateRegistrationInputDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateRegistrationInputDto.prototype, "vaccineId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateRegistrationInputDto.prototype, "medicalCenterId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateRegistrationInputDto.prototype, "diseaseId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateRegistrationInputDto.prototype, "registrationDose", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, validations_1.IsDateFormatString)([constants_1.dateFormat.dateFormatWithVN]),
    __metadata("design:type", String)
], UpdateRegistrationInputDto.prototype, "registrationTime", void 0);
exports.UpdateRegistrationInputDto = UpdateRegistrationInputDto;
//# sourceMappingURL=update-registration-input.dto.js.map