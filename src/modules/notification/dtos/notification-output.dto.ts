import { Expose } from 'class-transformer';

export class NotificationOutputDto {
  @Expose()
  notificationId: number;

  @Expose()
  userId: string;

  @Expose()
  notificationTitle: string;

  @Expose()
  notificationContent: string;

  @Expose()
  notificationType: string;

  @Expose()
  notificationStatus: boolean;

  @Expose()
  createdAt: string;
}
