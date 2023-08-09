import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationController } from './registration.controller';
import { RegistrationRepository } from './registration.repository';
import { SharedModule } from '@shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '@modules/user/user.repository';
import { DiseaseRepository } from '@modules/disease/disease.repository';
import { MedicalCenterRepository } from '@modules/medical-center/medical-center.repository';
import { HistoryRepository } from '@modules/history/history.repository';
import { TreatmentRepository } from '@modules/treament/treament.repository';
import { NotificationRepository } from '@modules/notification/notification.repository';
import { VaccineRepository } from '@modules/vaccine/vaccine.repository';
import { SesService } from '@shared/common/ses-service';
import { SendGridService } from '@shared/common/sendgrip-service';

@Module({
  imports: [
    SharedModule,
    TypeOrmModule.forFeature([
      RegistrationRepository,
      UserRepository,
      DiseaseRepository,
      MedicalCenterRepository,
      HistoryRepository,
      TreatmentRepository,
      NotificationRepository,
      VaccineRepository,
    ]),
  ],
  controllers: [RegistrationController],
  providers: [RegistrationService, SesService, SendGridService],
  exports: [RegistrationService],
})
export class RegistrationModule {}
