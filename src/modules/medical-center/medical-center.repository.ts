import { MedicalCenter } from 'src/entities/medical-center.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(MedicalCenter)
export class MedicalCenterRepository extends Repository<MedicalCenter> {}
