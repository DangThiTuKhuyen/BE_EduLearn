"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShareAccessUserTable1667881762314 = void 0;
const commons_1 = require("../shared/helpers/commons");
const typeorm_1 = require("typeorm");
class createShareAccessUserTable1667881762314 {
    async up(queryRunner) {
        await (0, commons_1.createTable)(queryRunner, 'share_access_user', [
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
        await queryRunner.createIndex('share_access_user', new typeorm_1.TableIndex({
            columnNames: ['baby_id'],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('share_access_user', true, true);
    }
}
exports.createShareAccessUserTable1667881762314 = createShareAccessUserTable1667881762314;
//# sourceMappingURL=1667881762314-createShareAccessUserTable.js.map