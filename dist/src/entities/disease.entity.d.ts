import { BaseEntity } from 'typeorm';
import { History } from './history.entity';
import { Registration } from './registration.entity';
import { Treatment } from './treatment.entity';
import { Vaccine } from './vaccine.entity';
export declare class Disease extends BaseEntity {
    diseaseId: number;
    diseaseName: string;
    diseaseDescribe: string;
    createdAt: Date;
    updatedAt: Date;
    vaccines: Vaccine[];
    registrations: Registration[];
    treatments: Treatment[];
    histories: History[];
}
//# sourceMappingURL=disease.entity.d.ts.map