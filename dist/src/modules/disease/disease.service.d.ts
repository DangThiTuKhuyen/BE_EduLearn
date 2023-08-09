import { DiseaseRepository } from './disease.repository';
import { DiseaseOutputDto } from './dtos/disease-output.dto';
export declare class DiseaseService {
    private readonly repository;
    constructor(repository: DiseaseRepository);
    findDiseasesVaccines(): Promise<DiseaseOutputDto[]>;
}
//# sourceMappingURL=disease.service.d.ts.map