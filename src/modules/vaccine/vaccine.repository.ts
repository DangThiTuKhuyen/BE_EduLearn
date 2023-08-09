import { Vaccine } from '../../entities/vaccine.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Vaccine)
export class VaccineRepository extends Repository<Vaccine> {}
