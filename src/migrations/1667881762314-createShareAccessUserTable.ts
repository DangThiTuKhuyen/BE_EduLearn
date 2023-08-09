import { createTable } from '../shared/helpers/commons';
import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';

export class createShareAccessUserTable1667881762314
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await createTable(queryRunner, 'share_access_user', [
      {
        name: 'main_user',
        type: 'varchar',
      },
      {
        name: 'baby_id',
        type: 'int',
      },
      {
        name: 'sub_user',
        type: 'varchar',
      },
      {
        name: 'relation',
        type: 'varchar',
      },
    ]);

    await queryRunner.createIndex(
      'share_access_user',
      new TableIndex({
        columnNames: ['baby_id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('share_access_user', true, true);
  }
}
