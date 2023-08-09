"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryRepository = void 0;
const history_entity_1 = require("../../entities/history.entity");
const typeorm_1 = require("typeorm");
let HistoryRepository = class HistoryRepository extends typeorm_1.Repository {
    findHistory(userId) {
        return this.createQueryBuilder('history')
            .leftJoinAndSelect('history.disease', 'disease')
            .leftJoinAndSelect('disease.treatments', 'treatments', 'treatments.vaccineId = history.vaccineId')
            .leftJoinAndSelect('treatments.vaccine', 'vaccine')
            .leftJoinAndSelect('history.medicalCenter', 'medicalCenter')
            .where('history.userId = :userId')
            .orderBy('vaccine.vaccineName', 'ASC')
            .addOrderBy('history.dose', 'ASC')
            .setParameters({ userId })
            .getMany();
    }
    findWithDate(date) {
        return this.createQueryBuilder('history')
            .leftJoinAndSelect('history.disease', 'disease')
            .leftJoinAndSelect('disease.treatments', 'treatments', 'treatments.vaccineId = history.vaccineId')
            .leftJoinAndSelect('treatments.vaccine', 'vaccine')
            .leftJoinAndSelect('history.medicalCenter', 'medicalCenter')
            .leftJoinAndSelect('history.user', 'user')
            .where('history.time = :date')
            .setParameters({ date })
            .getMany();
    }
    profit(year) {
        return this.createQueryBuilder('history')
            .select([
            'SUM(vaccine.vaccinePrice) profit',
            `date_part('month', "time") "monthProfit"`,
        ])
            .leftJoin('history.vaccine', 'vaccine')
            .where(`date_part('year', time) = :year`)
            .groupBy(`"monthProfit"`)
            .setParameters({ year })
            .getRawMany();
    }
    people(year) {
        return this.createQueryBuilder('history')
            .select([
            'COUNT(Distinct history.userId) people',
            `date_part('month', "time") "monthProfit"`,
        ])
            .where(`date_part('year', time) = :year`)
            .addGroupBy(`"monthProfit"`)
            .setParameters({ year })
            .getRawMany();
    }
    peopleCenter(year) {
        return this.createQueryBuilder('history')
            .select([
            'COUNT(Distinct history.userId) people',
            `medicalCenter.name "medicalCenter"`,
        ])
            .leftJoin('history.medicalCenter', 'medicalCenter')
            .where(`date_part('year', time) = :year`)
            .addGroupBy(`"medicalCenter"`)
            .setParameters({ year })
            .getRawMany();
    }
    vaccine(year) {
        return this.createQueryBuilder('history')
            .select([
            `array_agg(distinct vaccine.vaccineName) "vaccineName"`,
            `date_part('month', "time") "monthProfit"`,
        ])
            .leftJoin('history.vaccine', 'vaccine')
            .where(`date_part('year', time) = :year`)
            .addGroupBy(`"monthProfit"`)
            .setParameters({ year })
            .getRawMany();
    }
    findDisease(year) {
        return this.createQueryBuilder('history')
            .select([
            `distinct disease.diseaseName "diseaseName"`,
            'COUNT(Distinct history.userId) people',
        ])
            .leftJoin('history.disease', 'disease')
            .where(`date_part('year', time) = :year`)
            .addGroupBy(`"diseaseName"`)
            .setParameters({ year })
            .getRawMany();
    }
};
HistoryRepository = __decorate([
    (0, typeorm_1.EntityRepository)(history_entity_1.History)
], HistoryRepository);
exports.HistoryRepository = HistoryRepository;
//# sourceMappingURL=history.repository.js.map