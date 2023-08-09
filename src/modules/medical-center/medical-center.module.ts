import { Module } from '@nestjs/common';
import { MedicalCenterService } from './medical-center.service';
import { MedicalCenterController } from './medical-center.controller';
import { SharedModule } from '@shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalCenterRepository } from './medical-center.repository';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([MedicalCenterRepository])],
  controllers: [MedicalCenterController],
  providers: [MedicalCenterService],
  exports: [MedicalCenterService],
})
export class MedicalCenterModule {}
