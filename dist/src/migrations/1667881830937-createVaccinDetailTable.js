"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVaccinDetailTable1667881830937 = void 0;
const commons_1 = require("../shared/helpers/commons");
const typeorm_1 = require("typeorm");
class createVaccinDetailTable1667881830937 {
    async up(queryRunner) {
        await (0, commons_1.createTable)(queryRunner, 'vaccine_detail', [
            {
                name: 'vaccine_detail_id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'vaccine_id',
                type: 'int',
            },
            {
                name: 'country',
                type: 'varchar',
            },
            {
                name: 'price',
                type: 'int',
            },
        ]);
        await queryRunner.createIndex('vaccine_detail', new typeorm_1.TableIndex({
            columnNames: ['vaccine_detail_id', 'vaccine_id'],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('vaccine_detail', true, true);
    }
}
exports.createVaccinDetailTable1667881830937 = createVaccinDetailTable1667881830937;
//# sourceMappingURL=1667881830937-createVaccinDetailTable.js.map