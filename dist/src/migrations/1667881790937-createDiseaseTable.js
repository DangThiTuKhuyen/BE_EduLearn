"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDiseaseTable1667881790937 = void 0;
const commons_1 = require("../shared/helpers/commons");
class createDiseaseTable1667881790937 {
    async up(queryRunner) {
        await (0, commons_1.createTable)(queryRunner, 'disease', [
            {
                name: 'disease_id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'disease_name',
                type: 'varchar',
            },
            {
                name: 'diseaseDescribe',
                type: 'varchar',
            },
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('disease', true, true);
    }
}
exports.createDiseaseTable1667881790937 = createDiseaseTable1667881790937;
//# sourceMappingURL=1667881790937-createDiseaseTable.js.map