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
exports.UserInputDto = void 0;
const constants_1 = require("../../../shared/constants");
const enum_constant_1 = require("../../../shared/constants/enum.constant");
const validations_1 = require("../../../shared/validations");
const class_validator_1 = require("class-validator");
class UserInputDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserInputDto.prototype, "userName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserInputDto.prototype, "email", void 0);
__decorate([
    (0, validations_1.IsInEnum)(enum_constant_1.Gender),
    __metadata("design:type", String)
], UserInputDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UserInputDto.prototype, "phone", void 0);
__decorate([
    (0, validations_1.IsDateFormatString)([constants_1.dateFormat.dateFormatWithVN]),
    __metadata("design:type", String)
], UserInputDto.prototype, "birthday", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UserInputDto.prototype, "identityCard", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserInputDto.prototype, "province", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserInputDto.prototype, "district", void 0);
exports.UserInputDto = UserInputDto;
//# sourceMappingURL=user-input.dto.js.map