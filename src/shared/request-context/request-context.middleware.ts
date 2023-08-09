import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import httpContext from 'express-http-context';
import { RequestContextProvider } from './request-context.provider';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  constructor(private requestContextProvider: RequestContextProvider) {}

  use(req: Request, res: Response, next: NextFunction) {
    // First run express-http-context middleware
    httpContext.middleware(req, res, () => {
      // Set context data
      this.requestContextProvider.set({
        requestId: uuidv4(),
        path: req.originalUrl,
        method: req.method,
      });

      return next();
    });
  }
}
