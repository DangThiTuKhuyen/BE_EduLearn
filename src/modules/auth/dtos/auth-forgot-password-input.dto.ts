import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class ForgotPasswordInput {
  @IsNotEmpty()
  @MaxLength(250)
  @IsEmail()
  email: string;
}
