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
exports.RequestContextMiddleware = void 0;
const common_1 = require("@nestjs/common");
const express_http_context_1 = __importDefault(require("express-http-context"));
const request_context_provider_1 = require("./request-context.provider");
const uuid_1 = require("uuid");
let RequestContextMiddleware = class RequestContextMiddleware {
    constructor(requestContextProvider) {
        this.requestContextProvider = requestContextProvider;
    }
    use(req, res, next) {
        express_http_context_1.default.middleware(req, res, () => {
            this.requestContextProvider.set({
                requestId: (0, uuid_1.v4)(),
                path: req.originalUrl,
                method: req.method,
            });
            return next();
        });
    }
};
RequestContextMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [request_context_provider_1.RequestContextProvider])
], RequestContextMiddleware);
exports.RequestContextMiddleware = RequestContextMiddleware;
//# sourceMappingURL=request-context.middleware.js.map