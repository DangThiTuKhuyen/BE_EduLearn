import { DiseaseOutputDto } from '@modules/disease/dtos/disease-output.dto';
import { MedicalCenterOutputDto } from '@modules/medical-center/dtos/medical-center-output.dto';
import { UserOutputDto } from '@modules/user/dtos';
import { VaccineOutputDto } from '@modules/vaccine/dtos/vaccine-output.dto';
import { Expose, Type } from 'class-transformer';

export class RegistrationOutputDto {
  @Expose()
  registrationId: number;

  @Expose()
  userId: string;

  @Expose()
  vaccineId: number;

  @Expose()
  medicalCenterId: number;

  @Expose()
  diseaseId: number;

  @Expose()
  registrationDose: number;

  @Expose()
  registrationTime: string;

  @Expose()
  status: boolean;

  @Expose()
  @Type(() => UserOutputDto)
  user: UserOutputDto;

  @Expose()
  @Type(() => MedicalCenterOutputDto)
  medicalCenter: MedicalCenterOutputDto;

  @Expose()
  @Type(() => VaccineOutputDto)
  vaccine: VaccineOutputDto;

  @Expose()
  @Type(() => DiseaseOutputDto)
  disease: DiseaseOutputDto;
}
