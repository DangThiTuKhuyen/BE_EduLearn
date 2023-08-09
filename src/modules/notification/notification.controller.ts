import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { RoleValue } from '@shared/constants/enum.constant';
import { Roles } from '@shared/decorators/role.decorator';
import { SuccessOutputDto } from '@shared/dtos/success-output.dto';
import { NotificationOutputDto } from './dtos/notification-output.dto';
import { NotificationParamDto } from './dtos/notification-param.dto';
import { UpdateNotificationInput } from './dtos/update-notification-input.dto';
import { NotificationService } from './notification.service';

@Controller('users/:userId/notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  @Roles([RoleValue.User])
  async findByUser(
    @Param() param: NotificationParamDto,
  ): Promise<NotificationOutputDto[]> {
    return this.notificationService.findAll(param);
  }

  @Put()
  @Roles([RoleValue.User])
  async update(
    @Body() input: UpdateNotificationInput,
  ): Promise<SuccessOutputDto> {
    return this.notificationService.update(input);
  }
}
