import { IsString } from 'class-validator';

export class RegistrationParamDto {
  @IsString()
  userId: string;
}
