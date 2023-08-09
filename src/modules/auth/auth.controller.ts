import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { GuardEnum } from '@shared/constants/enum.constant';
import { ReqContext } from '@shared/request-context/req-context.decorator';
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
import { GuardsException } from '../../shared/decorators/guard-exception.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registerAccount')
  @GuardsException([GuardEnum.UserExistGuard, GuardEnum.AuthGuard])
  registerAccount(
    @ReqContext() ctx: RequestContext,
    @Body() input: RegisterAccountInput,
  ): Promise<RegisterAccountOutput> {
    return this.authService.registerAccount(ctx, input);
  }

  @Post('confirmRegisterAccount')
  @GuardsException([GuardEnum.UserExistGuard, GuardEnum.AuthGuard])
  async confirmRegisterAccount(
    @ReqContext() ctx: RequestContext,
    @Body() input: AuthConfirmRegisterAccountInput,
  ): Promise<AuthConfirmRegisterAccountOutput> {
    return await this.authService.confirmRegisterAccount(ctx, input);
  }

  @Post('loginUsers')
  @GuardsException([GuardEnum.UserExistGuard, GuardEnum.AuthGuard])
  async loginUser(
    @ReqContext() ctx: RequestContext,
    @Body() input: LoginInput,
  ): Promise<LoginOutput> {
    return await this.authService.loginUser(ctx, input);
  }

  @Get('sendConfirmCode')
  @GuardsException([GuardEnum.UserExistGuard, GuardEnum.AuthGuard])
  async sendConfirmCode(
    @ReqContext() ctx: RequestContext,
    @Body() input: AuthSendConfirmCodeInput,
  ): Promise<AuthSendConfirmCodeOutput> {
    return await this.authService.sendConfirmCode(ctx, input);
  }

  @Post('refreshToken')
  @GuardsException([GuardEnum.UserExistGuard, GuardEnum.AuthGuard])
  async refreshToken(
    @ReqContext() ctx: RequestContext,
    @Body() input: RefreshTokenInput,
  ): Promise<RefreshTokenOutput> {
    return await this.authService.refreshToken(ctx, input);
  }

  @Post('logoutUser')
  @GuardsException([GuardEnum.UserExistGuard, GuardEnum.AuthGuard])
  async logoutUser(
    @ReqContext() ctx: RequestContext,
    @Body() input: LogoutInput,
  ): Promise<LogoutOutput> {
    return await this.authService.logoutUser(ctx, input);
  }

  @Post('forgotPassword')
  @GuardsException([GuardEnum.UserExistGuard, GuardEnum.AuthGuard])
  async forgotPassword(
    @ReqContext() ctx: RequestContext,
    @Body() input: ForgotPasswordInput,
  ): Promise<ForgotPasswordOutput> {
    return await this.authService.forgotPassword(ctx, input);
  }

  @Post('resetPassword')
  @GuardsException([GuardEnum.UserExistGuard, GuardEnum.AuthGuard])
  async resetPassword(
    @ReqContext() ctx: RequestContext,
    @Body() input: ResetPasswordInput,
  ): Promise<ResetPasswordOutput> {
    return await this.authService.resetPassword(ctx, input);
  }

  @Put('changePassword')
  @GuardsException([GuardEnum.UserExistGuard, GuardEnum.AuthGuard])
  async changePassword(
    @ReqContext() ctx: RequestContext,
    @Body() input: ChangePasswordInput,
  ): Promise<ChangePasswordOutput> {
    return await this.authService.changePassword(ctx, input);
  }

  @Delete('deleteUser')
  @GuardsException([GuardEnum.UserExistGuard, GuardEnum.AuthGuard])
  async deleteUser(
    @ReqContext() ctx: RequestContext,
    @Body() input: DeleteUserInput,
  ): Promise<DeleteUserOutput> {
    return await this.authService.deleteUser(ctx, input);
  }
}
