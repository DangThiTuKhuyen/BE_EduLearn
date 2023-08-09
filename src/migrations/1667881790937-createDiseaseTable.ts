import { createTable } from '../shared/helpers/commons';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class createDiseaseTable1667881790937 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await createTable(queryRunner, 'disease', [
      {
        name: 'disease_id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'disease_name',
        type: 'varchar',
      },
      {
        name: 'diseaseDescribe',
        type: 'varchar',
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('disease', true, true);
  }
}
