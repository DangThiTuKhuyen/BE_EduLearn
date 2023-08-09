import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GuardEnum } from '@shared/constants/enum.constant';

@Injectable()
export class BaseGuard {
  constructor(public readonly reflector: Reflector) {}

  guardsExclude(context: ExecutionContext): boolean {
    const guardsException =
      this.reflector.get<GuardEnum[]>(
        'GuardsException',
        context.getHandler(),
      ) ?? [];

    return guardsException.includes(this.constructor.name as GuardEnum);
  }
}
