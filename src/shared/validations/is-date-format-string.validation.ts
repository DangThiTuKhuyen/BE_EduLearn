import { registerDecorator, ValidationOptions } from 'class-validator';
import moment from 'moment';

export function IsDateFormatString(
  dateFormat: string[],
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsDateFormatString',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: {
        message: `${propertyName} must match the following format: ${dateFormat.toString()}`,
        ...validationOptions,
      },
      validator: {
        validate(value: string) {
          return dateFormat.some((format) =>
            moment(value, format, true).isValid(),
          );
        },
      },
    });
  };
}
