import { Expose } from 'class-transformer';

export class AuthTokenOutput {
  @Expose()
  idToken: string;

  @Expose()
  accessToken: string;

  @Expose()
  refreshToken: string;
}

export class UserRefreshTokenClaims {
  id: number;
}
