import { createTable } from '../shared/helpers/commons';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class createMedicalCenterTable1667881688531
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await createTable(queryRunner, 'medical_center', [
      {
        name: 'medical_center_id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar',
      },
      {
        name: 'longitude',
        type: 'numeric(7,6)',
      },
      {
        name: 'latitude',
        type: 'numeric(7,6)',
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('medical_center', true, true);
  }
}
