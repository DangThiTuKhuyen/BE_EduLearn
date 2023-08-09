import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { AppLoggerService } from '@shared/logger/logger.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { v4 as uuidV4 } from 'uuid';
import moment from 'moment';

@Injectable()
export class AppLoggingInterceptor implements NestInterceptor {
  constructor(private readonly appLogger: AppLoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const startDate = moment();
    const { originalUrl, method, body, user } = context
      .switchToHttp()
      .getRequest();

    return next.handle().pipe(
      tap(() => {
        this.appLogger.log(
          `Request completed. Duration (ms): ${moment().diff(startDate, 'ms')}`,
          {
            originalUrl,
            method,
            body,
            userId: user?.userId,
            timestamp: moment().format(),
            requestId: uuidV4(),
          },
        );
      }),
    );
  }
}
