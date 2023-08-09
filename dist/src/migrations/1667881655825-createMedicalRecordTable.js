"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMedicalRecordTable1667881655825 = void 0;
const commons_1 = require("../shared/helpers/commons");
const typeorm_1 = require("typeorm");
class createMedicalRecordTable1667881655825 {
    async up(queryRunner) {
        await (0, commons_1.createTable)(queryRunner, 'medical_record', [
            {
                name: 'user_id',
                type: 'varchar',
                length: '36',
            },
            {
                name: 'disease_id',
                type: 'int',
            },
        ]);
        await queryRunner.createIndex('medical_record', new typeorm_1.TableIndex({
            columnNames: ['user_id', 'disease_id'],
            isUnique: true,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('medical_record', true, true);
    }
}
exports.createMedicalRecordTable1667881655825 = createMedicalRecordTable1667881655825;
//# sourceMappingURL=1667881655825-createMedicalRecordTable.js.map