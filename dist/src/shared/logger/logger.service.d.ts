import { RequestContextProvider } from '../request-context/request-context.provider';
import { Logger } from 'winston';
export declare class AppLoggerService {
    private readonly requestContextProvider;
    private contextName?;
    private logger;
    setContextName(contextName: string): void;
    constructor(requestContextProvider: RequestContextProvider);
    error(message: string, meta?: Record<string, any>): Logger;
    warn(message: string, meta?: Record<string, any>): Logger;
    debug(message: string, meta?: Record<string, any>): Logger;
    verbose(message: string, meta?: Record<string, any>): Logger;
    log(message: string, meta?: Record<string, any>): Logger;
}
//# sourceMappingURL=logger.service.d.ts.map