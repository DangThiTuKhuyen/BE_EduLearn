import { Expose } from 'class-transformer';

export class VaccineOutputDto {
  @Expose()
  monthProfit: number;

  @Expose()
  vaccineName: string[];
}
