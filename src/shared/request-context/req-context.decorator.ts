import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { RequestContext } from './request-context';

export const ReqContext = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): RequestContext => {
    const user = ctx.switchToHttp().getRequest()?.user;

    return user;
  },
);
