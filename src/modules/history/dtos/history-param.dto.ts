import { IsString } from 'class-validator';

export class HistoryParamDto {
  @IsString()
  userId: string;
}
