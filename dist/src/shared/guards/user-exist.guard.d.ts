import { UserRepository } from '@modules/user/user.repository';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { BaseGuard } from './base.guard';
export declare class UserExistGuard extends BaseGuard implements CanActivate {
    private userRepository;
    constructor(reflector: Reflector, userRepository: UserRepository);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
//# sourceMappingURL=user-exist.guard.d.ts.map