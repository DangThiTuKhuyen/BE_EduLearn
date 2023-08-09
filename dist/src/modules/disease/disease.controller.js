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
exports.DiseaseController = void 0;
const common_1 = require("@nestjs/common");
const enum_constant_1 = require("../../shared/constants/enum.constant");
const role_decorator_1 = require("../../shared/decorators/role.decorator");
const disease_service_1 = require("./disease.service");
let DiseaseController = class DiseaseController {
    constructor(diseaseService) {
        this.diseaseService = diseaseService;
    }
    findDiseasesVaccines() {
        return this.diseaseService.findDiseasesVaccines();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DiseaseController.prototype, "findDiseasesVaccines", null);
DiseaseController = __decorate([
    (0, common_1.Controller)('/users/:userId/diseases'),
    __metadata("design:paramtypes", [disease_service_1.DiseaseService])
], DiseaseController);
exports.DiseaseController = DiseaseController;
//# sourceMappingURL=disease.controller.js.map