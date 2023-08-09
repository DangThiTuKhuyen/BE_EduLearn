import { History } from 'src/entities/history.entity';
import { Repository } from 'typeorm';
import { DiseaseOutputDto } from './dtos/disease-output.dto';
import { PeopleMedicalCenterOutput } from './dtos/people-medical-center-output.dto';
import { ProfitOutputDto } from './dtos/profit-output.dto';
import { VaccineOutputDto } from './dtos/vaccine-output.dto';
export declare class HistoryRepository extends Repository<History> {
    findHistory(userId: string): Promise<History[]>;
    findWithDate(date: string): Promise<History[]>;
    profit(year: number): Promise<ProfitOutputDto[]>;
    people(year: number): Promise<ProfitOutputDto[]>;
    peopleCenter(year: number): Promise<PeopleMedicalCenterOutput[]>;
    vaccine(year: number): Promise<VaccineOutputDto[]>;
    findDisease(year: number): Promise<DiseaseOutputDto[]>;
}
//# sourceMappingURL=history.repository.d.ts.map