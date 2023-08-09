import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { MedicalCenterOutputDto } from './dtos/medical-center-output.dto';
import { MedicalCenterRepository } from './medical-center.repository';

@Injectable()
export class MedicalCenterService {
  constructor(private readonly repository: MedicalCenterRepository) {}

  async findAll(): Promise<MedicalCenterOutputDto[]> {
    const medicalCenter = await this.repository.find();
    return plainToInstance(MedicalCenterOutputDto, medicalCenter);
  }
}
