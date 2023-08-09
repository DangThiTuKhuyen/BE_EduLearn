import { Controller, Get } from '@nestjs/common';
import { RoleValue } from '@shared/constants/enum.constant';
import { Roles } from '@shared/decorators/role.decorator';
import { MedicalCenterOutputDto } from './dtos/medical-center-output.dto';
import { MedicalCenterService } from './medical-center.service';

@Controller('medical-center')
export class MedicalCenterController {
  constructor(private readonly medicalCenterService: MedicalCenterService) {}

  @Get()
  @Roles([RoleValue.User])
  findAll(): Promise<MedicalCenterOutputDto[]> {
    return this.medicalCenterService.findAll();
  }
}
