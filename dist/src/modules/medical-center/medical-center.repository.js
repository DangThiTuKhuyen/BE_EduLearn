"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalCenterRepository = void 0;
const medical_center_entity_1 = require("../../entities/medical-center.entity");
const typeorm_1 = require("typeorm");
let MedicalCenterRepository = class MedicalCenterRepository extends typeorm_1.Repository {
};
MedicalCenterRepository = __decorate([
    (0, typeorm_1.EntityRepository)(medical_center_entity_1.MedicalCenter)
], MedicalCenterRepository);
exports.MedicalCenterRepository = MedicalCenterRepository;
//# sourceMappingURL=medical-center.repository.js.map