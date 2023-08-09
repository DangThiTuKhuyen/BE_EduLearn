import { History } from 'src/entities/history.entity';
import { EntityRepository, Repository } from 'typeorm';
import { DiseaseOutputDto } from './dtos/disease-output.dto';
import { PeopleMedicalCenterOutput } from './dtos/people-medical-center-output.dto';
import { ProfitOutputDto } from './dtos/profit-output.dto';
import { VaccineOutputDto } from './dtos/vaccine-output.dto';

@EntityRepository(History)
export class HistoryRepository extends Repository<History> {
  findHistory(userId: string) {
    return this.createQueryBuilder('history')
      .leftJoinAndSelect('history.disease', 'disease')
      .leftJoinAndSelect(
        'disease.treatments',
        'treatments',
        'treatments.vaccineId = history.vaccineId',
      )
      .leftJoinAndSelect('treatments.vaccine', 'vaccine')
      .leftJoinAndSelect('history.medicalCenter', 'medicalCenter')
      .where('history.userId = :userId')
      .orderBy('vaccine.vaccineName', 'ASC')
      .addOrderBy('history.dose', 'ASC')
      .setParameters({ userId })
      .getMany();
  }

  findWithDate(date: string) {
    return this.createQueryBuilder('history')
      .leftJoinAndSelect('history.disease', 'disease')
      .leftJoinAndSelect(
        'disease.treatments',
        'treatments',
        'treatments.vaccineId = history.vaccineId',
      )
      .leftJoinAndSelect('treatments.vaccine', 'vaccine')
      .leftJoinAndSelect('history.medicalCenter', 'medicalCenter')
      .leftJoinAndSelect('history.user', 'user')
      .where('history.time = :date')
      .setParameters({ date })
      .getMany();
  }

  profit(year: number): Promise<ProfitOutputDto[]> {
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

  people(year: number): Promise<ProfitOutputDto[]> {
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

  peopleCenter(year: number): Promise<PeopleMedicalCenterOutput[]> {
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

  vaccine(year: number): Promise<VaccineOutputDto[]> {
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

  findDisease(year: number): Promise<DiseaseOutputDto[]> {
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
}
