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
exports.MedicalCenter = void 0;
const typeorm_1 = require("typeorm");
const history_entity_1 = require("./history.entity");
const registration_entity_1 = require("./registration.entity");
let MedicalCenter = class MedicalCenter extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'medical_center_id' }),
    __metadata("design:type", Number)
], MedicalCenter.prototype, "medicalCenterId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name' }),
    __metadata("design:type", String)
], MedicalCenter.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'longitude' }),
    __metadata("design:type", Number)
], MedicalCenter.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'latitude' }),
    __metadata("design:type", Number)
], MedicalCenter.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], MedicalCenter.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], MedicalCenter.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => registration_entity_1.Registration, (registration) => registration.medicalCenter),
    __metadata("design:type", Array)
], MedicalCenter.prototype, "registrations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => history_entity_1.History, (history) => history.medicalCenter),
    __metadata("design:type", Array)
], MedicalCenter.prototype, "histories", void 0);
MedicalCenter = __decorate([
    (0, typeorm_1.Entity)('medical_center')
], MedicalCenter);
exports.MedicalCenter = MedicalCenter;
//# sourceMappingURL=medical-center.entity.js.map