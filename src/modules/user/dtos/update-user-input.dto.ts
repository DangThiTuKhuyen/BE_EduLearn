import { dateFormat } from '@shared/constants';
import { Gender } from '@shared/constants/enum.constant';
import { IsInEnum, IsDateFormatString } from '@shared/validations';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserInputDto {
  @IsString()
  @IsOptional()
  userName: string;

  @IsInEnum(Gender)
  @IsOptional()
  gender: string;

  @IsNumber()
  @IsOptional()
  phone: number;

  @IsDateFormatString([dateFormat.dateFormatWithVN])
  @IsOptional()
  birthday: string;

  @IsNumber()
  @IsOptional()
  identityCard: number;

  @IsString()
  @IsOptional()
  province: string;

  @IsString()
  @IsOptional()
  district: string;
}
