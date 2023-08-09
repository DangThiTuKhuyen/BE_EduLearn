import { Controller, Get, Param } from '@nestjs/common';
import { HistoryOutputDto } from './dtos/history-output.dto';
import { HistoryParamDto } from './dtos/history-param.dto';
import { HistoryDateParamDto } from './dtos/history-date-param.dto';
import { HistoryService } from './history.service';
import { ProfitOutputDto } from './dtos/profit-output.dto';
import { HistoryProfitParamDto } from './dtos/history-profit-param.dto';
import { PeopleOutputDto } from './dtos/people-output.dto';
import { VaccineOutputDto } from './dtos/vaccine-output.dto';
import { PeopleMedicalCenterOutput } from './dtos/people-medical-center-output.dto';
import { Roles } from '@shared/decorators/role.decorator';
import { GuardEnum, RoleValue } from '@shared/constants/enum.constant';
import { GuardsException } from '@shared/decorators/guard-exception.decorator';
import { DiseaseOutputDto } from './dtos/disease-output.dto';

@Controller('users/:userId/histories')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get('/profit/:year')
  @Roles([RoleValue.User])
  profit(
    @Param() paramYear: HistoryProfitParamDto,
  ): Promise<ProfitOutputDto[]> {
    return this.historyService.profit(paramYear.year);
  }

  @Get('/disease/:year')
  @Roles([RoleValue.User])
  disease(
    @Param() paramYear: HistoryProfitParamDto,
  ): Promise<DiseaseOutputDto[]> {
    return this.historyService.disease(paramYear.year);
  }

  @Get('/scanQR')
  @GuardsException([GuardEnum.UserExistGuard, GuardEnum.AuthGuard])
  scanQR(@Param() param: HistoryParamDto): Promise<string> {
    return this.historyService.scanQR(param.userId);
  }

  @Get('/vaccine/:year')
  @Roles([RoleValue.User])
  vaccine(
    @Param() paramYear: HistoryProfitParamDto,
  ): Promise<VaccineOutputDto[]> {
    return this.historyService.vaccine(paramYear.year);
  }

  @Get('/people/:year')
  @Roles([RoleValue.User])
  people(
    @Param() paramYear: HistoryProfitParamDto,
  ): Promise<PeopleOutputDto[]> {
    return this.historyService.people(paramYear.year);
  }

  @Get('/peopleCenter/:year')
  @Roles([RoleValue.User])
  peopleCenter(
    @Param() paramYear: HistoryProfitParamDto,
  ): Promise<PeopleMedicalCenterOutput[]> {
    return this.historyService.peopleCenter(paramYear.year);
  }

  @Get()
  @Roles([RoleValue.User])
  findAll(@Param() param: HistoryParamDto): Promise<HistoryOutputDto[]> {
    return this.historyService.findAll(param.userId);
  }

  @Get(':date')
  @Roles([RoleValue.User])
  findWithDate(
    @Param() paramsDate: HistoryDateParamDto,
  ): Promise<HistoryOutputDto[]> {
    return this.historyService.findWithDate(paramsDate);
  }
}
