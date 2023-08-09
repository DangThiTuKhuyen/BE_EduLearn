import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { DiseaseRepository } from './disease.repository';
import { DiseaseOutputDto } from './dtos/disease-output.dto';

@Injectable()
export class DiseaseService {
  constructor(private readonly repository: DiseaseRepository) {}

  async findDiseasesVaccines(): Promise<DiseaseOutputDto[]> {
    const diseasesVaccines = await this.repository.findDiseasesVaccines();

    return plainToInstance(DiseaseOutputDto, diseasesVaccines);
  }
}
