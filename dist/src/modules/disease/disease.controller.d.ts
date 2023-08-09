import { DiseaseService } from './disease.service';
import { DiseaseOutputDto } from './dtos/disease-output.dto';
export declare class DiseaseController {
    private readonly diseaseService;
    constructor(diseaseService: DiseaseService);
    findDiseasesVaccines(): Promise<DiseaseOutputDto[]>;
}
//# sourceMappingURL=disease.controller.d.ts.map