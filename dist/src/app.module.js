"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const request_context_provider_1 = require("./shared/request-context/request-context.provider");
const shared_module_1 = require("./shared/shared.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./modules/user/user.module");
const request_context_middleware_1 = require("./shared/request-context/request-context.middleware");
const core_1 = require("@nestjs/core");
const global_exception_filter_1 = require("./shared/filters/global-exception.filter");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./modules/auth/auth.module");
const disease_module_1 = require("./modules/disease/disease.module");
const vaccine_module_1 = require("./modules/vaccine/vaccine.module");
const registration_module_1 = require("./modules/registration/registration.module");
const medical_center_module_1 = require("./modules/medical-center/medical-center.module");
const history_module_1 = require("./modules/history/history.module");
const auth_guard_1 = require("./shared/guards/auth.guard");
const jwt_1 = require("@nestjs/jwt");
const user_repository_1 = require("./modules/user/user.repository");
const typeorm_1 = require("@nestjs/typeorm");
const user_exist_guard_1 = require("./shared/guards/user-exist.guard");
const interceptors_1 = require("./shared/interceptors");
const notification_module_1 = require("./modules/notification/notification.module");
const schedule_1 = require("@nestjs/schedule");
const cron_service_1 = require("./shared/common/cron-service");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(request_context_middleware_1.RequestContextMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            shared_module_1.SharedModule,
            user_module_1.UserModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            auth_module_1.AuthModule,
            disease_module_1.DiseaseModule,
            vaccine_module_1.VaccineModule,
            registration_module_1.RegistrationModule,
            medical_center_module_1.MedicalCenterModule,
            history_module_1.HistoryModule,
            typeorm_1.TypeOrmModule.forFeature([user_repository_1.UserRepository]),
            notification_module_1.NotificationModule,
            schedule_1.ScheduleModule.forRoot(),
            cron_service_1.CronService,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            request_context_provider_1.RequestContextProvider,
            jwt_1.JwtService,
            {
                provide: core_1.APP_FILTER,
                useClass: global_exception_filter_1.GlobalExceptionsFilter,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: user_exist_guard_1.UserExistGuard,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: interceptors_1.AppLoggingInterceptor,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map