"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaccineRepository = void 0;
const vaccine_entity_1 = require("../../entities/vaccine.entity");
const typeorm_1 = require("typeorm");
let VaccineRepository = class VaccineRepository extends typeorm_1.Repository {
};
VaccineRepository = __decorate([
    (0, typeorm_1.EntityRepository)(vaccine_entity_1.Vaccine)
], VaccineRepository);
exports.VaccineRepository = VaccineRepository;
//# sourceMappingURL=vaccine.repository.js.map