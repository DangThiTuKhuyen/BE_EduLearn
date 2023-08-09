"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBabyTable1667881720981 = void 0;
const commons_1 = require("../shared/helpers/commons");
const typeorm_1 = require("typeorm");
class createBabyTable1667881720981 {
    async up(queryRunner) {
        await (0, commons_1.createTable)(queryRunner, 'baby', [
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
        await queryRunner.createIndex('baby', new typeorm_1.TableIndex({
            columnNames: ['baby_id', 'user_id'],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('baby', true, true);
    }
}
exports.createBabyTable1667881720981 = createBabyTable1667881720981;
//# sourceMappingURL=1667881720981-createBabyTable.js.map