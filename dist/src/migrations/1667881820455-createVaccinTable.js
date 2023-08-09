"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVaccineTable1667881820455 = void 0;
const commons_1 = require("../shared/helpers/commons");
class createVaccineTable1667881820455 {
    async up(queryRunner) {
        await (0, commons_1.createTable)(queryRunner, 'vaccine', [
            {
                name: 'vaccine_id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'vaccine_name',
                type: 'varchar',
            },
            {
                name: 'vaccine_price',
                type: 'int',
            },
            {
                name: 'country',
                type: 'varchar',
            },
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('vaccine', true, true);
    }
}
exports.createVaccineTable1667881820455 = createVaccineTable1667881820455;
//# sourceMappingURL=1667881820455-createVaccinTable.js.map