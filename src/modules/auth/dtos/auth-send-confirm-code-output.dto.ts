import { Expose } from 'class-transformer';

export class AuthSendConfirmCodeOutput {
  @Expose()
  sendConfirmCodeStatus: boolean;

  @Expose()
  sendConfirmCodeMessage: string;
}
