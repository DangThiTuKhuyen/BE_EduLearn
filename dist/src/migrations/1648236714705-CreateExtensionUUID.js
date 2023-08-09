"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddExtensionUUID1648236714705 = void 0;
class AddExtensionUUID1648236714705 {
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp";');
    }
}
exports.AddExtensionUUID1648236714705 = AddExtensionUUID1648236714705;
//# sourceMappingURL=1648236714705-CreateExtensionUUID.js.map