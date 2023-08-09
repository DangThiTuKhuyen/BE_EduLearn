"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiseaseRepository = void 0;
const disease_entity_1 = require("../../entities/disease.entity");
const typeorm_1 = require("typeorm");
let DiseaseRepository = class DiseaseRepository extends typeorm_1.Repository {
    findDiseasesVaccines() {
        return this.createQueryBuilder('disease')
            .leftJoinAndSelect('disease.treatments', 'treatments')
            .leftJoinAndSelect('treatments.vaccine', 'vaccine')
            .getMany();
    }
};
DiseaseRepository = __decorate([
    (0, typeorm_1.EntityRepository)(disease_entity_1.Disease)
], DiseaseRepository);
exports.DiseaseRepository = DiseaseRepository;
//# sourceMappingURL=disease.repository.js.map