import { IsString } from 'class-validator';

export class NotificationParamDto {
  @IsString()
  userId: string;
}
