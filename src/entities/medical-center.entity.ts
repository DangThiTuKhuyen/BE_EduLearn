import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { History } from './history.entity';
import { Registration } from './registration.entity';

@Entity('medical_center')
export class MedicalCenter extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'medical_center_id' })
  medicalCenterId: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'longitude' })
  longitude: number;

  @Column({ name: 'latitude' })
  latitude: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Registration, (registration) => registration.medicalCenter)
  registrations: Registration[];

  @OneToMany(() => History, (history) => history.medicalCenter)
  histories: History[];
}
