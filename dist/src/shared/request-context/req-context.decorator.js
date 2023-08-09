"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReqContext = void 0;
const common_1 = require("@nestjs/common");
exports.ReqContext = (0, common_1.createParamDecorator)((data, ctx) => {
    const user = ctx.switchToHttp().getRequest()?.user;
    return user;
});
//# sourceMappingURL=req-context.decorator.js.map