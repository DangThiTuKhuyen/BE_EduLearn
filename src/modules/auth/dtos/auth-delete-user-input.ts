import { IsString, MaxLength } from 'class-validator';

export class DeleteUserInput {
  @IsString()
  accessToken: string;

  @MaxLength(500)
  cancellationMessage: string;
}
