"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const logger_interceptor_1 = require("./shared/logger/logger.interceptor");
const logger_service_1 = require("./shared/logger/logger.service");
const request_context_provider_1 = require("./shared/request-context/request-context.provider");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
        whitelist: true,
    }));
    app.enableCors();
    app.useGlobalInterceptors(new logger_interceptor_1.LoggingInterceptor(new logger_service_1.AppLoggerService(new request_context_provider_1.RequestContextProvider())), new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector), {
        ignoreDecorators: true,
        excludeExtraneousValues: true,
    }));
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('port');
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map