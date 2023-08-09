import { IsString } from 'class-validator';

export class CreateUserInputDto {
  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsString()
  email: string;
}
