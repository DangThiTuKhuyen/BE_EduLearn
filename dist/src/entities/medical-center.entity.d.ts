import { BaseEntity } from 'typeorm';
import { History } from './history.entity';
import { Registration } from './registration.entity';
export declare class MedicalCenter extends BaseEntity {
    medicalCenterId: number;
    name: string;
    longitude: number;
    latitude: number;
    createdAt: Date;
    updatedAt: Date;
    registrations: Registration[];
    histories: History[];
}
//# sourceMappingURL=medical-center.entity.d.ts.map