import { VaccineOutputDto } from '@modules/vaccine/dtos/vaccine-output.dto';
import { Expose, Type } from 'class-transformer';

export class TreatmentOutputDto {
  @Expose()
  diseaseId: number;

  @Expose()
  vaccineId: number;

  @Expose()
  effect: number;

  @Expose()
  amount: number;

  @Expose()
  @Type(() => VaccineOutputDto)
  vaccine: VaccineOutputDto;
}
