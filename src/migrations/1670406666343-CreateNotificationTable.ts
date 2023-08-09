import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateNotificationTable1670406666343
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'notification',
        columns: [
          {
            name: 'notification_id',
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
            name: 'notification_title',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'notification_content',
            type: 'text',
            isNullable: true,
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'LOCALTIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'LOCALTIMESTAMP',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('notification');
  }
}
