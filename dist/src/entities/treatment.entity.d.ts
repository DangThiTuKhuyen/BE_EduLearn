import { BaseEntity } from 'typeorm';
import { Disease } from './disease.entity';
import { Vaccine } from './vaccine.entity';
export declare class Treatment extends BaseEntity {
    diseaseId: number;
    vaccineId: number;
    effect: number;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
    disease: Disease;
    vaccine: Vaccine;
}
//# sourceMappingURL=treatment.entity.d.ts.map