import { Expose } from 'class-transformer';

export class RegisterAccountOutput {
  @Expose()
  registerAccountStatus: boolean;

  @Expose()
  message: string;
}
