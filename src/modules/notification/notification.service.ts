import { Injectable } from '@nestjs/common';
import { dateFormat, successResponse } from '@shared/constants';
import { SuccessOutputDto } from '@shared/dtos/success-output.dto';
import { plainToInstance } from 'class-transformer';
import moment from 'moment';
import { NotificationOutputDto } from './dtos/notification-output.dto';
import { NotificationParamDto } from './dtos/notification-param.dto';
import { UpdateNotificationInput } from './dtos/update-notification-input.dto';
import { NotificationRepository } from './notification.repository';

@Injectable()
export class NotificationService {
  constructor(private readonly repository: NotificationRepository) {}

  async findAll(param: NotificationParamDto): Promise<NotificationOutputDto[]> {
    const notifications = await this.repository.find({
      where: { userId: param.userId },
      order: { createdAt: 'DESC' },
    });

    const response = notifications.map((notification) => {
      return {
        ...notification,
        createdAt: moment(
          notification.createdAt,
          dateFormat.timestampWithTimeZone,
        ).format(dateFormat.dateTimeFormatVN),
      };
    });

    return plainToInstance(NotificationOutputDto, response);
  }

  async update(input: UpdateNotificationInput): Promise<SuccessOutputDto> {
    await this.repository.updateStatus(input);

    return successResponse;
  }
}
