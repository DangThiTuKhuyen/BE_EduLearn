import { Expose } from 'class-transformer';

export class VaccineOutputDto {
  @Expose()
  vaccineId: number;

  @Expose()
  vaccineName: string;

  @Expose()
  vaccinePrice: number;

  @Expose()
  country: number;

  @Expose()
  vaccineFirm: string;
}
