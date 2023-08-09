import { MedicalCenterOutputDto } from './dtos/medical-center-output.dto';
import { MedicalCenterService } from './medical-center.service';
export declare class MedicalCenterController {
    private readonly medicalCenterService;
    constructor(medicalCenterService: MedicalCenterService);
    findAll(): Promise<MedicalCenterOutputDto[]>;
}
//# sourceMappingURL=medical-center.controller.d.ts.map