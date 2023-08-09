import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare class BaseGuard {
    readonly reflector: Reflector;
    constructor(reflector: Reflector);
    guardsExclude(context: ExecutionContext): boolean;
}
//# sourceMappingURL=base.guard.d.ts.map