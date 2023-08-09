import { BaseEntity } from 'typeorm';
import { Disease } from './disease.entity';
import { History } from './history.entity';
import { Registration } from './registration.entity';
import { Treatment } from './treatment.entity';
export declare class Vaccine extends BaseEntity {
    vaccineId: number;
    vaccineName: string;
    vaccinePrice: number;
    country: number;
    vaccineFirm: number;
    createdAt: Date;
    updatedAt: Date;
    diseases: Disease[];
    registrations: Registration[];
    treatments: Treatment[];
    histories: History[];
}
//# sourceMappingURL=vaccine.entity.d.ts.map