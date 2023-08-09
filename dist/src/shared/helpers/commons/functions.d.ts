import { QueryRunner } from 'typeorm';
declare const dropForeignKeys: (foreignKeys: string[][], queryRunner: QueryRunner) => Promise<void>;
declare const createForeignKeys: (foreignKeys: {
    keys: string[][];
    table: string;
}[], queryRunner: QueryRunner) => Promise<void>;
declare const upsertTable: (connection: QueryRunner, table: string, data: any, overwrite: string[], conflictTarget?: string[]) => Promise<void>;
declare const insertLastSeqValue: (connection: QueryRunner, table: string) => Promise<void>;
declare const createTable: (connection: QueryRunner, table: string, columns: any[]) => Promise<void>;
export { dropForeignKeys, createForeignKeys, upsertTable, insertLastSeqValue, createTable, };
//# sourceMappingURL=functions.d.ts.map