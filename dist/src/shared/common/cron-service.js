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
var CronService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
let CronService = CronService_1 = class CronService {
    constructor() {
        this.logger = new common_1.Logger(CronService_1.name);
    }
    handleCron() {
        this.logger.debug('Called when the current second is 45');
    }
};
__decorate([
    (0, schedule_1.Cron)('0 1 * * */1'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronService.prototype, "handleCron", null);
CronService = CronService_1 = __decorate([
    (0, common_1.Injectable)()
], CronService);
exports.CronService = CronService;
//# sourceMappingURL=cron-service.js.map