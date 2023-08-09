import { UserInputDto } from '@modules/user/dtos/user-input.dto';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class RegisterAccountInput extends UserInputDto {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(250)
  email: string;
}
