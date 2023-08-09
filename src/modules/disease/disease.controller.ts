import { Controller, Get } from '@nestjs/common';
import { RoleValue } from '@shared/constants/enum.constant';
import { Roles } from '@shared/decorators/role.decorator';
import { DiseaseService } from './disease.service';
import { DiseaseOutputDto } from './dtos/disease-output.dto';

@Controller('/users/:userId/diseases')
export class DiseaseController {
  constructor(private readonly diseaseService: DiseaseService) {}

  @Get()
  @Roles([RoleValue.User])
  findDiseasesVaccines(): Promise<DiseaseOutputDto[]> {
    return this.diseaseService.findDiseasesVaccines();
  }
}
