import { IsInt, IsString } from 'class-validator';

export class RegistrationsParamDto {
  @IsString()
  userId: string;

  @IsInt()
  id: number;
}
