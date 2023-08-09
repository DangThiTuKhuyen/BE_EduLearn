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
import { Vaccine } from './vaccine.entity';

@Entity('treatment')
export class Treatment extends BaseEntity {
  @PrimaryColumn({ name: 'disease_id' })
  diseaseId: number;

  @PrimaryColumn({ name: 'vaccine_id' })
  vaccineId: number;

  @Column({ name: 'effect' })
  effect: number;

  @Column({ name: 'amount' })
  amount: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Disease, (disease) => disease.treatments)
  @JoinColumn({ name: 'disease_id' })
  disease: Disease;

  @ManyToOne(() => Vaccine, (vaccine) => vaccine.treatments)
  @JoinColumn({ name: 'vaccine_id' })
  vaccine: Vaccine;
}
