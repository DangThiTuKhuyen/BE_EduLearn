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
exports.Treatment = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const disease_entity_1 = require("./disease.entity");
const vaccine_entity_1 = require("./vaccine.entity");
let Treatment = class Treatment extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_2.PrimaryColumn)({ name: 'disease_id' }),
    __metadata("design:type", Number)
], Treatment.prototype, "diseaseId", void 0);
__decorate([
    (0, typeorm_2.PrimaryColumn)({ name: 'vaccine_id' }),
    __metadata("design:type", Number)
], Treatment.prototype, "vaccineId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'effect' }),
    __metadata("design:type", Number)
], Treatment.prototype, "effect", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'amount' }),
    __metadata("design:type", Number)
], Treatment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Treatment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Treatment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => disease_entity_1.Disease, (disease) => disease.treatments),
    (0, typeorm_1.JoinColumn)({ name: 'disease_id' }),
    __metadata("design:type", disease_entity_1.Disease)
], Treatment.prototype, "disease", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vaccine_entity_1.Vaccine, (vaccine) => vaccine.treatments),
    (0, typeorm_1.JoinColumn)({ name: 'vaccine_id' }),
    __metadata("design:type", vaccine_entity_1.Vaccine)
], Treatment.prototype, "vaccine", void 0);
Treatment = __decorate([
    (0, typeorm_1.Entity)('treatment')
], Treatment);
exports.Treatment = Treatment;
//# sourceMappingURL=treatment.entity.js.map