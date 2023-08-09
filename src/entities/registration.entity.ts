import { dateFormat } from '@shared/constants';
import moment from 'moment';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Disease } from './disease.entity';
import { MedicalCenter } from './medical-center.entity';
import { User } from './user.entity';
import { Vaccine } from './vaccine.entity';

@Entity('registration')
export class Registration extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'registration_id' })
  registrationId: number;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'vaccine_id' })
  vaccineId: number;

  @Column({ name: 'medical_center_id' })
  medicalCenterId: number;

  @Column({ name: 'disease_id' })
  diseaseId: number;

  @Column({ name: 'registration_dose' })
  registrationDose: number;

  @Column({
    name: 'registration_time',
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
  registrationTime: string;

  @Column({ name: 'status' })
  status: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.registrations)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Vaccine, (vaccine) => vaccine.registrations)
  @JoinColumn({ name: 'vaccine_id' })
  vaccine: Vaccine;

  @ManyToOne(
    () => MedicalCenter,
    (medicalCenter) => medicalCenter.registrations,
  )
  @JoinColumn({ name: 'medical_center_id' })
  medicalCenter: MedicalCenter;

  @ManyToOne(() => Disease, (disease) => disease.registrations)
  @JoinColumn({ name: 'disease_id' })
  disease: Disease;
}
