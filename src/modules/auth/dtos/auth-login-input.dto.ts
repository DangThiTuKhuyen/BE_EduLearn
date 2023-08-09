import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class LoginInput {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(250)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(250)
  password: string;
}
