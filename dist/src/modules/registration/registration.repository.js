"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationRepository = void 0;
const registration_entity_1 = require("../../entities/registration.entity");
const typeorm_1 = require("typeorm");
let RegistrationRepository = class RegistrationRepository extends typeorm_1.Repository {
    listRegistration(date) {
        return this.createQueryBuilder('registration')
            .leftJoinAndSelect('registration.user', 'user')
            .leftJoinAndSelect('registration.vaccine', 'vaccine')
            .leftJoinAndSelect('registration.medicalCenter', 'medicalCenter')
            .leftJoinAndSelect('registration.disease', 'disease')
            .where('registration.registrationTime = :date')
            .setParameters({ date })
            .getMany();
    }
    listRegistrationAccepted(date) {
        return this.createQueryBuilder('registration')
            .leftJoinAndSelect('registration.user', 'user')
            .leftJoinAndSelect('registration.vaccine', 'vaccine')
            .leftJoinAndSelect('registration.medicalCenter', 'medicalCenter')
            .leftJoinAndSelect('registration.disease', 'disease')
            .where('registration.registrationTime = :date')
            .andWhere('registration.status = true')
            .setParameters({ date })
            .getMany();
    }
    registration(userId) {
        return this.createQueryBuilder('registration')
            .leftJoinAndSelect('registration.user', 'user')
            .leftJoinAndSelect('registration.medicalCenter', 'medicalCenter')
            .leftJoinAndSelect('registration.disease', 'disease')
            .leftJoinAndSelect('disease.treatments', 'treatments', 'treatments.vaccineId = registration.vaccineId')
            .leftJoinAndSelect('treatments.vaccine', 'vaccines')
            .where('registration.userId = :userId')
            .setParameters({ userId })
            .getMany();
    }
    findByDate(date) {
        return this.createQueryBuilder('registration')
            .leftJoinAndSelect('registration.user', 'user')
            .leftJoinAndSelect('registration.vaccine', 'vaccine')
            .leftJoinAndSelect('registration.medicalCenter', 'medicalCenter')
            .leftJoinAndSelect('registration.disease', 'disease')
            .where('registration.registrationTime = :date')
            .andWhere('registration.status = true')
            .setParameters({ date })
            .getMany();
    }
    findByUser(userId) {
        return this.createQueryBuilder('registration')
            .leftJoinAndSelect('registration.user', 'user')
            .leftJoinAndSelect('registration.medicalCenter', 'medicalCenter')
            .leftJoinAndSelect('registration.disease', 'disease')
            .leftJoinAndSelect('disease.treatments', 'treatments', 'treatments.vaccineId = registration.vaccineId')
            .leftJoinAndSelect('treatments.vaccine', 'vaccines')
            .where('registration.userId = :userId')
            .andWhere('registration.status = true')
            .setParameters({ userId })
            .getMany();
    }
    findOneById(id) {
        return this.createQueryBuilder('registration')
            .leftJoinAndSelect('registration.user', 'user')
            .leftJoinAndSelect('registration.vaccine', 'vaccine')
            .leftJoinAndSelect('registration.medicalCenter', 'medicalCenter')
            .leftJoinAndSelect('registration.disease', 'disease')
            .where('registration.registrationId = :id')
            .setParameters({
            id,
        })
            .getOne();
    }
    cronFindRegistration() {
        return this.createQueryBuilder('registration')
            .leftJoinAndSelect('registration.user', 'user')
            .leftJoinAndSelect('registration.vaccine', 'vaccine')
            .leftJoinAndSelect('registration.medicalCenter', 'medicalCenter')
            .leftJoinAndSelect('registration.disease', 'disease')
            .where(`registration.registrationTime > NOW() - INTERVAL '3 DAY' `)
            .andWhere(`registration.registrationTime < NOW() + INTERVAL '7 DAY'`)
            .getMany();
    }
};
RegistrationRepository = __decorate([
    (0, typeorm_1.EntityRepository)(registration_entity_1.Registration)
], RegistrationRepository);
exports.RegistrationRepository = RegistrationRepository;
//# sourceMappingURL=registration.repository.js.map