import { randomPassString } from '@shared/common/function';
import * as AWS from 'aws-sdk';
import { DeleteAccountResponse } from 'aws-sdk/clients/chime';
import {
  AdminDeleteUserRequest,
  AdminGetUserRequest,
  AdminGetUserResponse,
  ChangePasswordResponse,
  ConfirmForgotPasswordResponse,
  ForgotPasswordResponse,
} from 'aws-sdk/clients/cognitoidentityserviceprovider';
import { AuthTokenOutput } from './dtos/auth-token-output.dto';

const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({
  region: process.env.COGNITO_REGION,
});

export class AuthRepository {
  async getUser(email: string): Promise<AdminGetUserResponse> {
    const params: AdminGetUserRequest = {
      UserPoolId: process.env.COGNITO_USER_POOL_ID,
      Username: email,
    };
    try {
      return await cognitoIdentityServiceProvider
        .adminGetUser(params)
        .promise();
    } catch (error: any) {
      if (error?.code === 'UserNotFoundException') {
        return null;
      }
      throw error;
    }
  }

  async register(email: string) {
    const params = {
      UserPoolId: process.env.COGNITO_USER_POOL_ID,
      UserAttributes: [
        {
          Name: 'email',
          Value: email,
        },
        {
          Name: 'email_verified',
          Value: 'true',
        },
      ],
      Username: email,
      ClientMetadata: {
        string: 'number',
      },
      TemporaryPassword: randomPassString(8),
    };

    return cognitoIdentityServiceProvider.adminCreateUser(params).promise();
  }

  async checkLoginConfirm(email: string, password: string) {
    const params = {
      AuthFlow: 'ADMIN_USER_PASSWORD_AUTH',

      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
      ClientId: process.env.COGNITO_CLIENT_ID,
      UserPoolId: process.env.COGNITO_USER_POOL_ID,
    };
    return await cognitoIdentityServiceProvider
      .adminInitiateAuth(params)
      .promise();
  }

  async loginUser(
    clientId: string,
    userPoolId: string,
    email: string,
    password: string,
  ): Promise<AuthTokenOutput> {
    const params = {
      AuthFlow: 'ADMIN_USER_PASSWORD_AUTH',
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
      ClientId: clientId,
      UserPoolId: userPoolId,
    };

    const data = await cognitoIdentityServiceProvider
      .adminInitiateAuth(params)
      .promise();

    return {
      idToken: data.AuthenticationResult.IdToken,
      refreshToken: data.AuthenticationResult.RefreshToken,
      accessToken: data.AuthenticationResult.AccessToken,
    };
  }

  async confirmRegisterAccount(email: string, password: string) {
    const params = {
      Password: password,
      Permanent: true,
      Username: email,
      UserPoolId: process.env.COGNITO_USER_POOL_ID,
    };
    return cognitoIdentityServiceProvider
      .adminSetUserPassword(params)
      .promise();
  }

  // async customAttribute(
  //   id: number,
  //   userStatus: number,
  //   userPoolId: string,
  //   email: string,
  // ) {
  //   const customAttribute = {
  //     UserAttributes: [
  //       {
  //         Name: 'custom:user_id',
  //         Value: `${id}`,
  //       },
  //       {
  //         Name: 'custom:user_status',
  //         Value: `${userStatus}`,
  //       },
  //     ],
  //     UserPoolId: userPoolId,
  //     Username: email,
  //     ClientMetadata: {
  //       string: 'number',
  //     },
  //   };
  //   return cognitoIdentityServiceProvider
  //     .adminUpdateUserAttributes(customAttribute)
  //     .promise();
  // }

  async sendCodeConfirm(clientId: string, email: string) {
    const params = {
      ClientId: clientId,
      Username: email,
    };
    return cognitoIdentityServiceProvider
      .resendConfirmationCode(params)
      .promise();
  }

  async refreshToken(
    refreshToken: string,
    clientId: string,
    userPoolId: string,
  ): Promise<AuthTokenOutput> {
    const params = {
      AuthFlow: 'REFRESH_TOKEN_AUTH',
      AuthParameters: {
        REFRESH_TOKEN: refreshToken,
      },
      ClientId: clientId,
      UserPoolId: userPoolId,
    };
    return new Promise((resolve, reject) =>
      cognitoIdentityServiceProvider.adminInitiateAuth(
        params,
        (err, session) => {
          if (session) {
            const idToken = session.AuthenticationResult.IdToken;
            const accessToken = session.AuthenticationResult.AccessToken;
            resolve({ idToken, accessToken, refreshToken });
          } else {
            reject(err);
          }
        },
      ),
    );
  }

  async logoutUser(accessToken: string) {
    return cognitoIdentityServiceProvider
      .globalSignOut({ AccessToken: accessToken })
      .promise();
  }

  async forgotPassword(username: string): Promise<ForgotPasswordResponse> {
    await cognitoIdentityServiceProvider
      .adminUpdateUserAttributes({
        UserPoolId: process.env.COGNITO_USER_POOL_ID,
        UserAttributes: [
          {
            Name: 'email_verified',
            Value: 'true',
          },
        ],
        Username: username,
      })
      .promise();

    const params = {
      ClientId: process.env.COGNITO_CLIENT_ID,
      Username: username,
    };
    return cognitoIdentityServiceProvider.forgotPassword(params).promise();
  }

  async resetPassword(
    username: string,
    confirmationCode: string,
    newPassword: string,
  ): Promise<ConfirmForgotPasswordResponse> {
    const params = {
      ClientId: process.env.COGNITO_CLIENT_ID,
      ConfirmationCode: confirmationCode,
      Password: newPassword,
      Username: username,
    };
    return cognitoIdentityServiceProvider
      .confirmForgotPassword(params)
      .promise();
  }

  async changePassword(
    accessToken: string,
    oldPassword: string,
    newPassword: string,
  ): Promise<ChangePasswordResponse> {
    const params = {
      AccessToken: accessToken,
      PreviousPassword: oldPassword,
      ProposedPassword: newPassword,
    };
    return cognitoIdentityServiceProvider.changePassword(params).promise();
  }

  async adminDeleteUser(username: string): Promise<DeleteAccountResponse> {
    const params: AdminDeleteUserRequest = {
      UserPoolId: process.env.COGNITO_USER_POOL_ID,
      Username: username,
    };
    return cognitoIdentityServiceProvider.adminDeleteUser(params).promise();
  }
}
