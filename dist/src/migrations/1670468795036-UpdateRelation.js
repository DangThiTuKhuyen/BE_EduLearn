"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRelation1670468795036 = void 0;
const commons_1 = require("../shared/helpers/commons");
class UpdateRelation1670468795036 {
    async up(queryRunner) {
        const foreignKeys = [
            {
                keys: [['fk_notification_user_id_user', 'user_id', 'user_id', 'user']],
                table: 'notification',
            },
        ];
        await (0, commons_1.createForeignKeys)(foreignKeys, queryRunner);
    }
    async down() { }
}
exports.UpdateRelation1670468795036 = UpdateRelation1670468795036;
//# sourceMappingURL=1670468795036-UpdateRelation.js.map