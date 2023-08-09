import { Expose } from 'class-transformer';

export class DeleteUserOutput {
  @Expose()
  deletionStatus: boolean;

  @Expose()
  deletionMessage: string;
}
