import { Expose } from 'class-transformer';

export class ResetPasswordOutput {
  @Expose()
  passwordResetStatus: boolean;

  @Expose()
  passwordResetMessage: string;
}
