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
exports.DiseaseService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const disease_repository_1 = require("./disease.repository");
const disease_output_dto_1 = require("./dtos/disease-output.dto");
let DiseaseService = class DiseaseService {
    constructor(repository) {
        this.repository = repository;
    }
    async findDiseasesVaccines() {
        const diseasesVaccines = await this.repository.findDiseasesVaccines();
        return (0, class_transformer_1.plainToInstance)(disease_output_dto_1.DiseaseOutputDto, diseasesVaccines);
    }
};
DiseaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [disease_repository_1.DiseaseRepository])
], DiseaseService);
exports.DiseaseService = DiseaseService;
//# sourceMappingURL=disease.service.js.map