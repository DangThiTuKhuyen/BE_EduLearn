import { IsNotEmpty, MaxLength } from 'class-validator';

export class ChangePasswordInput {
  @IsNotEmpty()
  accessToken: string;

  @IsNotEmpty()
  @MaxLength(250)
  oldPassword: string;

  @IsNotEmpty()
  @MaxLength(250)
  newPassword: string;
}
