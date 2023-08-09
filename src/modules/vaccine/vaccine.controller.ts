import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { VaccineService } from './vaccine.service';
import { CreateVaccineDto } from './dtos/create-vaccine.dto';
import { UpdateVaccineDto } from './dtos/update-vaccine.dto';
import { RoleValue } from '@shared/constants/enum.constant';
import { Roles } from '@shared/decorators/role.decorator';

@Controller('vaccine')
export class VaccineController {
  constructor(private readonly vaccineService: VaccineService) {}

  @Post()
  @Roles([RoleValue.User])
  create(@Body() createVaccineDto: CreateVaccineDto) {
    return this.vaccineService.create(createVaccineDto);
  }

  @Get()
  @Roles([RoleValue.User])
  findAll() {
    return this.vaccineService.findAll();
  }

  @Get(':id')
  @Roles([RoleValue.User])
  findOne(@Param('id') id: string) {
    return this.vaccineService.findOne(+id);
  }

  @Patch(':id')
  @Roles([RoleValue.User])
  update(@Param('id') id: string, @Body() updateVaccineDto: UpdateVaccineDto) {
    return this.vaccineService.update(+id, updateVaccineDto);
  }
}
