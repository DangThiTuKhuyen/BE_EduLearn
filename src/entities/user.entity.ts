import { dateFormat } from '@shared/constants';
import moment from 'moment';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { History } from './history.entity';
import { Registration } from './registration.entity';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryColumn({ name: 'user_id' })
  userId: string;

  @Column({ name: 'user_name' })
  userName: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'role' })
  role: string;

  @Column({
    name: 'birthday',
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
  birthday: string;

  @Column({ name: 'gender' })
  gender: string;

  @Column({ name: 'phone' })
  phone: number;

  @Column({ name: 'image' })
  image: string;

  @Column({ name: 'identity_card' })
  identityCard: number;

  @Column({ name: 'province' })
  province: string;

  @Column({ name: 'district' })
  district: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @OneToMany(() => Registration, (registration) => registration.user)
  registrations: Registration[];

  @OneToMany(() => History, (history) => history.user)
  histories: History[];
}
