import { createTable } from '../shared/helpers/commons';
import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';

export class createRegistrationTable1667881704102
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await createTable(queryRunner, 'registration', [
      {
        name: 'registration_id',
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
        name: 'medical_center_id',
        type: 'int',
      },
      {
        name: 'disease_id',
        type: 'int',
      },
      {
        name: 'registration_dose',
        type: 'int',
      },
      {
        name: 'registration_time',
        type: 'date',
      },
      {
        name: 'status',
        type: 'boolean',
        default: false,
      },
    ]);

    await queryRunner.createIndex(
      'registration',
      new TableIndex({
        columnNames: [
          'registration_id',
          'user_id',
          'vaccine_id',
          'medical_center_id',
          'disease_id',
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('registration', true, true);
  }
}
