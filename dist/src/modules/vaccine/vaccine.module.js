"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaccineModule = void 0;
const common_1 = require("@nestjs/common");
const vaccine_service_1 = require("./vaccine.service");
const vaccine_controller_1 = require("./vaccine.controller");
const vaccine_repository_1 = require("./vaccine.repository");
const typeorm_1 = require("@nestjs/typeorm");
const shared_module_1 = require("../../shared/shared.module");
let VaccineModule = class VaccineModule {
};
VaccineModule = __decorate([
    (0, common_1.Module)({
        imports: [shared_module_1.SharedModule, typeorm_1.TypeOrmModule.forFeature([vaccine_repository_1.VaccineRepository])],
        controllers: [vaccine_controller_1.VaccineController],
        providers: [vaccine_service_1.VaccineService],
        exports: [vaccine_service_1.VaccineService],
    })
], VaccineModule);
exports.VaccineModule = VaccineModule;
//# sourceMappingURL=vaccine.module.js.map