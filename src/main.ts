import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoggingInterceptor } from '@shared/logger/logger.interceptor';
import { AppLoggerService } from '@shared/logger/logger.service';
import { RequestContextProvider } from '@shared/request-context/request-context.provider';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      whitelist: true,
    }),
  );
  app.enableCors();
  app.useGlobalInterceptors(
    new LoggingInterceptor(new AppLoggerService(new RequestContextProvider())),
    new ClassSerializerInterceptor(app.get(Reflector), {
      ignoreDecorators: true,
      excludeExtraneousValues: true,
    }),
  );

  const configService = app.get(ConfigService);
  const port = configService.get<number>('port');

  await app.listen(port);
}
bootstrap();
