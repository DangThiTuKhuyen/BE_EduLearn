import { createTable } from '../shared/helpers/commons';
import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';

export class createTreatmentTable1667881803632 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await createTable(queryRunner, 'treatment', [
      {
        name: 'disease_id',
        type: 'int',
      },
      {
        name: 'vaccine_id',
        type: 'int',
      },
      {
        name: 'effect',
        type: 'int',
      },
      {
        name: 'amount',
        type: 'int',
      },
    ]);

    await queryRunner.createIndex(
      'treatment',
      new TableIndex({
        columnNames: ['disease_id', 'vaccine_id'],
        isUnique: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('treatment', true, true);
  }
}
