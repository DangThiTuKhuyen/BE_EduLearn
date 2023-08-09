import { UserRepository } from '@modules/user/user.repository';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RequestContext } from '@shared/request-context/request-context';
import moment from 'moment';
import { AuthRepository } from './auth.repository';
import { AuthConfig } from './configs/cognito.config';
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
import { AuthTokenOutput } from './dtos/auth-token-output.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly authConfig: AuthConfig,
    private readonly userRepository: UserRepository,
  ) {}

  async registerAccount(
    ctx: RequestContext,
    input: RegisterAccountInput,
  ): Promise<RegisterAccountOutput> {
    const cognitoUser = await this.authRepository.getUser(input.email);

    if (!cognitoUser) {
      // Create new user
      await this.userRepository.manager.transaction(async () => {
        const user = await this.authRepository.register(input.email);

        await this.userRepository.insert(
          this.userRepository.create({ ...input, userId: user.User?.Username }),
        );
      });
    } else {
      // Resend code
      if (cognitoUser.UserStatus === 'FORCE_CHANGE_PASSWORD') {
        // await this.authRepository.sendCodeConfirm(
        //   this.authConfig.clientId,
        //   input.email,
        // );

        throw new BadRequestException({
          message: 'email is not confirmed',
        });
      } else {
        throw new BadRequestException({
          message: 'Email already exists',
        });
      }
    }

    return {
      message: 'OK',
      registerAccountStatus: true,
    } as RegisterAccountOutput;
  }

  async loginUser(
    ctx: RequestContext,
    input: LoginInput,
  ): Promise<LoginOutput> {
    let result: AuthTokenOutput;
    try {
      result = await this.authRepository.loginUser(
        this.authConfig.clientId,
        this.authConfig.userPoolId,
        input.email,
        input.password,
      );
    } catch (error) {
      const cognitoUser = await this.authRepository.getUser(input.email);
      if (cognitoUser?.UserStatus === 'FORCE_CHANGE_PASSWORD') {
        throw new BadRequestException({
          message: 'email is not confirmed',
        });
      }

      throw new BadRequestException({
        message: 'error password or email',
        // error: error, // if available
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
    } as LoginOutput;
  }

  async confirmRegisterAccount(
    ctx: RequestContext,
    input: AuthConfirmRegisterAccountInput,
  ): Promise<AuthConfirmRegisterAccountOutput> {
    if (input.tempPassword === input.newPassword) {
      throw new BadRequestException(
        'Your new password must be different from your previous password.',
      );
    }

    let result;
    try {
      result = await this.authRepository.checkLoginConfirm(
        input.email,
        input.tempPassword,
      );
    } catch (error) {}

    if (result?.ChallengeName === 'NEW_PASSWORD_REQUIRED') {
      const cognitoUser = await this.authRepository.getUser(input.email);

      if (cognitoUser) {
        await this.userRepository.manager.transaction(async () => {
          await this.authRepository.confirmRegisterAccount(
            input.email,
            input.newPassword,
          );

          result = await this.authRepository.checkLoginConfirm(
            input.email,
            input.newPassword,
          );
        });
      }
    } else {
      throw new BadRequestException(
        'User confirmed or invalid temporary password',
      );
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
    } as AuthConfirmRegisterAccountOutput;
  }

  async sendConfirmCode(
    ctx: RequestContext,
    input: AuthSendConfirmCodeInput,
  ): Promise<AuthSendConfirmCodeOutput> {
    await this.authRepository.sendCodeConfirm(
      this.authConfig.clientId,
      input.email,
    );
    return {
      sendConfirmCodeMessage: 'Success',
      sendConfirmCodeStatus: true,
    } as AuthSendConfirmCodeOutput;
  }

  async refreshToken(
    ctx: RequestContext,
    input: RefreshTokenInput,
  ): Promise<RefreshTokenOutput> {
    const result = await this.authRepository.refreshToken(
      input.refreshToken,
      this.authConfig.clientId,
      this.authConfig.userPoolId,
    );

    return {
      operationMessage: 'success',
      operationStatus: true,
      refreshToken: result.refreshToken,
      idToken: result.idToken,
      accessToken: result.accessToken,
    } as RefreshTokenOutput;
  }

  async logoutUser(
    ctx: RequestContext,
    input: LogoutInput,
  ): Promise<LogoutOutput> {
    try {
      await this.authRepository.logoutUser(input.accessToken);
    } catch (error) {
      if (error['code'] === 'NotAuthorizedException') {
        throw new UnauthorizedException();
      }

      throw error;
    }

    return {
      logoutMessage: 'success',
      logoutStatus: true,
    } as LogoutOutput;
  }

  async forgotPassword(
    ctx: RequestContext,
    input: ForgotPasswordInput,
  ): Promise<ForgotPasswordOutput> {
    await this.authRepository.forgotPassword(input.email);

    return {
      forgotPasswordMessage: 'Success',
      forgotPasswordStatus: true,
    } as ForgotPasswordOutput;
  }

  async resetPassword(
    ctx: RequestContext,
    input: ResetPasswordInput,
  ): Promise<ResetPasswordOutput> {
    await this.authRepository.resetPassword(
      input.email,
      input.confirmationCode,
      input.newPassword,
    );

    return {
      passwordResetStatus: true,
      passwordResetMessage: 'Success',
    } as ResetPasswordOutput;
  }

  async changePassword(
    ctx: RequestContext,
    input: ChangePasswordInput,
  ): Promise<ChangePasswordOutput> {
    const { accessToken, oldPassword, newPassword } = input;
    if (oldPassword === newPassword) {
      throw new BadRequestException(
        'Your new password must be different from your previous password.',
      );
    }

    try {
      await this.authRepository.changePassword(
        accessToken,
        oldPassword,
        newPassword,
      );
    } catch (error) {
      if (error['code'] === 'NotAuthorizedException') {
        throw new BadRequestException('Invalid old password');
      }
      throw error;
    }

    return {
      changePasswordMessage: 'Success',
      changePasswordStatus: true,
    } as ChangePasswordOutput;
  }

  async deleteUser(
    ctx: RequestContext,
    input: DeleteUserInput,
  ): Promise<DeleteUserOutput> {
    const deleteDate = moment().format('YYYY-MM-DD HH:mm:ss');

    await this.userRepository.manager.transaction(async (manager) => {
      await manager.getCustomRepository(UserRepository).update(
        { userId: ctx.userId },
        {
          deletedAt: deleteDate,
          // userStatus: -1,
        },
      );

      await this.authRepository.adminDeleteUser(ctx.userId);
    });

    // if (input.cancellationMessage.trim()) {
    //   const params: SendEmailRequest = {
    //     Source: this.configService.get<string>('email.emailFrom'),
    //     Destination: {
    //       ToAddresses: this.configService
    //         .get<string>('email.managerEmails')
    //         ?.split(','),
    //     },
    //     Message: {
    //       Subject: { Data: userWithdrawalEmail.subject },
    //       Body: {
    //         Html: {
    //           Data: userWithdrawalEmail.context
    //             .replace('{message}', input.cancellationMessage)
    //             .replace('{date}', moment().format('yyyy/MM/DD H:mm')),
    //         },
    //       },
    //     },
    //   };

    //   await this.sesService.sendEmail(params);
    // }

    return {
      deletionStatus: true,
      deletionMessage: 'success',
    } as DeleteUserOutput;
  }
}
