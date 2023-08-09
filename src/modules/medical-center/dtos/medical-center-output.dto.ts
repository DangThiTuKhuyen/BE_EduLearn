import { Expose } from 'class-transformer';

export class MedicalCenterOutputDto {
  @Expose()
  medicalCenterId: number;

  @Expose()
  name: string;

  @Expose()
  longitude: number;

  @Expose()
  latitude: number;
}
