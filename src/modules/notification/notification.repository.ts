import { Notification } from 'src/entities/notification.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UpdateNotificationInput } from './dtos/update-notification-input.dto';

@EntityRepository(Notification)
export class NotificationRepository extends Repository<Notification> {
  updateStatus(input: UpdateNotificationInput) {
    return this.createQueryBuilder('notification')
      .update(Notification)
      .set({ notificationStatus: true })
      .whereInIds(input.notificationId)
      .setParameters({ input })
      .execute();
  }
}
