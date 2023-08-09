import { Expose } from 'class-transformer';

export class DiseaseOutputDto {
  @Expose()
  diseaseName: string;

  @Expose()
  people: number;
}
