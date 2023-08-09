import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppLoggerService } from './logger.service';
export declare class LoggingInterceptor implements NestInterceptor {
    private appLogger;
    constructor(appLogger: AppLoggerService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
//# sourceMappingURL=logger.interceptor.d.ts.map