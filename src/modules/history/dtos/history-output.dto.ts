import { DiseaseOutputDto } from '@modules/disease/dtos/disease-output.dto';
import { MedicalCenterOutputDto } from '@modules/medical-center/dtos/medical-center-output.dto';
import { UserOutputDto } from '@modules/user/dtos';
import { VaccineOutputDto } from '@modules/vaccine/dtos/vaccine-output.dto';
import { Expose, Type } from 'class-transformer';

export class HistoryOutputDto {
  @Expose()
  historyId: number;

  @Expose()
  userId: string;

  @Expose()
  vaccineId: number;

  @Expose()
  time: string;

  @Expose()
  dose: number;

  @Expose()
  diseaseId: number;

  @Expose()
  medicalCenterId: number;

  @Expose()
  @Type(() => DiseaseOutputDto)
  disease: DiseaseOutputDto;

  @Expose()
  @Type(() => VaccineOutputDto)
  vaccine: VaccineOutputDto;

  @Expose()
  @Type(() => MedicalCenterOutputDto)
  medicalCenter: MedicalCenterOutputDto;

  @Expose()
  @Type(() => UserOutputDto)
  user: UserOutputDto;
}
