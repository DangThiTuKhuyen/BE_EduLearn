"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTreatmentTable1667881803632 = void 0;
const commons_1 = require("../shared/helpers/commons");
const typeorm_1 = require("typeorm");
class createTreatmentTable1667881803632 {
    async up(queryRunner) {
        await (0, commons_1.createTable)(queryRunner, 'treatment', [
            {
                name: 'disease_id',
                type: 'int',
            },
            {
                name: 'vaccine_id',
                type: 'int',
            },
            {
                name: 'effect',
                type: 'int',
            },
            {
                name: 'amount',
                type: 'int',
            },
        ]);
        await queryRunner.createIndex('treatment', new typeorm_1.TableIndex({
            columnNames: ['disease_id', 'vaccine_id'],
            isUnique: true,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('treatment', true, true);
    }
}
exports.createTreatmentTable1667881803632 = createTreatmentTable1667881803632;
//# sourceMappingURL=1667881803632-createTreatmentTable.js.map