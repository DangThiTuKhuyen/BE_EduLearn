import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { AppLoggerService } from '@shared/logger/logger.service';
import { Observable } from 'rxjs';
export declare class AppLoggingInterceptor implements NestInterceptor {
    private readonly appLogger;
    constructor(appLogger: AppLoggerService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
//# sourceMappingURL=logger.interceptor.d.ts.map