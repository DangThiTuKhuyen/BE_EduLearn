"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHistoryTable1667881736662 = void 0;
const commons_1 = require("../shared/helpers/commons");
class createHistoryTable1667881736662 {
    async up(queryRunner) {
        await (0, commons_1.createTable)(queryRunner, 'history', [
            {
                name: 'history_id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'user_id',
                type: 'varchar',
                length: '36',
            },
            {
                name: 'vaccine_id',
                type: 'int',
            },
            {
                name: 'time',
                type: 'date',
            },
            {
                name: 'dose',
                type: 'int',
            },
            {
                name: 'disease_id',
                type: 'int',
            },
            {
                name: 'medical_center_id',
                type: 'int',
            },
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('history', true, true);
    }
}
exports.createHistoryTable1667881736662 = createHistoryTable1667881736662;
//# sourceMappingURL=1667881736662-createHistoryTable.js.map