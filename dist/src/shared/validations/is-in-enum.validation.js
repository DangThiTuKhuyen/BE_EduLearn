"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsInEnum = void 0;
const class_validator_1 = require("class-validator");
function IsInEnum(enumObject, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsInEnum',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: {
                ...validationOptions,
                message: `${propertyName} allowable values: [${Object.values(enumObject)}]`,
            },
            validator: {
                validate(value) {
                    if (!value)
                        return true;
                    return Object.values(enumObject).includes(value);
                },
            },
        });
    };
}
exports.IsInEnum = IsInEnum;
//# sourceMappingURL=is-in-enum.validation.js.map