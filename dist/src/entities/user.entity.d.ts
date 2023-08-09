import { BaseEntity } from 'typeorm';
import { History } from './history.entity';
import { Registration } from './registration.entity';
export declare class User extends BaseEntity {
    userId: string;
    userName: string;
    email: string;
    role: string;
    birthday: string;
    gender: string;
    phone: number;
    image: string;
    identityCard: number;
    province: string;
    district: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    registrations: Registration[];
    histories: History[];
}
//# sourceMappingURL=user.entity.d.ts.map