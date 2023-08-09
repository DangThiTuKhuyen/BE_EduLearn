import { Expose } from 'class-transformer';

export class RemoveUserOutputDto {
  @Expose()
  message: string;
}
