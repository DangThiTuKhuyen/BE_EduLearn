"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaccineService = void 0;
const common_1 = require("@nestjs/common");
let VaccineService = class VaccineService {
    create(createVaccineDto) {
        return 'This action adds a new vaccine';
    }
    findAll() {
        return `This action returns all vaccine`;
    }
    findOne(id) {
        return `This action returns a #${id} vaccine`;
    }
    update(id, updateVaccineDto) {
        return `This action updates a #${id} vaccine`;
    }
    remove(id) {
        return `This action removes a #${id} vaccine`;
    }
};
VaccineService = __decorate([
    (0, common_1.Injectable)()
], VaccineService);
exports.VaccineService = VaccineService;
//# sourceMappingURL=vaccine.service.js.map