"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const function_1 = require("../../shared/common/function");
const AWS = __importStar(require("aws-sdk"));
const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({
    region: process.env.COGNITO_REGION,
});
class AuthRepository {
    async getUser(email) {
        const params = {
            UserPoolId: process.env.COGNITO_USER_POOL_ID,
            Username: email,
        };
        try {
            return await cognitoIdentityServiceProvider
                .adminGetUser(params)
                .promise();
        }
        catch (error) {
            if (error?.code === 'UserNotFoundException') {
                return null;
            }
            throw error;
        }
    }
    async register(email) {
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
            TemporaryPassword: (0, function_1.randomPassString)(8),
        };
        return cognitoIdentityServiceProvider.adminCreateUser(params).promise();
    }
    async checkLoginConfirm(email, password) {
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
    async loginUser(clientId, userPoolId, email, password) {
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
    async confirmRegisterAccount(email, password) {
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
    async sendCodeConfirm(clientId, email) {
        const params = {
            ClientId: clientId,
            Username: email,
        };
        return cognitoIdentityServiceProvider
            .resendConfirmationCode(params)
            .promise();
    }
    async refreshToken(refreshToken, clientId, userPoolId) {
        const params = {
            AuthFlow: 'REFRESH_TOKEN_AUTH',
            AuthParameters: {
                REFRESH_TOKEN: refreshToken,
            },
            ClientId: clientId,
            UserPoolId: userPoolId,
        };
        return new Promise((resolve, reject) => cognitoIdentityServiceProvider.adminInitiateAuth(params, (err, session) => {
            if (session) {
                const idToken = session.AuthenticationResult.IdToken;
                const accessToken = session.AuthenticationResult.AccessToken;
                resolve({ idToken, accessToken, refreshToken });
            }
            else {
                reject(err);
            }
        }));
    }
    async logoutUser(accessToken) {
        return cognitoIdentityServiceProvider
            .globalSignOut({ AccessToken: accessToken })
            .promise();
    }
    async forgotPassword(username) {
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
    async resetPassword(username, confirmationCode, newPassword) {
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
    async changePassword(accessToken, oldPassword, newPassword) {
        const params = {
            AccessToken: accessToken,
            PreviousPassword: oldPassword,
            ProposedPassword: newPassword,
        };
        return cognitoIdentityServiceProvider.changePassword(params).promise();
    }
    async adminDeleteUser(username) {
        const params = {
            UserPoolId: process.env.COGNITO_USER_POOL_ID,
            Username: username,
        };
        return cognitoIdentityServiceProvider.adminDeleteUser(params).promise();
    }
}
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=auth.repository.js.map