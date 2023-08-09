import { CreateVaccineDto } from './dtos/create-vaccine.dto';
import { UpdateVaccineDto } from './dtos/update-vaccine.dto';
export declare class VaccineService {
    create(createVaccineDto: CreateVaccineDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateVaccineDto: UpdateVaccineDto): string;
    remove(id: number): string;
}
//# sourceMappingURL=vaccine.service.d.ts.map