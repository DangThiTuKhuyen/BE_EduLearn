import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SharedModule } from '@shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { S3Service } from '@shared/common/s3-service';
import { SesService } from '@shared/common/ses-service';
import { SendGridService } from '@shared/common/sendgrip-service';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserController],
  providers: [UserService, S3Service, SesService, SendGridService],
  exports: [UserService],
})
export class UserModule {}
