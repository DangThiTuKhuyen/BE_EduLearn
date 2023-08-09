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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationController = void 0;
const common_1 = require("@nestjs/common");
const enum_constant_1 = require("../../shared/constants/enum.constant");
const role_decorator_1 = require("../../shared/decorators/role.decorator");
const registration_date_param_dto_1 = require("./dtos/registration-date-param.dto");
const registration_input_dto_1 = require("./dtos/registration-input.dto");
const registration_param_dto_1 = require("./dtos/registration-param.dto");
const registrations_param_dto_1 = require("./dtos/registrations-param.dto");
const update_registration_input_dto_1 = require("./dtos/update-registration-input.dto");
const registration_service_1 = require("./registration.service");
let RegistrationController = class RegistrationController {
    constructor(registrationService) {
        this.registrationService = registrationService;
    }
    create(input, param) {
        return this.registrationService.create(input, param);
    }
    listRegistration(paramsDate) {
        return this.registrationService.listRegistration(paramsDate.date);
    }
    registration(param) {
        return this.registrationService.registration(param);
    }
    findByUser(param) {
        return this.registrationService.findByUser(param);
    }
    listRegistrationAccepted(paramsDate) {
        return this.registrationService.listRegistrationAccepted(paramsDate);
    }
    acceptStatus(params) {
        return this.registrationService.acceptStatus(params);
    }
    remove(params) {
        return this.registrationService.remove(params.id);
    }
    update(params, input) {
        return this.registrationService.update(params, input);
    }
    accept(params) {
        return this.registrationService.accept(params);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_input_dto_1.RegistrationInputDto,
        registration_param_dto_1.RegistrationParamDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':date/allUser'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_date_param_dto_1.RegistrationDateParamDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "listRegistration", null);
__decorate([
    (0, common_1.Get)('getOne'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_param_dto_1.RegistrationParamDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "registration", null);
__decorate([
    (0, common_1.Get)('appointment'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_param_dto_1.RegistrationParamDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Get)(':date'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_date_param_dto_1.RegistrationDateParamDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "listRegistrationAccepted", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registrations_param_dto_1.RegistrationsParamDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "acceptStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registrations_param_dto_1.RegistrationsParamDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/update'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registrations_param_dto_1.RegistrationsParamDto,
        update_registration_input_dto_1.UpdateRegistrationInputDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(':id/accept'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registrations_param_dto_1.RegistrationsParamDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "accept", null);
RegistrationController = __decorate([
    (0, common_1.Controller)('users/:userId/registrations'),
    __metadata("design:paramtypes", [registration_service_1.RegistrationService])
], RegistrationController);
exports.RegistrationController = RegistrationController;
//# sourceMappingURL=registration.controller.js.map