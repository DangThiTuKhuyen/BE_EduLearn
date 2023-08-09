import { createForeignKeys } from '@shared/helpers/commons';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateRelation1670468795036 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const foreignKeys: { keys: string[][]; table: string }[] = [
      {
        keys: [['fk_notification_user_id_user', 'user_id', 'user_id', 'user']],
        table: 'notification',
      },
    ];
    await createForeignKeys(foreignKeys, queryRunner);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(): Promise<void> {}
}
