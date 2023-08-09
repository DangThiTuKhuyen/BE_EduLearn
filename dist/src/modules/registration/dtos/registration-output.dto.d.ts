import { DiseaseOutputDto } from '@modules/disease/dtos/disease-output.dto';
import { MedicalCenterOutputDto } from '@modules/medical-center/dtos/medical-center-output.dto';
import { UserOutputDto } from '@modules/user/dtos';
import { VaccineOutputDto } from '@modules/vaccine/dtos/vaccine-output.dto';
export declare class RegistrationOutputDto {
    registrationId: number;
    userId: string;
    vaccineId: number;
    medicalCenterId: number;
    diseaseId: number;
    registrationDose: number;
    registrationTime: string;
    status: boolean;
    user: UserOutputDto;
    medicalCenter: MedicalCenterOutputDto;
    vaccine: VaccineOutputDto;
    disease: DiseaseOutputDto;
}
//# sourceMappingURL=registration-output.dto.d.ts.map