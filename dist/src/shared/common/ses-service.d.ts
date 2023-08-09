import { ConfigService } from '@nestjs/config';
import { SES } from 'aws-sdk';
import { SendEmailRequest, SendEmailResponse } from 'aws-sdk/clients/ses';
export declare class SesService {
    private configService;
    private ses;
    constructor(configService: ConfigService);
    sendEmail(params: SendEmailRequest): Promise<SendEmailResponse>;
    verifyEmail(email: string): Promise<import("aws-sdk/lib/request").PromiseResult<SES.VerifyEmailIdentityResponse, import("aws-sdk").AWSError>>;
}
//# sourceMappingURL=ses-service.d.ts.map