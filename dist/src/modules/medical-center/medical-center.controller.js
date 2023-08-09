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
exports.MedicalCenterController = void 0;
const common_1 = require("@nestjs/common");
const enum_constant_1 = require("../../shared/constants/enum.constant");
const role_decorator_1 = require("../../shared/decorators/role.decorator");
const medical_center_service_1 = require("./medical-center.service");
let MedicalCenterController = class MedicalCenterController {
    constructor(medicalCenterService) {
        this.medicalCenterService = medicalCenterService;
    }
    findAll() {
        return this.medicalCenterService.findAll();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MedicalCenterController.prototype, "findAll", null);
MedicalCenterController = __decorate([
    (0, common_1.Controller)('medical-center'),
    __metadata("design:paramtypes", [medical_center_service_1.MedicalCenterService])
], MedicalCenterController);
exports.MedicalCenterController = MedicalCenterController;
//# sourceMappingURL=medical-center.controller.js.map