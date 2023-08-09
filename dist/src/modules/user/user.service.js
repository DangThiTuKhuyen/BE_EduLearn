"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const s3_service_1 = require("../../shared/common/s3-service");
const logger_service_1 = require("../../shared/logger/logger.service");
const class_transformer_1 = require("class-transformer");
const dtos_1 = require("./dtos");
const user_repository_1 = require("./user.repository");
let UserService = UserService_1 = class UserService {
    constructor(appLogger, repository, s3service) {
        this.appLogger = appLogger;
        this.repository = repository;
        this.s3service = s3service;
        this.appLogger.setContextName(UserService_1.name);
    }
    async create(createUserInputDto) {
        const user = this.repository.create(createUserInputDto);
        await this.repository.save(user);
        return (0, class_transformer_1.plainToClass)(dtos_1.CreateUserOutputDto, user, {
            excludeExtraneousValues: true,
        });
    }
    async findAll() {
        const users = await this.repository.find();
        return (0, class_transformer_1.plainToInstance)(dtos_1.UserOutputDto, users);
    }
    async findOne(id) {
        const users = await this.repository.findOne(id);
        if (!users) {
            throw new common_1.NotFoundException();
        }
        const urlDownload = this.s3service.getSignedUrl(id);
        return (0, class_transformer_1.plainToInstance)(dtos_1.UserOutputDto, { ...users, image: urlDownload });
    }
    async update(id, updateUserInputDto) {
        await this.repository.findOneOrFail();
        await this.repository.update(id, updateUserInputDto);
        return { message: 'Update Success' };
    }
    async remove(id) {
        await this.repository.delete(id);
        return { message: 'Delete Success' };
    }
    async uploadImage(id) {
        const urlUpload = await this.s3service.getPutObjectURL(`${id}`);
        return {
            urlUpload: urlUpload,
        };
    }
    async getImage(id) {
        const urlDownload = this.s3service.getSignedUrl(id);
        return {
            urlDownload: urlDownload,
        };
    }
};
UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [logger_service_1.AppLoggerService,
        user_repository_1.UserRepository,
        s3_service_1.S3Service])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map