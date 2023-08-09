import { TreatmentOutputDto } from '@modules/treament/dtos/treament-output.dto';
import { VaccineOutputDto } from '@modules/vaccine/dtos/vaccine-output.dto';
import { Expose, Type } from 'class-transformer';

export class DiseaseOutputDto {
  @Expose()
  diseaseId: number;

  @Expose()
  diseaseName: string;

  @Expose()
  @Type(() => VaccineOutputDto)
  vaccines: VaccineOutputDto[];

  @Expose()
  @Type(() => TreatmentOutputDto)
  treatments: TreatmentOutputDto[];

  @Expose()
  diseaseDescribe: string;
}
