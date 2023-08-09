import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1648787947094 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'user_id',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_name',
            type: 'varchar',
            length: '30',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'birthday',
            type: 'date',
            isNullable: true,
          },

          {
            name: 'role',
            type: 'enum',
            enum: ['admin', 'user'],
            default: `'user'`,
          },
          {
            name: 'gender',
            type: 'enum',
            enum: ['male', 'female'],
            isNullable: true,
          },
          {
            name: 'phone',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'image',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'identity_card',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'province',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'district',
            type: 'varchar',
            length: '255',
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
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
