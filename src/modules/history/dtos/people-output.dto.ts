import { Expose } from 'class-transformer';

export class PeopleOutputDto {
  @Expose()
  monthProfit: number;

  @Expose()
  people: number;
}
