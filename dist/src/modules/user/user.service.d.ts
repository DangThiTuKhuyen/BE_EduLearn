import { S3Service } from '@shared/common/s3-service';
import { AppLoggerService } from '@shared/logger/logger.service';
import { CreateUserInputDto, CreateUserOutputDto, RemoveUserOutputDto, UpdateUserInputDto, UpdateUserOutputDto, UserOutputDto } from './dtos';
import { UserRepository } from './user.repository';
export declare class UserService {
    private appLogger;
    private repository;
    private readonly s3service;
    constructor(appLogger: AppLoggerService, repository: UserRepository, s3service: S3Service);
    create(createUserInputDto: CreateUserInputDto): Promise<CreateUserOutputDto>;
    findAll(): Promise<UserOutputDto[]>;
    findOne(id: string): Promise<UserOutputDto>;
    update(id: string, updateUserInputDto: UpdateUserInputDto): Promise<UpdateUserOutputDto>;
    remove(id: number): Promise<RemoveUserOutputDto>;
    uploadImage(id: string): Promise<{
        urlUpload: string;
    }>;
    getImage(id: string): Promise<{
        urlDownload: string;
    }>;
}
//# sourceMappingURL=user.service.d.ts.map