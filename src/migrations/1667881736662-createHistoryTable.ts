import { createTable } from '../shared/helpers/commons';
import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';

export class createHistoryTable1667881736662 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await createTable(queryRunner, 'history', [
      {
        name: 'history_id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'user_id',
        type: 'varchar',
        length: '36',
      },
      {
        name: 'vaccine_id',
        type: 'int',
      },
      {
        name: 'time',
        type: 'date',
      },
      {
        name: 'dose',
        type: 'int',
      },
      {
        name: 'disease_id',
        type: 'int',
      },
      {
        name: 'medical_center_id',
        type: 'int',
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('history', true, true);
  }
}
