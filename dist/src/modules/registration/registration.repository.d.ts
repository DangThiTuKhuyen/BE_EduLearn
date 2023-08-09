import { Registration } from '../../entities/registration.entity';
import { Repository } from 'typeorm';
export declare class RegistrationRepository extends Repository<Registration> {
    listRegistration(date: string): Promise<Registration[]>;
    listRegistrationAccepted(date: string): Promise<Registration[]>;
    registration(userId: string): Promise<Registration[]>;
    findByDate(date: string): Promise<Registration[]>;
    findByUser(userId: string): Promise<Registration[]>;
    findOneById(id: number): Promise<Registration>;
    cronFindRegistration(): Promise<Registration[]>;
}
//# sourceMappingURL=registration.repository.d.ts.map