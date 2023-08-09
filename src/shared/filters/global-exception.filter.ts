import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { EntityNotFoundError, QueryFailedError, TypeORMError } from 'typeorm';
import { AppLoggerService } from '../logger/logger.service';
import { v4 as uuidV4 } from 'uuid';
import { RequestContextProvider } from '../request-context/request-context.provider';

@Catch()
export class GlobalExceptionsFilter implements ExceptionFilter {
  constructor(
    private readonly httpAdapterHost: HttpAdapterHost,
    private readonly requestContextProvider: RequestContextProvider,
    private readonly appLogger: AppLoggerService,
  ) {
    this.appLogger.setContextName(GlobalExceptionsFilter.name);
  }

  catch(exception: any, host: ArgumentsHost): void {
    console.error(exception);

    const { httpAdapter } = this.httpAdapterHost;
    const context = this.requestContextProvider.currentContext();

    // Handle typeorm exceptions
    exception = this.handleTypeormError(exception);

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      httpStatus === HttpStatus.BAD_REQUEST
        ? exception?.response.message ?? [exception.message]
        : exception.message;

    const responseBody = {
      statusCode: httpStatus,
      message: message,
      timestamp: new Date().toISOString(),
      requestId: uuidV4(),
      debugOnly: exception,
    };

    this.appLogger.error(exception?.message, exception);

    httpAdapter.reply(
      host.switchToHttp().getResponse(),
      responseBody,
      httpStatus,
    );
  }

  handleTypeormError(exception: TypeORMError): Error {
    // Violates foreign key constraint
    if (exception instanceof QueryFailedError) {
      if (exception?.driverError?.detail?.includes('is not present in table')) {
        return new NotFoundException(exception.driverError.detail);
      }
      if (
        exception?.message?.includes('invalid input syntax for') ||
        exception?.message?.includes('is out of range for type')
      ) {
        return new NotFoundException(exception.message);
      }
    }

    // Entity not found error
    if (exception instanceof EntityNotFoundError) {
      return new NotFoundException(exception.message?.split(':')?.[0]);
    }

    return exception;
  }
}
