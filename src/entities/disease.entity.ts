import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { History } from './history.entity';
import { Registration } from './registration.entity';
import { Treatment } from './treatment.entity';
import { Vaccine } from './vaccine.entity';

@Entity('disease')
export class Disease extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'disease_id' })
  diseaseId: number;

  @Column({ name: 'disease_name' })
  diseaseName: string;

  @Column({ name: 'disease_describe' })
  diseaseDescribe: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToMany(() => Vaccine, (vaccine) => vaccine.diseases)
  @JoinTable({
    name: 'treatment',
    joinColumn: {
      name: 'disease_id',
      referencedColumnName: 'diseaseId',
    },
    inverseJoinColumn: {
      name: 'vaccine_id',
      referencedColumnName: 'vaccineId',
    },
  })
  vaccines: Vaccine[];

  @OneToMany(() => Registration, (registration) => registration.disease)
  registrations: Registration[];

  @OneToMany(() => Treatment, (treatment) => treatment.disease)
  treatments: Treatment[];

  @OneToMany(() => History, (history) => history.disease)
  histories: History[];
}
