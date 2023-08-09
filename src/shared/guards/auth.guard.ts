import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import console from 'console';
import { BaseGuard } from './base.guard';

@Injectable()
export class AuthGuard extends BaseGuard implements CanActivate {
  constructor(
    reflector: Reflector,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    super(reflector);
  }

  async canActivate(context: ExecutionContext) {
    // Exclusion guard check
    if (super.guardsExclude(context)) return true;

    const req = context.switchToHttp().getRequest();

    const { authorization } = req.headers;

    // Miss token
    if (!authorization) {
      console.log('>>>>>>>');
      throw new UnauthorizedException('missing authentication ');
    }

    // Wrong format
    if (!authorization.startsWith('Bearer ')) {
      throw new UnauthorizedException('invalid token format');
    }

    const token = authorization.replace('Bearer ', '');

    try {
      // Verify token
      req.claim = this.jwtService.verify(token, {
        algorithms: ['RS256'],
        publicKey: process.env.COGNITO_PUBLIC_KEY?.replace(/\\n/g, '\n'),
        ignoreExpiration: false,
      });
    } catch (error) {
      throw new UnauthorizedException(error);
    }

    return true;
  }
}
