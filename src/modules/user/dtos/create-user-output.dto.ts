import { Expose } from 'class-transformer';

export class CreateUserOutputDto {
  @Expose()
  id: number;
}
