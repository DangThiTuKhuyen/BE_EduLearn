import { DiseaseOutputDto } from '@modules/disease/dtos/disease-output.dto';
import { MedicalCenterOutputDto } from '@modules/medical-center/dtos/medical-center-output.dto';
import { UserOutputDto } from '@modules/user/dtos';
import { VaccineOutputDto } from '@modules/vaccine/dtos/vaccine-output.dto';
export declare class HistoryOutputDto {
    historyId: number;
    userId: string;
    vaccineId: number;
    time: string;
    dose: number;
    diseaseId: number;
    medicalCenterId: number;
    disease: DiseaseOutputDto;
    vaccine: VaccineOutputDto;
    medicalCenter: MedicalCenterOutputDto;
    user: UserOutputDto;
}
//# sourceMappingURL=history-output.dto.d.ts.map