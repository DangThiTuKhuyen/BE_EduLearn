import { UserRepository } from '@modules/user/user.repository';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { BaseGuard } from './base.guard';

@Injectable()
export class UserExistGuard extends BaseGuard implements CanActivate {
  constructor(reflector: Reflector, private userRepository: UserRepository) {
    super(reflector);
  }

  async canActivate(context: ExecutionContext) {
    // Exclusion guard check
    if (super.guardsExclude(context)) return true;

    const req = context.switchToHttp().getRequest();
    const { claim } = req;

    const user = await this.userRepository.findOne({ userId: claim.sub });

    if (!user) {
      throw new UnauthorizedException({
        forceLogout: true,
        debugMessage: 'user does not exits',
      });
    }

    if (user.role === undefined || typeof user.role !== 'string') {
      return false;
    }

    const roles = this.reflector.get<string[]>('Roles', context.getHandler());

    const isPermission = roles.filter((role) => user.role.includes(role));

    if (!isPermission.length) return false;

    req.user = user;

    return true;
  }
}
