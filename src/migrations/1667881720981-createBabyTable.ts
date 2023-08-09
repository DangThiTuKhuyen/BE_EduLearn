import { createTable } from '../shared/helpers/commons';
import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';

export class createBabyTable1667881720981 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await createTable(queryRunner, 'baby', [
      {
        name: 'baby_id',
        type: 'int',
        isPrimary: true,
      },
      {
        name: 'user_id',
        type: 'varchar',
        length: '36',
      },
      {
        name: 'name',
        type: 'varchar',
      },
      {
        name: 'gender',
        type: 'enum',
        enum: ['0', '1', '2'],
      },
    ]);

    await queryRunner.createIndex(
      'baby',
      new TableIndex({
        columnNames: ['baby_id', 'user_id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('baby', true, true);
  }
}
