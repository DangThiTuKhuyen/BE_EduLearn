import { BaseEntity } from 'typeorm';
export declare class Notification extends BaseEntity {
    notificationId: number;
    userId: string;
    notificationTitle: string;
    notificationContent: string;
    notificationType: string;
    notificationStatus: boolean;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=notification.entity.d.ts.map