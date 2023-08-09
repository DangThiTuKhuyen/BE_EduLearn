export declare class AppService {
    healthCheck(): {
        '1': {
            historyId: number;
            userId: string;
            vaccineId: number;
            time: string;
            dose: number;
            diseaseId: number;
            medicalCenterId: number;
            createdAt: string;
            updatedAt: string;
            disease: {
                diseaseId: number;
                diseaseName: string;
                createdAt: string;
                updatedAt: string;
                treatments: {
                    diseaseId: number;
                    vaccineId: number;
                    effect: number;
                    amount: number;
                    createdAt: string;
                    updatedAt: string;
                    vaccine: {
                        vaccineId: number;
                        vaccineName: string;
                        vaccinePrice: number;
                        country: string;
                        createdAt: string;
                        updatedAt: string;
                    };
                }[];
            };
            medicalCenter: {
                medicalCenterId: number;
                name: string;
                longitude: string;
                latitude: string;
                createdAt: string;
                updatedAt: string;
            };
        }[];
        '2': {
            historyId: number;
            userId: string;
            vaccineId: number;
            time: string;
            dose: number;
            diseaseId: number;
            medicalCenterId: number;
            createdAt: string;
            updatedAt: string;
            disease: {
                diseaseId: number;
                diseaseName: string;
                createdAt: string;
                updatedAt: string;
                treatments: {
                    diseaseId: number;
                    vaccineId: number;
                    effect: number;
                    amount: number;
                    createdAt: string;
                    updatedAt: string;
                    vaccine: {
                        vaccineId: number;
                        vaccineName: string;
                        vaccinePrice: number;
                        country: string;
                        createdAt: string;
                        updatedAt: string;
                    };
                }[];
            };
            medicalCenter: {
                medicalCenterId: number;
                name: string;
                longitude: string;
                latitude: string;
                createdAt: string;
                updatedAt: string;
            };
        }[];
    };
}
//# sourceMappingURL=app.service.d.ts.map