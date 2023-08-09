import { Disease } from 'src/entities/disease.entity';
import { Repository } from 'typeorm';
export declare class DiseaseRepository extends Repository<Disease> {
    findDiseasesVaccines(): Promise<Disease[]>;
}
//# sourceMappingURL=disease.repository.d.ts.map