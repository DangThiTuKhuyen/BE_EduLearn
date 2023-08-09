import { HistoryOutputDto } from './dtos/history-output.dto';
import { HistoryDateParamDto } from './dtos/history-date-param.dto';
import { HistoryRepository } from './history.repository';
import { ProfitOutputDto } from './dtos/profit-output.dto';
import { PeopleOutputDto } from './dtos/people-output.dto';
import { VaccineOutputDto } from './dtos/vaccine-output.dto';
import { PeopleMedicalCenterOutput } from './dtos/people-medical-center-output.dto';
import { DiseaseOutputDto } from './dtos/disease-output.dto';
export declare class HistoryService {
    private readonly repository;
    constructor(repository: HistoryRepository);
    findAll(userId: string): Promise<HistoryOutputDto[]>;
    disease(year: number): Promise<DiseaseOutputDto[]>;
    scanQR(userId: string): Promise<string>;
    findWithDate(paramsDate: HistoryDateParamDto): Promise<HistoryOutputDto[]>;
    profit(year: number): Promise<ProfitOutputDto[]>;
    people(year: number): Promise<PeopleOutputDto[]>;
    peopleCenter(year: number): Promise<PeopleMedicalCenterOutput[]>;
    vaccine(year: number): Promise<VaccineOutputDto[]>;
}
//# sourceMappingURL=history.service.d.ts.map