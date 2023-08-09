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
exports.VaccineController = void 0;
const common_1 = require("@nestjs/common");
const vaccine_service_1 = require("./vaccine.service");
const create_vaccine_dto_1 = require("./dtos/create-vaccine.dto");
const update_vaccine_dto_1 = require("./dtos/update-vaccine.dto");
const enum_constant_1 = require("../../shared/constants/enum.constant");
const role_decorator_1 = require("../../shared/decorators/role.decorator");
let VaccineController = class VaccineController {
    constructor(vaccineService) {
        this.vaccineService = vaccineService;
    }
    create(createVaccineDto) {
        return this.vaccineService.create(createVaccineDto);
    }
    findAll() {
        return this.vaccineService.findAll();
    }
    findOne(id) {
        return this.vaccineService.findOne(+id);
    }
    update(id, updateVaccineDto) {
        return this.vaccineService.update(+id, updateVaccineDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vaccine_dto_1.CreateVaccineDto]),
    __metadata("design:returntype", void 0)
], VaccineController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VaccineController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VaccineController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vaccine_dto_1.UpdateVaccineDto]),
    __metadata("design:returntype", void 0)
], VaccineController.prototype, "update", null);
VaccineController = __decorate([
    (0, common_1.Controller)('vaccine'),
    __metadata("design:paramtypes", [vaccine_service_1.VaccineService])
], VaccineController);
exports.VaccineController = VaccineController;
//# sourceMappingURL=vaccine.controller.js.map