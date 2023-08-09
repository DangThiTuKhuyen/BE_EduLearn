import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('notification')
export class Notification extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'notification_id' })
  notificationId: number;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'notification_title' })
  notificationTitle: string;

  @Column({ name: 'notification_content' })
  notificationContent: string;

  @Column({ name: 'notification_type' })
  notificationType: string;

  @Column({ name: 'notification_status' })
  notificationStatus: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
