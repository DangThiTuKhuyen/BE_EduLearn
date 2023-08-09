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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var UserController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const dtos_1 = require("./dtos");
const logger_service_1 = require("../../shared/logger/logger.service");
const guard_exception_decorator_1 = require("../../shared/decorators/guard-exception.decorator");
const enum_constant_1 = require("../../shared/constants/enum.constant");
const ses_service_1 = require("../../shared/common/ses-service");
const sendgrip_service_1 = require("../../shared/common/sendgrip-service");
const console_1 = __importDefault(require("console"));
const role_decorator_1 = require("../../shared/decorators/role.decorator");
let UserController = UserController_1 = class UserController {
    constructor(userService, appLogger, sesService, sendGridService) {
        this.userService = userService;
        this.appLogger = appLogger;
        this.sesService = sesService;
        this.sendGridService = sendGridService;
        this.appLogger.setContextName(UserController_1.name);
    }
    create(createUserInputDto) {
        return this.userService.create(createUserInputDto);
    }
    async findAll() {
        return this.userService.findAll();
    }
    async findOne(id) {
        return this.userService.findOne(id);
    }
    update(id, updateUserInputDto) {
        return this.userService.update(id, updateUserInputDto);
    }
    remove(id) {
        return this.userService.remove(+id);
    }
    uploadImage(id) {
        return this.userService.uploadImage(id);
    }
    getImage(id) {
        return this.userService.getImage(id);
    }
    async test() {
        const a = await this.sendGridService.sendEmail('ptdat.18it5@vku.udn.vn', 'aaabbb', 'aaaabbbbb');
        console_1.default.log('>>>>>>>>>', a);
        return a;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateUserInputDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    (0, guard_exception_decorator_1.GuardsException)([enum_constant_1.GuardEnum.UserExistGuard]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.UpdateUserInputDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id/uploadImage'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Get)(':id/getImage'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getImage", null);
__decorate([
    (0, common_1.Get)(':id/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "test", null);
UserController = UserController_1 = __decorate([
    (0, common_1.Controller)({
        scope: common_1.Scope.REQUEST,
        path: 'users',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        logger_service_1.AppLoggerService,
        ses_service_1.SesService,
        sendgrip_service_1.SendGridService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map