import { Injectable } from '@nestjs/common';
import { CreateVaccineDto } from './dtos/create-vaccine.dto';
import { UpdateVaccineDto } from './dtos/update-vaccine.dto';

@Injectable()
export class VaccineService {
  create(createVaccineDto: CreateVaccineDto) {
    return 'This action adds a new vaccine';
  }

  findAll() {
    return `This action returns all vaccine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vaccine`;
  }

  update(id: number, updateVaccineDto: UpdateVaccineDto) {
    return `This action updates a #${id} vaccine`;
  }

  remove(id: number) {
    return `This action removes a #${id} vaccine`;
  }
}
