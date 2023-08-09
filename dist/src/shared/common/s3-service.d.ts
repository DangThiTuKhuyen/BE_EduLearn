import { ConfigService } from '@nestjs/config';
export declare class S3Service {
    private configService;
    private bucketName;
    private s3;
    constructor(configService: ConfigService);
    getPutObjectURL(filePath: string, expireSeconds?: number, contentType?: string): Promise<string>;
    getSignedUrl(filePath: string, expireSeconds?: number): string;
}
//# sourceMappingURL=s3-service.d.ts.map