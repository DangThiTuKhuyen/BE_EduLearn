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
exports.Vaccine = void 0;
const typeorm_1 = require("typeorm");
const disease_entity_1 = require("./disease.entity");
const history_entity_1 = require("./history.entity");
const registration_entity_1 = require("./registration.entity");
const treatment_entity_1 = require("./treatment.entity");
let Vaccine = class Vaccine extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'vaccine_id' }),
    __metadata("design:type", Number)
], Vaccine.prototype, "vaccineId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'vaccine_name' }),
    __metadata("design:type", String)
], Vaccine.prototype, "vaccineName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'vaccine_price' }),
    __metadata("design:type", Number)
], Vaccine.prototype, "vaccinePrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'country' }),
    __metadata("design:type", Number)
], Vaccine.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'vaccine_firm' }),
    __metadata("design:type", Number)
], Vaccine.prototype, "vaccineFirm", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Vaccine.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Vaccine.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => disease_entity_1.Disease, (disease) => disease.vaccines),
    (0, typeorm_1.JoinTable)({
        name: 'treatment',
        joinColumn: {
            name: 'vaccine_id',
            referencedColumnName: 'vaccineId',
        },
        inverseJoinColumn: {
            name: 'disease_id',
            referencedColumnName: 'diseaseId',
        },
    }),
    __metadata("design:type", Array)
], Vaccine.prototype, "diseases", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => registration_entity_1.Registration, (registration) => registration.vaccine),
    __metadata("design:type", Array)
], Vaccine.prototype, "registrations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => treatment_entity_1.Treatment, (treatment) => treatment.vaccine),
    __metadata("design:type", Array)
], Vaccine.prototype, "treatments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => history_entity_1.History, (history) => history.vaccine),
    __metadata("design:type", Array)
], Vaccine.prototype, "histories", void 0);
Vaccine = __decorate([
    (0, typeorm_1.Entity)('vaccine')
], Vaccine);
exports.Vaccine = Vaccine;
//# sourceMappingURL=vaccine.entity.js.map