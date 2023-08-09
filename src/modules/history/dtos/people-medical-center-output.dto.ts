import { Expose } from 'class-transformer';

export class PeopleMedicalCenterOutput {
  @Expose()
  medicalCenter: string;

  @Expose()
  people: number;
}
