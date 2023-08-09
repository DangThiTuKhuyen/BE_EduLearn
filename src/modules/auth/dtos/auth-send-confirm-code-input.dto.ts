import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class AuthSendConfirmCodeInput {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(250)
  email: string;
}
