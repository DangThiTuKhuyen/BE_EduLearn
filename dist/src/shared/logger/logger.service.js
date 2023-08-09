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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLoggerService = void 0;
const common_1 = require("@nestjs/common");
const request_context_provider_1 = require("../request-context/request-context.provider");
const winston_1 = require("winston");
let AppLoggerService = class AppLoggerService {
    constructor(requestContextProvider) {
        this.requestContextProvider = requestContextProvider;
        this.logger = (0, winston_1.createLogger)({
            transports: [new winston_1.transports.Console()],
        });
    }
    setContextName(contextName) {
        this.contextName = contextName;
    }
    error(message, meta) {
        const timestamp = new Date().toISOString();
        const context = this.requestContextProvider.currentContext();
        return this.logger.error({
            context,
            message,
            contextName: this.contextName,
            timestamp,
            meta,
        });
    }
    warn(message, meta) {
        const timestamp = new Date().toISOString();
        const context = this.requestContextProvider.currentContext();
        return this.logger.warn({
            context,
            message,
            contextName: this.contextName,
            timestamp,
            meta,
        });
    }
    debug(message, meta) {
        const timestamp = new Date().toISOString();
        const context = this.requestContextProvider.currentContext();
        return this.logger.debug({
            context,
            message,
            contextName: this.contextName,
            timestamp,
            meta,
        });
    }
    verbose(message, meta) {
        const timestamp = new Date().toISOString();
        const context = this.requestContextProvider.currentContext();
        return this.logger.verbose({
            context,
            message,
            contextName: this.contextName,
            timestamp,
            meta,
        });
    }
    log(message, meta) {
        const timestamp = new Date().toISOString();
        const context = this.requestContextProvider.currentContext();
        return this.logger.info({
            context,
            message,
            contextName: this.contextName,
            timestamp,
            meta,
        });
    }
};
AppLoggerService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.TRANSIENT }),
    __metadata("design:paramtypes", [request_context_provider_1.RequestContextProvider])
], AppLoggerService);
exports.AppLoggerService = AppLoggerService;
//# sourceMappingURL=logger.service.js.map