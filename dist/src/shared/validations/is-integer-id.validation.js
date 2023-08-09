"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsIntegerId = void 0;
const constants_1 = require("../constants");
const class_validator_1 = require("class-validator");
const lodash_1 = __importDefault(require("lodash"));
function IsIntegerId(typeInt, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsIntegerId',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: {
                ...validationOptions,
                message: `${propertyName} not allowable values`,
            },
            validator: {
                validate(value) {
                    if (lodash_1.default.isNil(value)) {
                        return true;
                    }
                    if (!lodash_1.default.isInteger(value)) {
                        return false;
                    }
                    if (typeInt) {
                        return typeInt === 'smallInt'
                            ? value <= constants_1.maxSmallInt
                            : value <= +constants_1.maxBigInt;
                    }
                    return value <= constants_1.maxInt;
                },
            },
        });
    };
}
exports.IsIntegerId = IsIntegerId;
//# sourceMappingURL=is-integer-id.validation.js.map