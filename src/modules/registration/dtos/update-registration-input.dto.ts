import { dateFormat } from '@shared/constants';
import { IsDateFormatString } from '@shared/validations';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateRegistrationInputDto {
  @IsInt()
  @IsOptional()
  vaccineId: number;

  @IsInt()
  @IsOptional()
  medicalCenterId: number;

  @IsInt()
  @IsOptional()
  diseaseId: number;

  @IsInt()
  @IsOptional()
  registrationDose: number;

  @IsString()
  @IsOptional()
  @IsDateFormatString([dateFormat.dateFormatWithVN])
  registrationTime: string;
}
