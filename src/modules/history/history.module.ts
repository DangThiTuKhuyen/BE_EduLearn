import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { SharedModule } from '@shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryRepository } from './history.repository';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([HistoryRepository])],
  controllers: [HistoryController],
  providers: [HistoryService],
  exports: [HistoryService],
})
export class HistoryModule {}
