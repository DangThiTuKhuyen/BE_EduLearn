import { Notification } from 'src/entities/notification.entity';
import { Repository } from 'typeorm';
import { UpdateNotificationInput } from './dtos/update-notification-input.dto';
export declare class NotificationRepository extends Repository<Notification> {
    updateStatus(input: UpdateNotificationInput): Promise<import("typeorm").UpdateResult>;
}
//# sourceMappingURL=notification.repository.d.ts.map