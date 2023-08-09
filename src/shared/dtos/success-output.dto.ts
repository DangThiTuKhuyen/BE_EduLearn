import { Expose } from 'class-transformer';

export class SuccessOutputDto {
  @Expose()
  message: string;
}
