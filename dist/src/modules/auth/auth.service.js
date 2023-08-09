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
exports.AuthService = void 0;
const user_repository_1 = require("../user/user.repository");
const common_1 = require("@nestjs/common");
const moment_1 = __importDefault(require("moment"));
const auth_repository_1 = require("./auth.repository");
const cognito_config_1 = require("./configs/cognito.config");
let AuthService = class AuthService {
    constructor(authRepository, authConfig, userRepository) {
        this.authRepository = authRepository;
        this.authConfig = authConfig;
        this.userRepository = userRepository;
    }
    async registerAccount(ctx, input) {
        const cognitoUser = await this.authRepository.getUser(input.email);
        if (!cognitoUser) {
            await this.userRepository.manager.transaction(async () => {
                const user = await this.authRepository.register(input.email);
                await this.userRepository.insert(this.userRepository.create({ ...input, userId: user.User?.Username }));
            });
        }
        else {
            if (cognitoUser.UserStatus === 'FORCE_CHANGE_PASSWORD') {
                throw new common_1.BadRequestException({
                    message: 'email is not confirmed',
                });
            }
            else {
                throw new common_1.BadRequestException({
                    message: 'Email already exists',
                });
            }
        }
        return {
            message: 'OK',
            registerAccountStatus: true,
        };
    }
    async loginUser(ctx, input) {
        let result;
        try {
            result = await this.authRepository.loginUser(this.authConfig.clientId, this.authConfig.userPoolId, input.email, input.password);
        }
        catch (error) {
            const cognitoUser = await this.authRepository.getUser(input.email);
            if (cognitoUser?.UserStatus === 'FORCE_CHANGE_PASSWORD') {
                throw new common_1.BadRequestException({
                    message: 'email is not confirmed',
                });
            }
            throw new common_1.BadRequestException({
                message: 'error password or email',
            });
        }
        const user = await this.userRepository.findOneOrFail({
            email: input.email,
        });
        return {
            message: 'success',
            loginStatus: true,
            refreshToken: result.refreshToken,
            idToken: result.idToken,
            accessToken: result.accessToken,
            userId: user.userId,
            userName: user.userName,
            email: user.email,
        };
    }
    async confirmRegisterAccount(ctx, input) {
        if (input.tempPassword === input.newPassword) {
            throw new common_1.BadRequestException('Your new password must be different from your previous password.');
        }
        let result;
        try {
            result = await this.authRepository.checkLoginConfirm(input.email, input.tempPassword);
        }
        catch (error) { }
        if (result?.ChallengeName === 'NEW_PASSWORD_REQUIRED') {
            const cognitoUser = await this.authRepository.getUser(input.email);
            if (cognitoUser) {
                await this.userRepository.manager.transaction(async () => {
                    await this.authRepository.confirmRegisterAccount(input.email, input.newPassword);
                    result = await this.authRepository.checkLoginConfirm(input.email, input.newPassword);
                });
            }
        }
        else {
            throw new common_1.BadRequestException('User confirmed or invalid temporary password');
        }
        const user = await this.userRepository.findOneOrFail({
            email: input.email,
        });
        return {
            message: 'success',
            confirmRegistrationStatus: true,
            refreshToken: result.AuthenticationResult.RefreshToken,
            idToken: result.AuthenticationResult.IdToken,
            accessToken: result.AuthenticationResult.AccessToken,
            userId: user.userId,
            userName: user.userName,
            email: user.email,
        };
    }
    async sendConfirmCode(ctx, input) {
        await this.authRepository.sendCodeConfirm(this.authConfig.clientId, input.email);
        return {
            sendConfirmCodeMessage: 'Success',
            sendConfirmCodeStatus: true,
        };
    }
    async refreshToken(ctx, input) {
        const result = await this.authRepository.refreshToken(input.refreshToken, this.authConfig.clientId, this.authConfig.userPoolId);
        return {
            operationMessage: 'success',
            operationStatus: true,
            refreshToken: result.refreshToken,
            idToken: result.idToken,
            accessToken: result.accessToken,
        };
    }
    async logoutUser(ctx, input) {
        try {
            await this.authRepository.logoutUser(input.accessToken);
        }
        catch (error) {
            if (error['code'] === 'NotAuthorizedException') {
                throw new common_1.UnauthorizedException();
            }
            throw error;
        }
        return {
            logoutMessage: 'success',
            logoutStatus: true,
        };
    }
    async forgotPassword(ctx, input) {
        await this.authRepository.forgotPassword(input.email);
        return {
            forgotPasswordMessage: 'Success',
            forgotPasswordStatus: true,
        };
    }
    async resetPassword(ctx, input) {
        await this.authRepository.resetPassword(input.email, input.confirmationCode, input.newPassword);
        return {
            passwordResetStatus: true,
            passwordResetMessage: 'Success',
        };
    }
    async changePassword(ctx, input) {
        const { accessToken, oldPassword, newPassword } = input;
        if (oldPassword === newPassword) {
            throw new common_1.BadRequestException('Your new password must be different from your previous password.');
        }
        try {
            await this.authRepository.changePassword(accessToken, oldPassword, newPassword);
        }
        catch (error) {
            if (error['code'] === 'NotAuthorizedException') {
                throw new common_1.BadRequestException('Invalid old password');
            }
            throw error;
        }
        return {
            changePasswordMessage: 'Success',
            changePasswordStatus: true,
        };
    }
    async deleteUser(ctx, input) {
        const deleteDate = (0, moment_1.default)().format('YYYY-MM-DD HH:mm:ss');
        await this.userRepository.manager.transaction(async (manager) => {
            await manager.getCustomRepository(user_repository_1.UserRepository).update({ userId: ctx.userId }, {
                deletedAt: deleteDate,
            });
            await this.authRepository.adminDeleteUser(ctx.userId);
        });
        return {
            deletionStatus: true,
            deletionMessage: 'success',
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_repository_1.AuthRepository,
        cognito_config_1.AuthConfig,
        user_repository_1.UserRepository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map