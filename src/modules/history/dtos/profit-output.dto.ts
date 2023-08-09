import { Expose } from 'class-transformer';

export class ProfitOutputDto {
  @Expose()
  monthProfit: number;

  @Expose()
  profit: number;
}
