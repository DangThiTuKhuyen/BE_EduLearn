"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = exports.insertLastSeqValue = exports.upsertTable = exports.createForeignKeys = exports.dropForeignKeys = void 0;
const typeorm_1 = require("typeorm");
const _1 = require(".");
const dropForeignKeys = async (foreignKeys, queryRunner) => {
    for (const foreignKey of foreignKeys) {
        const [table, key] = foreignKey;
        await queryRunner.dropForeignKey(table, key);
    }
};
exports.dropForeignKeys = dropForeignKeys;
const createForeignKeys = async (foreignKeys, queryRunner) => {
    for (const foreignKey of foreignKeys) {
        const { keys, table } = foreignKey;
        const keyNames = keys.map((key) => {
            const [name, columnNames, referencedColumnNames, referencedTableName] = key;
            return new typeorm_1.TableForeignKey({
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
exports.createForeignKeys = createForeignKeys;
const upsertTable = async (connection, table, data, overwrite, conflictTarget = ['id']) => {
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
exports.upsertTable = upsertTable;
const insertLastSeqValue = async (connection, table) => {
    await connection.query(`SELECT SETVAL('${table}_${table}_id_seq', COALESCE((SELECT MAX(${table}_id)+1 FROM ${table}), 1), false)`);
};
exports.insertLastSeqValue = insertLastSeqValue;
const createTable = async (connection, table, columns) => {
    await connection.createTable(new typeorm_1.Table({
        name: table,
        columns: [...columns, ..._1.commonTimestamp],
    }));
};
exports.createTable = createTable;
//# sourceMappingURL=functions.js.map