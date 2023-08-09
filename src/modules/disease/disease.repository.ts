import { Disease } from 'src/entities/disease.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Disease)
export class DiseaseRepository extends Repository<Disease> {
  findDiseasesVaccines() {
    return this.createQueryBuilder('disease')
      .leftJoinAndSelect('disease.treatments', 'treatments')
      .leftJoinAndSelect('treatments.vaccine', 'vaccine')
      .getMany();
  }
}
