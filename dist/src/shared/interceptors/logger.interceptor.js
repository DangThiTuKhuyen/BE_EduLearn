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
exports.AppLoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const logger_service_1 = require("../logger/logger.service");
const operators_1 = require("rxjs/operators");
const uuid_1 = require("uuid");
const moment_1 = __importDefault(require("moment"));
let AppLoggingInterceptor = class AppLoggingInterceptor {
    constructor(appLogger) {
        this.appLogger = appLogger;
    }
    intercept(context, next) {
        const startDate = (0, moment_1.default)();
        const { originalUrl, method, body, user } = context
            .switchToHttp()
            .getRequest();
        return next.handle().pipe((0, operators_1.tap)(() => {
            this.appLogger.log(`Request completed. Duration (ms): ${(0, moment_1.default)().diff(startDate, 'ms')}`, {
                originalUrl,
                method,
                body,
                userId: user?.userId,
                timestamp: (0, moment_1.default)().format(),
                requestId: (0, uuid_1.v4)(),
            });
        }));
    }
};
AppLoggingInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [logger_service_1.AppLoggerService])
], AppLoggingInterceptor);
exports.AppLoggingInterceptor = AppLoggingInterceptor;
//# sourceMappingURL=logger.interceptor.js.map