import { Expose } from 'class-transformer';

export class ChangePasswordOutput {
  @Expose()
  changePasswordStatus: boolean;

  @Expose()
  changePasswordMessage: string;
}
