"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDateFormatString = void 0;
const class_validator_1 = require("class-validator");
const moment_1 = __importDefault(require("moment"));
function IsDateFormatString(dateFormat, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsDateFormatString',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: {
                message: `${propertyName} must match the following format: ${dateFormat.toString()}`,
                ...validationOptions,
            },
            validator: {
                validate(value) {
                    return dateFormat.some((format) => (0, moment_1.default)(value, format, true).isValid());
                },
            },
        });
    };
}
exports.IsDateFormatString = IsDateFormatString;
//# sourceMappingURL=is-date-format-string.validation.js.map