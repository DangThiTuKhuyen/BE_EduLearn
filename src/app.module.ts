import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RequestContextProvider } from './shared/request-context/request-context.provider';
import { SharedModule } from './shared/shared.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { RequestContextMiddleware } from './shared/request-context/request-context.middleware';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { GlobalExceptionsFilter } from '@shared/filters/global-exception.filter';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { DiseaseModule } from './modules/disease/disease.module';
import { VaccineModule } from './modules/vaccine/vaccine.module';
import { RegistrationModule } from './modules/registration/registration.module';
import { MedicalCenterModule } from './modules/medical-center/medical-center.module';
import { HistoryModule } from './modules/history/history.module';
import { AuthGuard } from '@shared/guards/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '@modules/user/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserExistGuard } from '@shared/guards/user-exist.guard';
import { AppLoggingInterceptor } from '@shared/interceptors';
import { NotificationModule } from './modules/notification/notification.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from '@shared/common/cron-service';

@Module({
  imports: [
    SharedModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    DiseaseModule,
    VaccineModule,
    RegistrationModule,
    MedicalCenterModule,
    HistoryModule,
    TypeOrmModule.forFeature([UserRepository]),
    NotificationModule,
    ScheduleModule.forRoot(),
    CronService,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    RequestContextProvider,
    JwtService,
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionsFilter,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: UserExistGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: AppLoggingInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestContextMiddleware).forRoutes('*');
  }
}
