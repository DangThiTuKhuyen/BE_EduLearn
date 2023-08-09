import { TreatmentOutputDto } from '@modules/treament/dtos/treament-output.dto';
import { VaccineOutputDto } from '@modules/vaccine/dtos/vaccine-output.dto';
export declare class DiseaseOutputDto {
    diseaseId: number;
    diseaseName: string;
    vaccines: VaccineOutputDto[];
    treatments: TreatmentOutputDto[];
    diseaseDescribe: string;
}
//# sourceMappingURL=disease-output.dto.d.ts.map