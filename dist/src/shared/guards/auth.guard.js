"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const console_1 = __importDefault(require("console"));
const base_guard_1 = require("./base.guard");
let AuthGuard = class AuthGuard extends base_guard_1.BaseGuard {
    constructor(reflector, jwtService, configService) {
        super(reflector);
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async canActivate(context) {
        if (super.guardsExclude(context))
            return true;
        const req = context.switchToHttp().getRequest();
        const { authorization } = req.headers;
        if (!authorization) {
            console_1.default.log('>>>>>>>');
            throw new common_1.UnauthorizedException('missing authentication ');
        }
        if (!authorization.startsWith('Bearer ')) {
            throw new common_1.UnauthorizedException('invalid token format');
        }
        const token = authorization.replace('Bearer ', '');
        try {
            req.claim = this.jwtService.verify(token, {
                algorithms: ['RS256'],
                publicKey: process.env.COGNITO_PUBLIC_KEY?.replace(/\\n/g, '\n'),
                ignoreExpiration: false,
            });
        }
        catch (error) {
            throw new common_1.UnauthorizedException(error);
        }
        return true;
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map