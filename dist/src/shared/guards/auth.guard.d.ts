import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { BaseGuard } from './base.guard';
export declare class AuthGuard extends BaseGuard implements CanActivate {
    private readonly jwtService;
    private readonly configService;
    constructor(reflector: Reflector, jwtService: JwtService, configService: ConfigService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
//# sourceMappingURL=auth.guard.d.ts.map