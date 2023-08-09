import { Expose } from 'class-transformer';

export class LoginOutput {
  @Expose()
  loginStatus: boolean;

  @Expose()
  message: string;

  @Expose()
  accessToken: string;

  @Expose()
  idToken: string;

  @Expose()
  refreshToken: string;

  @Expose()
  userId: string;

  @Expose()
  email: string;

  @Expose()
  userName: string;
}
