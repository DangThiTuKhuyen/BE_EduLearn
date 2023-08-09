import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RequestContextProvider } from './request-context.provider';
export declare class RequestContextMiddleware implements NestMiddleware {
    private requestContextProvider;
    constructor(requestContextProvider: RequestContextProvider);
    use(req: Request, res: Response, next: NextFunction): void;
}
//# sourceMappingURL=request-context.middleware.d.ts.map