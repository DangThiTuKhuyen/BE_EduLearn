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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../shared/constants");
const class_transformer_1 = require("class-transformer");
const moment_1 = __importDefault(require("moment"));
const notification_output_dto_1 = require("./dtos/notification-output.dto");
const notification_repository_1 = require("./notification.repository");
let NotificationService = class NotificationService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(param) {
        const notifications = await this.repository.find({
            where: { userId: param.userId },
            order: { createdAt: 'DESC' },
        });
        const response = notifications.map((notification) => {
            return {
                ...notification,
                createdAt: (0, moment_1.default)(notification.createdAt, constants_1.dateFormat.timestampWithTimeZone).format(constants_1.dateFormat.dateTimeFormatVN),
            };
        });
        return (0, class_transformer_1.plainToInstance)(notification_output_dto_1.NotificationOutputDto, response);
    }
    async update(input) {
        await this.repository.updateStatus(input);
        return constants_1.successResponse;
    }
};
NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [notification_repository_1.NotificationRepository])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map