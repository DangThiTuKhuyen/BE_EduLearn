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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common");
const enum_constant_1 = require("../../shared/constants/enum.constant");
const role_decorator_1 = require("../../shared/decorators/role.decorator");
const notification_param_dto_1 = require("./dtos/notification-param.dto");
const update_notification_input_dto_1 = require("./dtos/update-notification-input.dto");
const notification_service_1 = require("./notification.service");
let NotificationController = class NotificationController {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    async findByUser(param) {
        return this.notificationService.findAll(param);
    }
    async update(input) {
        return this.notificationService.update(input);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notification_param_dto_1.NotificationParamDto]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Put)(),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_notification_input_dto_1.UpdateNotificationInput]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "update", null);
NotificationController = __decorate([
    (0, common_1.Controller)('users/:userId/notification'),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationController);
exports.NotificationController = NotificationController;
//# sourceMappingURL=notification.controller.js.map