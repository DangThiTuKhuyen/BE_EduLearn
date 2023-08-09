import { Expose } from 'class-transformer';

export class RefreshTokenOutput {
  @Expose()
  operationStatus: boolean;

  @Expose()
  operationMessage: string;

  @Expose()
  accessToken: string;

  @Expose()
  idToken: string;

  @Expose()
  refreshToken: string;
}
