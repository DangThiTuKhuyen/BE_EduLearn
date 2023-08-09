import * as AWS from 'aws-sdk';
import { DeleteAccountResponse } from 'aws-sdk/clients/chime';
import { AdminGetUserResponse, ChangePasswordResponse, ConfirmForgotPasswordResponse, ForgotPasswordResponse } from 'aws-sdk/clients/cognitoidentityserviceprovider';
import { AuthTokenOutput } from './dtos/auth-token-output.dto';
export declare class AuthRepository {
    getUser(email: string): Promise<AdminGetUserResponse>;
    register(email: string): Promise<import("aws-sdk/lib/request").PromiseResult<AWS.CognitoIdentityServiceProvider.AdminCreateUserResponse, AWS.AWSError>>;
    checkLoginConfirm(email: string, password: string): Promise<import("aws-sdk/lib/request").PromiseResult<AWS.CognitoIdentityServiceProvider.AdminInitiateAuthResponse, AWS.AWSError>>;
    loginUser(clientId: string, userPoolId: string, email: string, password: string): Promise<AuthTokenOutput>;
    confirmRegisterAccount(email: string, password: string): Promise<import("aws-sdk/lib/request").PromiseResult<AWS.CognitoIdentityServiceProvider.AdminSetUserPasswordResponse, AWS.AWSError>>;
    sendCodeConfirm(clientId: string, email: string): Promise<import("aws-sdk/lib/request").PromiseResult<AWS.CognitoIdentityServiceProvider.ResendConfirmationCodeResponse, AWS.AWSError>>;
    refreshToken(refreshToken: string, clientId: string, userPoolId: string): Promise<AuthTokenOutput>;
    logoutUser(accessToken: string): Promise<import("aws-sdk/lib/request").PromiseResult<AWS.CognitoIdentityServiceProvider.GlobalSignOutResponse, AWS.AWSError>>;
    forgotPassword(username: string): Promise<ForgotPasswordResponse>;
    resetPassword(username: string, confirmationCode: string, newPassword: string): Promise<ConfirmForgotPasswordResponse>;
    changePassword(accessToken: string, oldPassword: string, newPassword: string): Promise<ChangePasswordResponse>;
    adminDeleteUser(username: string): Promise<DeleteAccountResponse>;
}
//# sourceMappingURL=auth.repository.d.ts.map