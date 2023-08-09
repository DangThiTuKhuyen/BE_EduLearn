"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRegistrationTable1667881704102 = void 0;
const commons_1 = require("../shared/helpers/commons");
const typeorm_1 = require("typeorm");
class createRegistrationTable1667881704102 {
    async up(queryRunner) {
        await (0, commons_1.createTable)(queryRunner, 'registration', [
            {
                name: 'registration_id',
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
                name: 'medical_center_id',
                type: 'int',
            },
            {
                name: 'disease_id',
                type: 'int',
            },
            {
                name: 'registration_dose',
                type: 'int',
            },
            {
                name: 'registration_time',
                type: 'date',
            },
            {
                name: 'status',
                type: 'boolean',
                default: false,
            },
        ]);
        await queryRunner.createIndex('registration', new typeorm_1.TableIndex({
            columnNames: [
                'registration_id',
                'user_id',
                'vaccine_id',
                'medical_center_id',
                'disease_id',
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('registration', true, true);
    }
}
exports.createRegistrationTable1667881704102 = createRegistrationTable1667881704102;
//# sourceMappingURL=1667881704102-createRegistrationTable.js.map