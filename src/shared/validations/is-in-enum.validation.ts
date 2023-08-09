import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsInEnum(
  enumObject: any,
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsInEnum',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: {
        ...validationOptions,
        message: `${propertyName} allowable values: [${Object.values(
          enumObject,
        )}]`,
      },
      validator: {
        validate(value: string) {
          if (!value) return true;

          return Object.values(enumObject).includes(value);
        },
      },
    });
  };
}
