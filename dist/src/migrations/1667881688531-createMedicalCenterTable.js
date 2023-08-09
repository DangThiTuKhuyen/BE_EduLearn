"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMedicalCenterTable1667881688531 = void 0;
const commons_1 = require("../shared/helpers/commons");
class createMedicalCenterTable1667881688531 {
    async up(queryRunner) {
        await (0, commons_1.createTable)(queryRunner, 'medical_center', [
            {
                name: 'medical_center_id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'name',
                type: 'varchar',
            },
            {
                name: 'longitude',
                type: 'numeric(7,6)',
            },
            {
                name: 'latitude',
                type: 'numeric(7,6)',
            },
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('medical_center', true, true);
    }
}
exports.createMedicalCenterTable1667881688531 = createMedicalCenterTable1667881688531;
//# sourceMappingURL=1667881688531-createMedicalCenterTable.js.map