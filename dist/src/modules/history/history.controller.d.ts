import { HistoryOutputDto } from './dtos/history-output.dto';
import { HistoryParamDto } from './dtos/history-param.dto';
import { HistoryDateParamDto } from './dtos/history-date-param.dto';
import { HistoryService } from './history.service';
import { ProfitOutputDto } from './dtos/profit-output.dto';
import { HistoryProfitParamDto } from './dtos/history-profit-param.dto';
import { PeopleOutputDto } from './dtos/people-output.dto';
import { VaccineOutputDto } from './dtos/vaccine-output.dto';
import { PeopleMedicalCenterOutput } from './dtos/people-medical-center-output.dto';
import { DiseaseOutputDto } from './dtos/disease-output.dto';
export declare class HistoryController {
    private readonly historyService;
    constructor(historyService: HistoryService);
    profit(paramYear: HistoryProfitParamDto): Promise<ProfitOutputDto[]>;
    disease(paramYear: HistoryProfitParamDto): Promise<DiseaseOutputDto[]>;
    scanQR(param: HistoryParamDto): Promise<string>;
    vaccine(paramYear: HistoryProfitParamDto): Promise<VaccineOutputDto[]>;
    people(paramYear: HistoryProfitParamDto): Promise<PeopleOutputDto[]>;
    peopleCenter(paramYear: HistoryProfitParamDto): Promise<PeopleMedicalCenterOutput[]>;
    findAll(param: HistoryParamDto): Promise<HistoryOutputDto[]>;
    findWithDate(paramsDate: HistoryDateParamDto): Promise<HistoryOutputDto[]>;
}
//# sourceMappingURL=history.controller.d.ts.map