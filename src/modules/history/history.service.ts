import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { HistoryOutputDto } from './dtos/history-output.dto';
import { HistoryDateParamDto } from './dtos/history-date-param.dto';
import { HistoryRepository } from './history.repository';
import { ProfitOutputDto } from './dtos/profit-output.dto';
import { PeopleOutputDto } from './dtos/people-output.dto';
import { VaccineOutputDto } from './dtos/vaccine-output.dto';
import { PeopleMedicalCenterOutput } from './dtos/people-medical-center-output.dto';
import { DiseaseOutputDto } from './dtos/disease-output.dto';

@Injectable()
export class HistoryService {
  constructor(private readonly repository: HistoryRepository) {}

  async findAll(userId: string): Promise<HistoryOutputDto[]> {
    const histories = await this.repository.findHistory(userId);

    const response = histories.reduce((c, d) => {
      c[d.diseaseId] = [...(c[d.diseaseId] || []), d];
      return c;
    }, []);

    return plainToInstance(HistoryOutputDto, response);
  }

  async disease(year: number): Promise<DiseaseOutputDto[]> {
    const diseases = await this.repository.findDisease(year);

    return diseases;
  }

  async scanQR(userId: string): Promise<string> {
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

  async findWithDate(
    paramsDate: HistoryDateParamDto,
  ): Promise<HistoryOutputDto[]> {
    const { date } = paramsDate;

    const histories = await this.repository.findWithDate(date);

    return plainToInstance(HistoryOutputDto, histories);
  }

  async profit(year: number): Promise<ProfitOutputDto[]> {
    const profit = await this.repository.profit(year);

    return plainToInstance(ProfitOutputDto, profit);
  }

  async people(year: number): Promise<PeopleOutputDto[]> {
    const people = await this.repository.people(year);

    return plainToInstance(PeopleOutputDto, people);
  }

  async peopleCenter(year: number): Promise<PeopleMedicalCenterOutput[]> {
    const people = await this.repository.peopleCenter(year);

    return plainToInstance(PeopleMedicalCenterOutput, people);
  }

  async vaccine(year: number): Promise<VaccineOutputDto[]> {
    const vaccine = await this.repository.vaccine(year);

    return plainToInstance(VaccineOutputDto, vaccine);
  }
}
