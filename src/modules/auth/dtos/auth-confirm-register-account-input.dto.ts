import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class AuthConfirmRegisterAccountInput {
  @IsNotEmpty()
  @IsString()
  @MaxLength(250)
  newPassword: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(250)
  tempPassword: string;

  @IsNotEmpty()
  @MaxLength(250)
  @IsEmail()
  email: string;
}
