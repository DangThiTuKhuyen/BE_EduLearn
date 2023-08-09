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
exports.HistoryService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const history_output_dto_1 = require("./dtos/history-output.dto");
const history_repository_1 = require("./history.repository");
const profit_output_dto_1 = require("./dtos/profit-output.dto");
const people_output_dto_1 = require("./dtos/people-output.dto");
const vaccine_output_dto_1 = require("./dtos/vaccine-output.dto");
const people_medical_center_output_dto_1 = require("./dtos/people-medical-center-output.dto");
let HistoryService = class HistoryService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(userId) {
        const histories = await this.repository.findHistory(userId);
        const response = histories.reduce((c, d) => {
            c[d.diseaseId] = [...(c[d.diseaseId] || []), d];
            return c;
        }, []);
        return (0, class_transformer_1.plainToInstance)(history_output_dto_1.HistoryOutputDto, response);
    }
    async disease(year) {
        const diseases = await this.repository.findDisease(year);
        return diseases;
    }
    async scanQR(userId) {
        const histories = await this.repository.findHistory(userId);
        const response = histories.reduce((c, d) => {
            c[d.diseaseId] = [...(c[d.diseaseId] || []), d];
            return c;
        }, []);
        let result = '';
        response.map((disease) => {
            result +=
                '<b style = "font-size: 30px"> Disease: ' +
                    disease[0].disease.diseaseName +
                    '</b> <br>';
            disease.map((histories) => {
                result +=
                    '<p style = "text-indent: 30px; font-size: 20px"> Vaccine: ' +
                        histories.disease.treatments[0].vaccine.vaccineName +
                        ', Dose: ' +
                        histories.dose +
                        ', ' +
                        histories.medicalCenter.name +
                        ', Time: ' +
                        histories.time +
                        '<br> <p>';
            });
        });
        return result;
    }
    async findWithDate(paramsDate) {
        const { date } = paramsDate;
        const histories = await this.repository.findWithDate(date);
        return (0, class_transformer_1.plainToInstance)(history_output_dto_1.HistoryOutputDto, histories);
    }
    async profit(year) {
        const profit = await this.repository.profit(year);
        return (0, class_transformer_1.plainToInstance)(profit_output_dto_1.ProfitOutputDto, profit);
    }
    async people(year) {
        const people = await this.repository.people(year);
        return (0, class_transformer_1.plainToInstance)(people_output_dto_1.PeopleOutputDto, people);
    }
    async peopleCenter(year) {
        const people = await this.repository.peopleCenter(year);
        return (0, class_transformer_1.plainToInstance)(people_medical_center_output_dto_1.PeopleMedicalCenterOutput, people);
    }
    async vaccine(year) {
        const vaccine = await this.repository.vaccine(year);
        return (0, class_transformer_1.plainToInstance)(vaccine_output_dto_1.VaccineOutputDto, vaccine);
    }
};
HistoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [history_repository_1.HistoryRepository])
], HistoryService);
exports.HistoryService = HistoryService;
//# sourceMappingURL=history.service.js.map