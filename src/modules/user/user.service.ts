import { Injectable, NotFoundException } from '@nestjs/common';
import { S3Service } from '@shared/common/s3-service';
import { AppLoggerService } from '@shared/logger/logger.service';
import { plainToClass, plainToInstance } from 'class-transformer';
import {
  CreateUserInputDto,
  CreateUserOutputDto,
  RemoveUserOutputDto,
  UpdateUserInputDto,
  UpdateUserOutputDto,
  UserOutputDto,
} from './dtos';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private appLogger: AppLoggerService,
    private repository: UserRepository,
    private readonly s3service: S3Service,
  ) {
    this.appLogger.setContextName(UserService.name);
  }

  async create(createUserInputDto: CreateUserInputDto) {
    const user = this.repository.create(createUserInputDto);

    await this.repository.save(user);

    return plainToClass(CreateUserOutputDto, user, {
      excludeExtraneousValues: true,
    });
  }

  async findAll(): Promise<UserOutputDto[]> {
    const users = await this.repository.find();
    return plainToInstance(UserOutputDto, users);
  }

  async findOne(id: string) {
    const users = await this.repository.findOne(id);

    if (!users) {
      throw new NotFoundException();
    }
    const urlDownload = this.s3service.getSignedUrl(id);

    return plainToInstance(UserOutputDto, { ...users, image: urlDownload });
  }

  async update(id: string, updateUserInputDto: UpdateUserInputDto) {
    await this.repository.findOneOrFail();

    await this.repository.update(id, updateUserInputDto);

    return { message: 'Update Success' } as UpdateUserOutputDto;
  }

  async remove(id: number) {
    await this.repository.delete(id);

    return { message: 'Delete Success' } as RemoveUserOutputDto;
  }

  async uploadImage(id: string) {
    const urlUpload = await this.s3service.getPutObjectURL(`${id}`);

    return {
      urlUpload: urlUpload,
    };
  }

  async getImage(id: string) {
    const urlDownload = this.s3service.getSignedUrl(id);

    return {
      urlDownload: urlDownload,
    };
  }
}
