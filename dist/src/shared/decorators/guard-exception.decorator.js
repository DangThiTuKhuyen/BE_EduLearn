"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardsException = void 0;
const common_1 = require("@nestjs/common");
const GuardsException = (guards) => (0, common_1.SetMetadata)('GuardsException', guards);
exports.GuardsException = GuardsException;
//# sourceMappingURL=guard-exception.decorator.js.map