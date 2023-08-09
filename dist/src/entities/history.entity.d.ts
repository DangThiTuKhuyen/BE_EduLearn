import { BaseEntity } from 'typeorm';
import { Disease } from './disease.entity';
import { MedicalCenter } from './medical-center.entity';
import { User } from './user.entity';
import { Vaccine } from './vaccine.entity';
export declare class History extends BaseEntity {
    historyId: number;
    userId: string;
    vaccineId: number;
    time: string;
    dose: number;
    diseaseId: number;
    medicalCenterId: number;
    createdAt: Date;
    updatedAt: Date;
    disease: Disease;
    vaccine: Vaccine;
    user: User;
    medicalCenter: MedicalCenter;
}
//# sourceMappingURL=history.entity.d.ts.map