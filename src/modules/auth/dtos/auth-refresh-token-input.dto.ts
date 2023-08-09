import { IsOptional, IsString } from 'class-validator';

export class RefreshTokenInput {
  @IsOptional()
  @IsString()
  refreshToken: string;
}
