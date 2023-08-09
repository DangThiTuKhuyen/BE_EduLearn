import { Expose } from 'class-transformer';

export class UserOutputDto {
  @Expose()
  userId: number;

  @Expose()
  userName: string;

  @Expose()
  email: string;

  @Expose()
  gender: string;

  @Expose()
  phone: number;

  @Expose()
  birthday: string;

  @Expose()
  image: string;

  @Expose()
  identityCard: number;

  @Expose()
  province: string;

  @Expose()
  district: string;
}
