import { Registration } from '../../entities/registration.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Registration)
export class RegistrationRepository extends Repository<Registration> {
  listRegistration(date: string) {
    return this.createQueryBuilder('registration')
      .leftJoinAndSelect('registration.user', 'user')
      .leftJoinAndSelect('registration.vaccine', 'vaccine')
      .leftJoinAndSelect('registration.medicalCenter', 'medicalCenter')
      .leftJoinAndSelect('registration.disease', 'disease')
      .where('registration.registrationTime = :date')
      .setParameters({ date })
      .getMany();
  }

  listRegistrationAccepted(date: string) {
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

  registration(userId: string) {
    return this.createQueryBuilder('registration')
      .leftJoinAndSelect('registration.user', 'user')
      .leftJoinAndSelect('registration.medicalCenter', 'medicalCenter')
      .leftJoinAndSelect('registration.disease', 'disease')
      .leftJoinAndSelect(
        'disease.treatments',
        'treatments',
        'treatments.vaccineId = registration.vaccineId',
      )
      .leftJoinAndSelect('treatments.vaccine', 'vaccines')
      .where('registration.userId = :userId')
      .setParameters({ userId })
      .getMany();
  }

  findByDate(date: string) {
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

  findByUser(userId: string) {
    return this.createQueryBuilder('registration')
      .leftJoinAndSelect('registration.user', 'user')
      .leftJoinAndSelect('registration.medicalCenter', 'medicalCenter')
      .leftJoinAndSelect('registration.disease', 'disease')
      .leftJoinAndSelect(
        'disease.treatments',
        'treatments',
        'treatments.vaccineId = registration.vaccineId',
      )
      .leftJoinAndSelect('treatments.vaccine', 'vaccines')
      .where('registration.userId = :userId')
      .andWhere('registration.status = true')
      .setParameters({ userId })
      .getMany();
  }

  findOneById(id: number) {
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
}
