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
var GlobalExceptionsFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("typeorm");
const logger_service_1 = require("../logger/logger.service");
const uuid_1 = require("uuid");
const request_context_provider_1 = require("../request-context/request-context.provider");
let GlobalExceptionsFilter = GlobalExceptionsFilter_1 = class GlobalExceptionsFilter {
    constructor(httpAdapterHost, requestContextProvider, appLogger) {
        this.httpAdapterHost = httpAdapterHost;
        this.requestContextProvider = requestContextProvider;
        this.appLogger = appLogger;
        this.appLogger.setContextName(GlobalExceptionsFilter_1.name);
    }
    catch(exception, host) {
        console.error(exception);
        const { httpAdapter } = this.httpAdapterHost;
        const context = this.requestContextProvider.currentContext();
        exception = this.handleTypeormError(exception);
        const httpStatus = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const message = httpStatus === common_1.HttpStatus.BAD_REQUEST
            ? exception?.response.message ?? [exception.message]
            : exception.message;
        const responseBody = {
            statusCode: httpStatus,
            message: message,
            timestamp: new Date().toISOString(),
            requestId: (0, uuid_1.v4)(),
            debugOnly: exception,
        };
        this.appLogger.error(exception?.message, exception);
        httpAdapter.reply(host.switchToHttp().getResponse(), responseBody, httpStatus);
    }
    handleTypeormError(exception) {
        if (exception instanceof typeorm_1.QueryFailedError) {
            if (exception?.driverError?.detail?.includes('is not present in table')) {
                return new common_1.NotFoundException(exception.driverError.detail);
            }
            if (exception?.message?.includes('invalid input syntax for') ||
                exception?.message?.includes('is out of range for type')) {
                return new common_1.NotFoundException(exception.message);
            }
        }
        if (exception instanceof typeorm_1.EntityNotFoundError) {
            return new common_1.NotFoundException(exception.message?.split(':')?.[0]);
        }
        return exception;
    }
};
GlobalExceptionsFilter = GlobalExceptionsFilter_1 = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [core_1.HttpAdapterHost,
        request_context_provider_1.RequestContextProvider,
        logger_service_1.AppLoggerService])
], GlobalExceptionsFilter);
exports.GlobalExceptionsFilter = GlobalExceptionsFilter;
//# sourceMappingURL=global-exception.filter.js.map