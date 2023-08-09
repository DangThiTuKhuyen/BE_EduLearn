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
import { Disease } from './disease.entity';
import { History } from './history.entity';
import { Registration } from './registration.entity';
import { Treatment } from './treatment.entity';

@Entity('vaccine')
export class Vaccine extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'vaccine_id' })
  vaccineId: number;

  @Column({ name: 'vaccine_name' })
  vaccineName: string;

  @Column({ name: 'vaccine_price' })
  vaccinePrice: number;

  @Column({ name: 'country' })
  country: number;

  @Column({ name: 'vaccine_firm' })
  vaccineFirm: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToMany(() => Disease, (disease) => disease.vaccines)
  @JoinTable({
    name: 'treatment',
    joinColumn: {
      name: 'vaccine_id',
      referencedColumnName: 'vaccineId',
    },
    inverseJoinColumn: {
      name: 'disease_id',
      referencedColumnName: 'diseaseId',
    },
  })
  diseases: Disease[];

  @OneToMany(() => Registration, (registration) => registration.vaccine)
  registrations: Registration[];

  @OneToMany(() => Treatment, (treatment) => treatment.vaccine)
  treatments: Treatment[];

  @OneToMany(() => History, (history) => history.vaccine)
  histories: History[];
}
