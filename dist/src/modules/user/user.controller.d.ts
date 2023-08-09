import { UserService } from './user.service';
import { CreateUserInputDto, CreateUserOutputDto, UpdateUserInputDto, UserOutputDto } from './dtos';
import { AppLoggerService } from '@shared/logger/logger.service';
import { SesService } from '@shared/common/ses-service';
import { SendGridService } from '@shared/common/sendgrip-service';
export declare class UserController {
    private readonly userService;
    private readonly appLogger;
    private readonly sesService;
    private readonly sendGridService;
    constructor(userService: UserService, appLogger: AppLoggerService, sesService: SesService, sendGridService: SendGridService);
    create(createUserInputDto: CreateUserInputDto): Promise<CreateUserOutputDto>;
    findAll(): Promise<UserOutputDto[]>;
    findOne(id: string): Promise<UserOutputDto>;
    update(id: string, updateUserInputDto: UpdateUserInputDto): Promise<import("./dtos").UpdateUserOutputDto>;
    remove(id: string): Promise<import("./dtos").RemoveUserOutputDto>;
    uploadImage(id: string): Promise<{
        urlUpload: string;
    }>;
    getImage(id: string): Promise<{
        urlDownload: string;
    }>;
    test(): Promise<[import("@sendgrid/mail").ClientResponse, {}]>;
}
//# sourceMappingURL=user.controller.d.ts.map