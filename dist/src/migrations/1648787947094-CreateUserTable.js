"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1648787947094 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserTable1648787947094 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('users');
    }
}
exports.CreateUserTable1648787947094 = CreateUserTable1648787947094;
//# sourceMappingURL=1648787947094-CreateUserTable.js.map