import { dateFormat } from '@shared/constants';
import { Gender } from '@shared/constants/enum.constant';
import { IsDateFormatString, IsInEnum } from '@shared/validations';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class UserInputDto {
  @IsString()
  userName: string;

  @IsEmail()
  email: string;

  @IsInEnum(Gender)
  gender: string;

  @IsNumber()
  phone: number;

  @IsDateFormatString([dateFormat.dateFormatWithVN])
  birthday: string;

  @IsNumber()
  identityCard: number;

  @IsString()
  province: string;

  @IsString()
  district: string;
}
