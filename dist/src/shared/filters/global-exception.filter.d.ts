import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { TypeORMError } from 'typeorm';
import { AppLoggerService } from '../logger/logger.service';
import { RequestContextProvider } from '../request-context/request-context.provider';
export declare class GlobalExceptionsFilter implements ExceptionFilter {
    private readonly httpAdapterHost;
    private readonly requestContextProvider;
    private readonly appLogger;
    constructor(httpAdapterHost: HttpAdapterHost, requestContextProvider: RequestContextProvider, appLogger: AppLoggerService);
    catch(exception: any, host: ArgumentsHost): void;
    handleTypeormError(exception: TypeORMError): Error;
}
//# sourceMappingURL=global-exception.filter.d.ts.map