import { RequestContext } from '@shared/request-context/request-context';
import { AuthService } from './auth.service';
import { ChangePasswordInput } from './dtos/auth-change-password-input';
import { ChangePasswordOutput } from './dtos/auth-change-password-output';
import { AuthConfirmRegisterAccountInput } from './dtos/auth-confirm-register-account-input.dto';
import { AuthConfirmRegisterAccountOutput } from './dtos/auth-confirm-register-account-output.dto';
import { DeleteUserInput } from './dtos/auth-delete-user-input';
import { DeleteUserOutput } from './dtos/auth-delete-user-output';
import { ForgotPasswordInput } from './dtos/auth-forgot-password-input.dto';
import { ForgotPasswordOutput } from './dtos/auth-forgot-password-output.dto';
import { LoginInput } from './dtos/auth-login-input.dto';
import { LoginOutput } from './dtos/auth-login-output.dto';
import { LogoutInput } from './dtos/auth-logout-input.dto';
import { LogoutOutput } from './dtos/auth-logout-output.dto';
import { RefreshTokenInput } from './dtos/auth-refresh-token-input.dto';
import { RefreshTokenOutput } from './dtos/auth-refresh-token-output.dto';
import { RegisterAccountInput } from './dtos/auth-register-account-input.dto';
import { RegisterAccountOutput } from './dtos/auth-register-account-output.dto';
import { ResetPasswordInput } from './dtos/auth-reset-password-input.dto';
import { ResetPasswordOutput } from './dtos/auth-reset-password-output.dto';
import { AuthSendConfirmCodeInput } from './dtos/auth-send-confirm-code-input.dto';
import { AuthSendConfirmCodeOutput } from './dtos/auth-send-confirm-code-output.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerAccount(ctx: RequestContext, input: RegisterAccountInput): Promise<RegisterAccountOutput>;
    confirmRegisterAccount(ctx: RequestContext, input: AuthConfirmRegisterAccountInput): Promise<AuthConfirmRegisterAccountOutput>;
    loginUser(ctx: RequestContext, input: LoginInput): Promise<LoginOutput>;
    sendConfirmCode(ctx: RequestContext, input: AuthSendConfirmCodeInput): Promise<AuthSendConfirmCodeOutput>;
    refreshToken(ctx: RequestContext, input: RefreshTokenInput): Promise<RefreshTokenOutput>;
    logoutUser(ctx: RequestContext, input: LogoutInput): Promise<LogoutOutput>;
    forgotPassword(ctx: RequestContext, input: ForgotPasswordInput): Promise<ForgotPasswordOutput>;
    resetPassword(ctx: RequestContext, input: ResetPasswordInput): Promise<ResetPasswordOutput>;
    changePassword(ctx: RequestContext, input: ChangePasswordInput): Promise<ChangePasswordOutput>;
    deleteUser(ctx: RequestContext, input: DeleteUserInput): Promise<DeleteUserOutput>;
}
//# sourceMappingURL=auth.controller.d.ts.map