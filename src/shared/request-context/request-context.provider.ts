import { Injectable } from '@nestjs/common';
import httpContext from 'express-http-context';
import { RequestContext } from './request-context';
import { plainToClass } from 'class-transformer';

@Injectable()
export class RequestContextProvider {
  currentContext(): RequestContext {
    return plainToClass(RequestContext, httpContext?.ns?.active, {
      excludeExtraneousValues: true,
    });
  }

  get(key: string) {
    return httpContext.get(key);
  }

  set(context: { [key: string]: any }) {
    for (const key in context) {
      httpContext.set(key, context[key]);
    }
  }
}
