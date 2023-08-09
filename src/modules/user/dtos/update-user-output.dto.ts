import { Expose } from 'class-transformer';

export class UpdateUserOutputDto {
  @Expose()
  message: string;
}
