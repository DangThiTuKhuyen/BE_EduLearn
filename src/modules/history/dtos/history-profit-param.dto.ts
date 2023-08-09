import { IsNumber } from 'class-validator';
import moment from 'moment';

export class HistoryProfitParamDto {
  @IsNumber()
  year: number = moment().year();
}
