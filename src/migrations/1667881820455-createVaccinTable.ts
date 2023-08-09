import { createTable } from '../shared/helpers/commons';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class createVaccineTable1667881820455 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await createTable(queryRunner, 'vaccine', [
      {
        name: 'vaccine_id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'vaccine_name',
        type: 'varchar',
      },
      {
        name: 'vaccine_price',
        type: 'int',
      },
      {
        name: 'country',
        type: 'varchar',
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vaccine', true, true);
  }
}
