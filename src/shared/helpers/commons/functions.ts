import { QueryRunner, Table, TableForeignKey } from 'typeorm';
import { commonTimestamp } from '.';

const dropForeignKeys = async (
  foreignKeys: string[][],
  queryRunner: QueryRunner,
) => {
  for (const foreignKey of foreignKeys) {
    const [table, key] = foreignKey;
    await queryRunner.dropForeignKey(table, key);
  }
};

const createForeignKeys = async (
  foreignKeys: { keys: string[][]; table: string }[],
  queryRunner: QueryRunner,
) => {
  for (const foreignKey of foreignKeys) {
    const { keys, table } = foreignKey;
    const keyNames = keys.map((key: string[]) => {
      const [name, columnNames, referencedColumnNames, referencedTableName] =
        key;
      return new TableForeignKey({
        name: name,
        columnNames: [columnNames],
        referencedColumnNames: [referencedColumnNames],
        referencedTableName: referencedTableName,
        onDelete: 'CASCADE',
      });
    });
    await queryRunner.createForeignKeys(table, keyNames);
  }
};

const upsertTable = async (
  connection: QueryRunner,
  table: string,
  data: any,
  overwrite: string[],
  conflictTarget: string[] = ['id'],
) => {
  const columns = Object.keys(data[0]);
  await connection.manager
    .createQueryBuilder()
    .insert()
    .into(table, columns)
    .values(data)
    .orUpdate({
      overwrite,
      conflict_target: conflictTarget,
    })
    .execute();
};

const insertLastSeqValue = async (connection: QueryRunner, table: string) => {
  await connection.query(
    `SELECT SETVAL('${table}_${table}_id_seq', COALESCE((SELECT MAX(${table}_id)+1 FROM ${table}), 1), false)`,
  );
};

const createTable = async (
  connection: QueryRunner,
  table: string,
  columns: any[],
) => {
  await connection.createTable(
    new Table({
      name: table,
      columns: [...columns, ...commonTimestamp],
    }),
  );
};

export {
  dropForeignKeys,
  createForeignKeys,
  upsertTable,
  insertLastSeqValue,
  createTable,
};
