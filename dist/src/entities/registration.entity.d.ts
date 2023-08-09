import { BaseEntity } from 'typeorm';
import { Disease } from './disease.entity';
import { MedicalCenter } from './medical-center.entity';
import { User } from './user.entity';
import { Vaccine } from './vaccine.entity';
export declare class Registration extends BaseEntity {
    registrationId: number;
    userId: string;
    vaccineId: number;
    medicalCenterId: number;
    diseaseId: number;
    registrationDose: number;
    registrationTime: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    vaccine: Vaccine;
    medicalCenter: MedicalCenter;
    disease: Disease;
}
//# sourceMappingURL=registration.entity.d.ts.map