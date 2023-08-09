import { Treatment } from 'src/entities/treatment.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Treatment)
export class TreatmentRepository extends Repository<Treatment> {}
