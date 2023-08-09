import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class ResetPasswordInput {
  @IsNotEmpty()
  confirmationCode: string;

  @IsNotEmpty()
  @MaxLength(250)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MaxLength(250)
  newPassword: string;
}
