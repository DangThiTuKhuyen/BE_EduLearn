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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const enum_constant_1 = require("../../shared/constants/enum.constant");
const req_context_decorator_1 = require("../../shared/request-context/req-context.decorator");
const request_context_1 = require("../../shared/request-context/request-context");
const auth_service_1 = require("./auth.service");
const auth_change_password_input_1 = require("./dtos/auth-change-password-input");
const auth_confirm_register_account_input_dto_1 = require("./dtos/auth-confirm-register-account-input.dto");
const auth_delete_user_input_1 = require("./dtos/auth-delete-user-input");
const auth_forgot_password_input_dto_1 = require("./dtos/auth-forgot-password-input.dto");
const auth_login_input_dto_1 = require("./dtos/auth-login-input.dto");
const auth_logout_input_dto_1 = require("./dtos/auth-logout-input.dto");
const auth_refresh_token_input_dto_1 = require("./dtos/auth-refresh-token-input.dto");
const auth_register_account_input_dto_1 = require("./dtos/auth-register-account-input.dto");
const auth_reset_password_input_dto_1 = require("./dtos/auth-reset-password-input.dto");
const auth_send_confirm_code_input_dto_1 = require("./dtos/auth-send-confirm-code-input.dto");
const guard_exception_decorator_1 = require("../../shared/decorators/guard-exception.decorator");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    registerAccount(ctx, input) {
        return this.authService.registerAccount(ctx, input);
    }
    async confirmRegisterAccount(ctx, input) {
        return await this.authService.confirmRegisterAccount(ctx, input);
    }
    async loginUser(ctx, input) {
        return await this.authService.loginUser(ctx, input);
    }
    async sendConfirmCode(ctx, input) {
        return await this.authService.sendConfirmCode(ctx, input);
    }
    async refreshToken(ctx, input) {
        return await this.authService.refreshToken(ctx, input);
    }
    async logoutUser(ctx, input) {
        return await this.authService.logoutUser(ctx, input);
    }
    async forgotPassword(ctx, input) {
        return await this.authService.forgotPassword(ctx, input);
    }
    async resetPassword(ctx, input) {
        return await this.authService.resetPassword(ctx, input);
    }
    async changePassword(ctx, input) {
        return await this.authService.changePassword(ctx, input);
    }
    async deleteUser(ctx, input) {
        return await this.authService.deleteUser(ctx, input);
    }
};
__decorate([
    (0, common_1.Post)('registerAccount'),
    (0, guard_exception_decorator_1.GuardsException)([enum_constant_1.GuardEnum.UserExistGuard, enum_constant_1.GuardEnum.AuthGuard]),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_1.RequestContext,
        auth_register_account_input_dto_1.RegisterAccountInput]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerAccount", null);
__decorate([
    (0, common_1.Post)('confirmRegisterAccount'),
    (0, guard_exception_decorator_1.GuardsException)([enum_constant_1.GuardEnum.UserExistGuard, enum_constant_1.GuardEnum.AuthGuard]),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_1.RequestContext,
        auth_confirm_register_account_input_dto_1.AuthConfirmRegisterAccountInput]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "confirmRegisterAccount", null);
__decorate([
    (0, common_1.Post)('loginUsers'),
    (0, guard_exception_decorator_1.GuardsException)([enum_constant_1.GuardEnum.UserExistGuard, enum_constant_1.GuardEnum.AuthGuard]),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_1.RequestContext,
        auth_login_input_dto_1.LoginInput]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginUser", null);
__decorate([
    (0, common_1.Get)('sendConfirmCode'),
    (0, guard_exception_decorator_1.GuardsException)([enum_constant_1.GuardEnum.UserExistGuard, enum_constant_1.GuardEnum.AuthGuard]),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_1.RequestContext,
        auth_send_confirm_code_input_dto_1.AuthSendConfirmCodeInput]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendConfirmCode", null);
__decorate([
    (0, common_1.Post)('refreshToken'),
    (0, guard_exception_decorator_1.GuardsException)([enum_constant_1.GuardEnum.UserExistGuard, enum_constant_1.GuardEnum.AuthGuard]),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_1.RequestContext,
        auth_refresh_token_input_dto_1.RefreshTokenInput]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.Post)('logoutUser'),
    (0, guard_exception_decorator_1.GuardsException)([enum_constant_1.GuardEnum.UserExistGuard, enum_constant_1.GuardEnum.AuthGuard]),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_1.RequestContext,
        auth_logout_input_dto_1.LogoutInput]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logoutUser", null);
__decorate([
    (0, common_1.Post)('forgotPassword'),
    (0, guard_exception_decorator_1.GuardsException)([enum_constant_1.GuardEnum.UserExistGuard, enum_constant_1.GuardEnum.AuthGuard]),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_1.RequestContext,
        auth_forgot_password_input_dto_1.ForgotPasswordInput]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('resetPassword'),
    (0, guard_exception_decorator_1.GuardsException)([enum_constant_1.GuardEnum.UserExistGuard, enum_constant_1.GuardEnum.AuthGuard]),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_1.RequestContext,
        auth_reset_password_input_dto_1.ResetPasswordInput]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Put)('changePassword'),
    (0, guard_exception_decorator_1.GuardsException)([enum_constant_1.GuardEnum.UserExistGuard, enum_constant_1.GuardEnum.AuthGuard]),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_1.RequestContext,
        auth_change_password_input_1.ChangePasswordInput]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Delete)('deleteUser'),
    (0, guard_exception_decorator_1.GuardsException)([enum_constant_1.GuardEnum.UserExistGuard, enum_constant_1.GuardEnum.AuthGuard]),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_1.RequestContext,
        auth_delete_user_input_1.DeleteUserInput]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "deleteUser", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map