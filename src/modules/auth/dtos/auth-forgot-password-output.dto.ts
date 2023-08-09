import { Expose } from 'class-transformer';

export class ForgotPasswordOutput {
  @Expose()
  forgotPasswordStatus: boolean;

  @Expose()
  forgotPasswordMessage: string;
}
