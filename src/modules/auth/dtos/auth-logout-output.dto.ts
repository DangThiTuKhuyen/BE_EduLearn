import { Expose } from 'class-transformer';

export class LogoutOutput {
  @Expose()
  logoutStatus: boolean;

  @Expose()
  logoutMessage: string;
}
