import { MedicalCenterOutputDto } from './dtos/medical-center-output.dto';
import { MedicalCenterRepository } from './medical-center.repository';
export declare class MedicalCenterService {
    private readonly repository;
    constructor(repository: MedicalCenterRepository);
    findAll(): Promise<MedicalCenterOutputDto[]>;
}
//# sourceMappingURL=medical-center.service.d.ts.map