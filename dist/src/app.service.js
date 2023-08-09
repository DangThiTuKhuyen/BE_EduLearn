"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    healthCheck() {
        return {
            '1': [
                {
                    historyId: 1,
                    userId: '0879a9a2-5f65-4476-b107-fea78da2fd69',
                    vaccineId: 1,
                    time: '11/11/2022',
                    dose: 1,
                    diseaseId: 1,
                    medicalCenterId: 2,
                    createdAt: '2022-11-22T20:25:23.765Z',
                    updatedAt: '2022-11-22T20:25:23.765Z',
                    disease: {
                        diseaseId: 1,
                        diseaseName: 'covid',
                        createdAt: '2022-11-17T21:33:20.118Z',
                        updatedAt: '2022-11-17T21:33:20.118Z',
                        treatments: [
                            {
                                diseaseId: 1,
                                vaccineId: 1,
                                effect: 2121,
                                amount: 3,
                                createdAt: '2022-11-17T21:51:07.486Z',
                                updatedAt: '2022-11-17T21:51:07.486Z',
                                vaccine: {
                                    vaccineId: 1,
                                    vaccineName: 'vaccine 1',
                                    vaccinePrice: 115000,
                                    country: 'Lào',
                                    createdAt: '2022-11-17T21:34:24.958Z',
                                    updatedAt: '2022-11-17T21:34:24.958Z',
                                },
                            },
                        ],
                    },
                    medicalCenter: {
                        medicalCenterId: 2,
                        name: 'Medical Center 1',
                        longitude: '1.100000',
                        latitude: '1.000000',
                        createdAt: '2022-11-21T08:38:19.883Z',
                        updatedAt: '2022-11-21T08:38:19.883Z',
                    },
                },
                {
                    historyId: 2,
                    userId: '0879a9a2-5f65-4476-b107-fea78da2fd69',
                    vaccineId: 1,
                    time: '11/11/2022',
                    dose: 1,
                    diseaseId: 1,
                    medicalCenterId: 2,
                    createdAt: '2022-11-22T20:25:23.765Z',
                    updatedAt: '2022-11-22T20:25:23.765Z',
                    disease: {
                        diseaseId: 1,
                        diseaseName: 'covid',
                        createdAt: '2022-11-17T21:33:20.118Z',
                        updatedAt: '2022-11-17T21:33:20.118Z',
                        treatments: [
                            {
                                diseaseId: 1,
                                vaccineId: 1,
                                effect: 2121,
                                amount: 3,
                                createdAt: '2022-11-17T21:51:07.486Z',
                                updatedAt: '2022-11-17T21:51:07.486Z',
                                vaccine: {
                                    vaccineId: 1,
                                    vaccineName: 'vaccine 1',
                                    vaccinePrice: 115000,
                                    country: 'Lào',
                                    createdAt: '2022-11-17T21:34:24.958Z',
                                    updatedAt: '2022-11-17T21:34:24.958Z',
                                },
                            },
                        ],
                    },
                    medicalCenter: {
                        medicalCenterId: 2,
                        name: 'Medical Center 1',
                        longitude: '1.100000',
                        latitude: '1.000000',
                        createdAt: '2022-11-21T08:38:19.883Z',
                        updatedAt: '2022-11-21T08:38:19.883Z',
                    },
                },
            ],
            '2': [
                {
                    historyId: 3,
                    userId: '0879a9a2-5f65-4476-b107-fea78da2fd69',
                    vaccineId: 2,
                    time: '23/11/2022',
                    dose: 1,
                    diseaseId: 2,
                    medicalCenterId: 2,
                    createdAt: '2022-11-21T08:51:35.722Z',
                    updatedAt: '2022-11-22T08:18:49.863Z',
                    disease: {
                        diseaseId: 2,
                        diseaseName: 'Cúm',
                        createdAt: '2022-11-17T21:33:20.118Z',
                        updatedAt: '2022-11-17T21:33:20.118Z',
                        treatments: [
                            {
                                diseaseId: 2,
                                vaccineId: 2,
                                effect: 2121,
                                amount: 3,
                                createdAt: '2022-11-17T21:51:07.486Z',
                                updatedAt: '2022-11-17T21:51:07.486Z',
                                vaccine: {
                                    vaccineId: 2,
                                    vaccineName: 'vaccine 2',
                                    vaccinePrice: 115000,
                                    country: 'Tây Ban Nha',
                                    createdAt: '2022-11-17T21:34:24.958Z',
                                    updatedAt: '2022-11-17T21:34:24.958Z',
                                },
                            },
                        ],
                    },
                    medicalCenter: {
                        medicalCenterId: 2,
                        name: 'Medical Center 1',
                        longitude: '1.100000',
                        latitude: '1.000000',
                        createdAt: '2022-11-21T08:38:19.883Z',
                        updatedAt: '2022-11-21T08:38:19.883Z',
                    },
                },
            ],
        };
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map