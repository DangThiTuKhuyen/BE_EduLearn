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
exports.HistoryController = void 0;
const common_1 = require("@nestjs/common");
const history_param_dto_1 = require("./dtos/history-param.dto");
const history_date_param_dto_1 = require("./dtos/history-date-param.dto");
const history_service_1 = require("./history.service");
const history_profit_param_dto_1 = require("./dtos/history-profit-param.dto");
const role_decorator_1 = require("../../shared/decorators/role.decorator");
const enum_constant_1 = require("../../shared/constants/enum.constant");
const guard_exception_decorator_1 = require("../../shared/decorators/guard-exception.decorator");
let HistoryController = class HistoryController {
    constructor(historyService) {
        this.historyService = historyService;
    }
    profit(paramYear) {
        return this.historyService.profit(paramYear.year);
    }
    disease(paramYear) {
        return this.historyService.disease(paramYear.year);
    }
    scanQR(param) {
        return this.historyService.scanQR(param.userId);
    }
    vaccine(paramYear) {
        return this.historyService.vaccine(paramYear.year);
    }
    people(paramYear) {
        return this.historyService.people(paramYear.year);
    }
    peopleCenter(paramYear) {
        return this.historyService.peopleCenter(paramYear.year);
    }
    findAll(param) {
        return this.historyService.findAll(param.userId);
    }
    findWithDate(paramsDate) {
        return this.historyService.findWithDate(paramsDate);
    }
};
__decorate([
    (0, common_1.Get)('/profit/:year'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [history_profit_param_dto_1.HistoryProfitParamDto]),
    __metadata("design:returntype", Promise)
], HistoryController.prototype, "profit", null);
__decorate([
    (0, common_1.Get)('/disease/:year'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [history_profit_param_dto_1.HistoryProfitParamDto]),
    __metadata("design:returntype", Promise)
], HistoryController.prototype, "disease", null);
__decorate([
    (0, common_1.Get)('/scanQR'),
    (0, guard_exception_decorator_1.GuardsException)([enum_constant_1.GuardEnum.UserExistGuard, enum_constant_1.GuardEnum.AuthGuard]),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [history_param_dto_1.HistoryParamDto]),
    __metadata("design:returntype", Promise)
], HistoryController.prototype, "scanQR", null);
__decorate([
    (0, common_1.Get)('/vaccine/:year'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [history_profit_param_dto_1.HistoryProfitParamDto]),
    __metadata("design:returntype", Promise)
], HistoryController.prototype, "vaccine", null);
__decorate([
    (0, common_1.Get)('/people/:year'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [history_profit_param_dto_1.HistoryProfitParamDto]),
    __metadata("design:returntype", Promise)
], HistoryController.prototype, "people", null);
__decorate([
    (0, common_1.Get)('/peopleCenter/:year'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [history_profit_param_dto_1.HistoryProfitParamDto]),
    __metadata("design:returntype", Promise)
], HistoryController.prototype, "peopleCenter", null);
__decorate([
    (0, common_1.Get)(),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [history_param_dto_1.HistoryParamDto]),
    __metadata("design:returntype", Promise)
], HistoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':date'),
    (0, role_decorator_1.Roles)([enum_constant_1.RoleValue.User]),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [history_date_param_dto_1.HistoryDateParamDto]),
    __metadata("design:returntype", Promise)
], HistoryController.prototype, "findWithDate", null);
HistoryController = __decorate([
    (0, common_1.Controller)('users/:userId/histories'),
    __metadata("design:paramtypes", [history_service_1.HistoryService])
], HistoryController);
exports.HistoryController = HistoryController;
//# sourceMappingURL=history.controller.js.map