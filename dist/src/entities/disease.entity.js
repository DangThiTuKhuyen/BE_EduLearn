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
exports.Disease = void 0;
const typeorm_1 = require("typeorm");
const history_entity_1 = require("./history.entity");
const registration_entity_1 = require("./registration.entity");
const treatment_entity_1 = require("./treatment.entity");
const vaccine_entity_1 = require("./vaccine.entity");
let Disease = class Disease extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'disease_id' }),
    __metadata("design:type", Number)
], Disease.prototype, "diseaseId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'disease_name' }),
    __metadata("design:type", String)
], Disease.prototype, "diseaseName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'disease_describe' }),
    __metadata("design:type", String)
], Disease.prototype, "diseaseDescribe", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Disease.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Disease.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => vaccine_entity_1.Vaccine, (vaccine) => vaccine.diseases),
    (0, typeorm_1.JoinTable)({
        name: 'treatment',
        joinColumn: {
            name: 'disease_id',
            referencedColumnName: 'diseaseId',
        },
        inverseJoinColumn: {
            name: 'vaccine_id',
            referencedColumnName: 'vaccineId',
        },
    }),
    __metadata("design:type", Array)
], Disease.prototype, "vaccines", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => registration_entity_1.Registration, (registration) => registration.disease),
    __metadata("design:type", Array)
], Disease.prototype, "registrations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => treatment_entity_1.Treatment, (treatment) => treatment.disease),
    __metadata("design:type", Array)
], Disease.prototype, "treatments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => history_entity_1.History, (history) => history.disease),
    __metadata("design:type", Array)
], Disease.prototype, "histories", void 0);
Disease = __decorate([
    (0, typeorm_1.Entity)('disease')
], Disease);
exports.Disease = Disease;
//# sourceMappingURL=disease.entity.js.map