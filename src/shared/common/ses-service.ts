import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SES } from 'aws-sdk';
import { SendEmailRequest, SendEmailResponse } from 'aws-sdk/clients/ses';

@Injectable()
export class SesService {
  private ses: SES;

  constructor(private configService: ConfigService) {
    this.ses = new SES({
      region: process.env.COGNITO_REGION,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    });
  }

  async sendEmail(params: SendEmailRequest): Promise<SendEmailResponse> {
    return this.ses.sendEmail(params).promise();
  }

  async verifyEmail(email: string) {
    return this.ses.verifyEmailIdentity({ EmailAddress: email }).promise();
  }
}
