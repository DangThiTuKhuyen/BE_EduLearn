import { VaccineService } from './vaccine.service';
import { CreateVaccineDto } from './dtos/create-vaccine.dto';
import { UpdateVaccineDto } from './dtos/update-vaccine.dto';
export declare class VaccineController {
    private readonly vaccineService;
    constructor(vaccineService: VaccineService);
    create(createVaccineDto: CreateVaccineDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateVaccineDto: UpdateVaccineDto): string;
}
//# sourceMappingURL=vaccine.controller.d.ts.map