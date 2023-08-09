import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';

@Injectable()
export class S3Service {
  private bucketName: string;
  private s3: S3;

  constructor(private configService: ConfigService) {
    this.bucketName = process.env.S3_BUCKET;
    this.s3 = new S3();
  }

  async getPutObjectURL(
    filePath: string,
    expireSeconds?: number,
    contentType = 'application/octet-stream',
  ): Promise<string> {
    return this.s3.getSignedUrlPromise('putObject', {
      Bucket: this.bucketName,
      Key: filePath,
      Expires: expireSeconds,
      ContentType: contentType,
    });
  }

  // async getGetObjectURL(
  //   filePath: string,
  //   expireSeconds?: number,
  // ): Promise<string> {
  //   return this.s3.getSignedUrlPromise('getObject', {
  //     Bucket: this.bucketName,
  //     Key: filePath,
  //     Expires: expireSeconds,
  //   });
  // }

  getSignedUrl(
    filePath: string,
    expireSeconds = 24 * 3600, //default: 1 day
  ): string {
    return this.s3.getSignedUrl('getObject', {
      Bucket: this.bucketName,
      Key: filePath,
      Expires: expireSeconds,
    });
  }
}
