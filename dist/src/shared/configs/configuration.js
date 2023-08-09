"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    env: process.env.APP_ENV,
    type: process.env.APP_TYPE,
    port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : undefined,
    database: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
    },
});
//# sourceMappingURL=configuration.js.map