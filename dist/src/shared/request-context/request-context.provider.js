"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestContextProvider = void 0;
const common_1 = require("@nestjs/common");
const express_http_context_1 = __importDefault(require("express-http-context"));
const request_context_1 = require("./request-context");
const class_transformer_1 = require("class-transformer");
let RequestContextProvider = class RequestContextProvider {
    currentContext() {
        return (0, class_transformer_1.plainToClass)(request_context_1.RequestContext, express_http_context_1.default?.ns?.active, {
            excludeExtraneousValues: true,
        });
    }
    get(key) {
        return express_http_context_1.default.get(key);
    }
    set(context) {
        for (const key in context) {
            express_http_context_1.default.set(key, context[key]);
        }
    }
};
RequestContextProvider = __decorate([
    (0, common_1.Injectable)()
], RequestContextProvider);
exports.RequestContextProvider = RequestContextProvider;
//# sourceMappingURL=request-context.provider.js.map