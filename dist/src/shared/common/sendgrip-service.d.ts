import { ConfigService } from '@nestjs/config';
import SendGrid from '@sendgrid/mail';
export declare class SendGridService {
    private readonly configService;
    readonly emailFrom: string;
    private readonly sendGrid;
    constructor(configService: ConfigService);
    sendEmail(to: string, subject: string, content: string, from?: string): Promise<[SendGrid.ClientResponse, {}]>;
}
//# sourceMappingURL=sendgrip-service.d.ts.map