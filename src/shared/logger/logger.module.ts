import { Module } from '@nestjs/common';
import { RequestContextProvider } from '@shared/request-context/request-context.provider';
import { AppLoggerService } from './logger.service';

@Module({
  imports: [],
  providers: [AppLoggerService, RequestContextProvider],
  exports: [AppLoggerService],
})
export class AppLoggerModule {}
