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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserExistGuard = void 0;
const user_repository_1 = require("../../modules/user/user.repository");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const base_guard_1 = require("./base.guard");
let UserExistGuard = class UserExistGuard extends base_guard_1.BaseGuard {
    constructor(reflector, userRepository) {
        super(reflector);
        this.userRepository = userRepository;
    }
    async canActivate(context) {
        if (super.guardsExclude(context))
            return true;
        const req = context.switchToHttp().getRequest();
        const { claim } = req;
        const user = await this.userRepository.findOne({ userId: claim.sub });
        if (!user) {
            throw new common_1.UnauthorizedException({
                forceLogout: true,
                debugMessage: 'user does not exits',
            });
        }
        if (user.role === undefined || typeof user.role !== 'string') {
            return false;
        }
        const roles = this.reflector.get('Roles', context.getHandler());
        const isPermission = roles.filter((role) => user.role.includes(role));
        if (!isPermission.length)
            return false;
        req.user = user;
        return true;
    }
};
UserExistGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector, user_repository_1.UserRepository])
], UserExistGuard);
exports.UserExistGuard = UserExistGuard;
//# sourceMappingURL=user-exist.guard.js.map