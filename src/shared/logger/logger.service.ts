import { Injectable, Scope } from '@nestjs/common';
import { RequestContextProvider } from '../request-context/request-context.provider';
import { createLogger, Logger, transports } from 'winston';

@Injectable({ scope: Scope.TRANSIENT })
export class AppLoggerService {
  private contextName?: string;
  private logger: Logger;

  public setContextName(contextName: string) {
    this.contextName = contextName;
  }

  constructor(private readonly requestContextProvider: RequestContextProvider) {
    this.logger = createLogger({
      transports: [new transports.Console()],
    });
  }

  error(message: string, meta?: Record<string, any>): Logger {
    const timestamp = new Date().toISOString();
    const context = this.requestContextProvider.currentContext();

    return this.logger.error({
      context,
      message,
      contextName: this.contextName,
      timestamp,
      meta,
    });
  }

  warn(message: string, meta?: Record<string, any>): Logger {
    const timestamp = new Date().toISOString();
    const context = this.requestContextProvider.currentContext();

    return this.logger.warn({
      context,
      message,
      contextName: this.contextName,
      timestamp,
      meta,
    });
  }

  debug(message: string, meta?: Record<string, any>): Logger {
    const timestamp = new Date().toISOString();
    const context = this.requestContextProvider.currentContext();

    return this.logger.debug({
      context,
      message,
      contextName: this.contextName,
      timestamp,
      meta,
    });
  }

  verbose(message: string, meta?: Record<string, any>): Logger {
    const timestamp = new Date().toISOString();
    const context = this.requestContextProvider.currentContext();

    return this.logger.verbose({
      context,
      message,
      contextName: this.contextName,
      timestamp,
      meta,
    });
  }

  log(message: string, meta?: Record<string, any>): Logger {
    const timestamp = new Date().toISOString();
    const context = this.requestContextProvider.currentContext();

    return this.logger.info({
      context,
      message,
      contextName: this.contextName,
      timestamp,
      meta,
    });
  }
}
