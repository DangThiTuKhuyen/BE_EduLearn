import { createTable } from '../shared/helpers/commons';
import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';

export class createMedicalRecordTable1667881655825
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await createTable(queryRunner, 'medical_record', [
      {
        name: 'user_id',
        type: 'varchar',
        length: '36',
      },
      {
        name: 'disease_id',
        type: 'int',
      },
    ]);

    await queryRunner.createIndex(
      'medical_record',
      new TableIndex({
        columnNames: ['user_id', 'disease_id'],
        isUnique: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('medical_record', true, true);
  }
}
