import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import SendGrid, { MailDataRequired } from '@sendgrid/mail';

@Injectable()
export class SendGridService {
  public readonly emailFrom: string;
  private readonly sendGrid = SendGrid;

  constructor(private readonly configService: ConfigService) {
    this.emailFrom = process.env.EMAIL_FROM;
    this.sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendEmail(
    to: string,
    subject: string,
    content: string,
    from = this.emailFrom,
  ) {
    const mail: MailDataRequired = {
      from: from,
      to: to,
      subject: subject,
      html: content,
    };

    return this.sendGrid.send(mail);
  }
}
