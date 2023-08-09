import { createTable } from '../shared/helpers/commons';
import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';

export class createVaccinDetailTable1667881830937
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await createTable(queryRunner, 'vaccine_detail', [
      {
        name: 'vaccine_detail_id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'vaccine_id',
        type: 'int',
      },
      {
        name: 'country',
        type: 'varchar',
      },
      {
        name: 'price',
        type: 'int',
      },
    ]);

    await queryRunner.createIndex(
      'vaccine_detail',
      new TableIndex({
        columnNames: ['vaccine_detail_id', 'vaccine_id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vaccine_detail', true, true);
  }
}
