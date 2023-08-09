import { dateFormat } from '@shared/constants';
import { IsDateFormatString } from '@shared/validations';
import { IsString } from 'class-validator';

export class HistoryDateParamDto {
  @IsString()
  userId: string;

  @IsString()
  @IsDateFormatString([dateFormat.dateOnlyFormat])
  date: string;
}
