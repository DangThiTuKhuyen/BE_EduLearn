import { IsArray, IsNumber } from 'class-validator';

export class UpdateNotificationInput {
  @IsNumber({}, { each: true })
  @IsArray()
  notificationId: number[];
}
