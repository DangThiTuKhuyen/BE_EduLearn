"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiseaseModule = void 0;
const common_1 = require("@nestjs/common");
const disease_service_1 = require("./disease.service");
const disease_controller_1 = require("./disease.controller");
const disease_repository_1 = require("./disease.repository");
const typeorm_1 = require("@nestjs/typeorm");
const shared_module_1 = require("../../shared/shared.module");
let DiseaseModule = class DiseaseModule {
};
DiseaseModule = __decorate([
    (0, common_1.Module)({
        imports: [shared_module_1.SharedModule, typeorm_1.TypeOrmModule.forFeature([disease_repository_1.DiseaseRepository])],
        controllers: [disease_controller_1.DiseaseController],
        providers: [disease_service_1.DiseaseService],
        exports: [disease_service_1.DiseaseService],
    })
], DiseaseModule);
exports.DiseaseModule = DiseaseModule;
//# sourceMappingURL=disease.module.js.map