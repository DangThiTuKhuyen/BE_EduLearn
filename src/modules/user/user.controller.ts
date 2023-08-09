import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Scope,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  CreateUserInputDto,
  CreateUserOutputDto,
  UpdateUserInputDto,
  UserOutputDto,
} from './dtos';
import { AppLoggerService } from '@shared/logger/logger.service';
import { GuardsException } from '@shared/decorators/guard-exception.decorator';
import { GuardEnum, RoleValue } from '@shared/constants/enum.constant';
import { SesService } from '@shared/common/ses-service';
import { SendGridService } from '@shared/common/sendgrip-service';
import console from 'console';
import { Roles } from '@shared/decorators/role.decorator';

@Controller({
  scope: Scope.REQUEST,
  path: 'users',
})
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly appLogger: AppLoggerService,
    private readonly sesService: SesService,
    private readonly sendGridService: SendGridService,
  ) {
    this.appLogger.setContextName(UserController.name);
  }

  @Post()
  create(
    @Body() createUserInputDto: CreateUserInputDto,
  ): Promise<CreateUserOutputDto> {
    return this.userService.create(createUserInputDto);
  }

  @Get()
  @Roles([RoleValue.User])
  @GuardsException([GuardEnum.UserExistGuard])
  async findAll(): Promise<UserOutputDto[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @Roles([RoleValue.User])
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  @Roles([RoleValue.User])
  update(
    @Param('id') id: string,
    @Body() updateUserInputDto: UpdateUserInputDto,
  ) {
    return this.userService.update(id, updateUserInputDto);
  }

  @Delete(':id')
  @Roles([RoleValue.User])
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Get(':id/uploadImage')
  @Roles([RoleValue.User])
  uploadImage(@Param('id') id: string) {
    return this.userService.uploadImage(id);
  }

  @Get(':id/getImage')
  @Roles([RoleValue.User])
  getImage(@Param('id') id: string) {
    return this.userService.getImage(id);
  }

  @Get(':id/test')
  async test() {
    const a = await this.sendGridService.sendEmail(
      'ptdat.18it5@vku.udn.vn',
      'aaabbb',
      'aaaabbbbb',
    );

    console.log('>>>>>>>>>', a);
    return a;
  }
}
