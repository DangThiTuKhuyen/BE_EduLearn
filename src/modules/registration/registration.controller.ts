import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { RoleValue } from '@shared/constants/enum.constant';
import { Roles } from '@shared/decorators/role.decorator';
import { SuccessOutputDto } from '@shared/dtos/success-output.dto';
import { RegistrationDateParamDto } from './dtos/registration-date-param.dto';
import { RegistrationInputDto } from './dtos/registration-input.dto';
import { RegistrationOutputDto } from './dtos/registration-output.dto';
import { RegistrationParamDto } from './dtos/registration-param.dto';
import { RegistrationsParamDto } from './dtos/registrations-param.dto';
import { UpdateRegistrationInputDto } from './dtos/update-registration-input.dto';
import { RegistrationService } from './registration.service';

@Controller('users/:userId/registrations')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  @Roles([RoleValue.User])
  create(
    @Body() input: RegistrationInputDto,
    @Param() param: RegistrationParamDto,
  ): Promise<SuccessOutputDto> {
    return this.registrationService.create(input, param);
  }

  @Get(':date/allUser')
  @Roles([RoleValue.User])
  listRegistration(
    @Param() paramsDate: RegistrationDateParamDto,
  ): Promise<RegistrationOutputDto[]> {
    return this.registrationService.listRegistration(paramsDate.date);
  }

  @Get('getOne')
  @Roles([RoleValue.User])
  registration(
    @Param() param: RegistrationParamDto,
  ): Promise<RegistrationOutputDto[]> {
    return this.registrationService.registration(param);
  }

  @Get('appointment')
  @Roles([RoleValue.User])
  findByUser(
    @Param() param: RegistrationParamDto,
  ): Promise<RegistrationOutputDto[]> {
    return this.registrationService.findByUser(param);
  }

  @Get(':date')
  @Roles([RoleValue.User])
  listRegistrationAccepted(
    @Param() paramsDate: RegistrationDateParamDto,
  ): Promise<RegistrationOutputDto[]> {
    return this.registrationService.listRegistrationAccepted(paramsDate);
  }

  @Put(':id')
  @Roles([RoleValue.User])
  acceptStatus(
    @Param() params: RegistrationsParamDto,
  ): Promise<SuccessOutputDto> {
    return this.registrationService.acceptStatus(params);
  }

  @Delete(':id')
  @Roles([RoleValue.User])
  remove(@Param() params: RegistrationsParamDto): Promise<SuccessOutputDto> {
    return this.registrationService.remove(params.id);
  }

  @Put(':id/update')
  @Roles([RoleValue.User])
  update(
    @Param() params: RegistrationsParamDto,
    @Body() input: UpdateRegistrationInputDto,
  ): Promise<SuccessOutputDto> {
    return this.registrationService.update(params, input);
  }

  @Get(':id/accept')
  @Roles([RoleValue.User])
  accept(@Param() params: RegistrationsParamDto): Promise<SuccessOutputDto> {
    return this.registrationService.accept(params);
  }
}
