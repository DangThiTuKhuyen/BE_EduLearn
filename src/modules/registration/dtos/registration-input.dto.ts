import { dateFormat } from '@shared/constants';
import { IsDateFormatString } from '@shared/validations';
import { IsInt, IsString } from 'class-validator';

export class RegistrationInputDto {
  @IsInt()
  vaccineId: number;

  @IsInt()
  medicalCenterId: number;

  @IsInt()
  diseaseId: number;

  @IsInt()
  registrationDose: number;

  @IsString()
  @IsDateFormatString([dateFormat.dateFormatWithVN])
  registrationTime: string;
}
