"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationTable1670406666343 = void 0;
const typeorm_1 = require("typeorm");
class CreateNotificationTable1670406666343 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'notification',
            columns: [
                {
                    name: 'notification_id',
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
                    name: 'notification_title',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'notification_content',
                    type: 'text',
                    isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'LOCALTIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'LOCALTIMESTAMP',
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('notification');
    }
}
exports.CreateNotificationTable1670406666343 = CreateNotificationTable1670406666343;
//# sourceMappingURL=1670406666343-CreateNotificationTable.js.map