import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { SharedModule } from '@shared/shared.module';
import { AuthRepository } from './auth.repository';
import { AuthConfig } from './configs/cognito.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '@modules/user/user.repository';

@Module({
  imports: [
    SharedModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, AuthConfig],
  exports: [AuthService],
})
export class AuthModule {}
