import { dateFormat } from '@shared/constants';
import moment from 'moment';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';
import { PrimaryColumn } from 'typeorm';
import { Disease } from './disease.entity';
import { MedicalCenter } from './medical-center.entity';
import { User } from './user.entity';
import { Vaccine } from './vaccine.entity';

@Entity('history')
export class History extends BaseEntity {
  @PrimaryColumn({ name: 'history_id' })
  historyId: number;

  @PrimaryColumn({ name: 'user_id' })
  userId: string;

  @Column({ name: 'vaccine_id' })
  vaccineId: number;

  @Column({
    name: 'time',
    transformer: {
      to: (value: string) => {
        return moment(value, dateFormat.dateFormatWithVN).format(
          dateFormat.dateOnlyFormat,
        );
      },
      from: (value: string) => {
        return moment(value).format(dateFormat.dateFormatWithVN);
      },
    },
  })
  time: string;

  @Column({ name: 'dose' })
  dose: number;

  @Column({ name: 'disease_id' })
  diseaseId: number;

  @Column({ name: 'medical_center_id' })
  medicalCenterId: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Disease, (disease) => disease.histories)
  @JoinColumn({ name: 'disease_id' })
  disease: Disease;

  @ManyToOne(() => Vaccine, (vaccine) => vaccine.histories)
  @JoinColumn({ name: 'vaccine_id' })
  vaccine: Vaccine;

  @ManyToOne(() => User, (user) => user.histories)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => MedicalCenter, (medicalCenter) => medicalCenter.histories)
  @JoinColumn({ name: 'medical_center_id' })
  medicalCenter: MedicalCenter;
}
