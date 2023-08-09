import { maxBigInt, maxInt, maxSmallInt } from '@shared/constants';
import { registerDecorator, ValidationOptions } from 'class-validator';
import _ from 'lodash';

export function IsIntegerId(
  typeInt?: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsIntegerId',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: {
        ...validationOptions,
        message: `${propertyName} not allowable values`,
      },
      validator: {
        validate(value: number) {
          if (_.isNil(value)) {
            return true;
          }

          if (!_.isInteger(value)) {
            return false;
          }

          if (typeInt) {
            return typeInt === 'smallInt'
              ? value <= maxSmallInt
              : value <= +maxBigInt;
          }

          return value <= maxInt;
        },
      },
    });
  };
}
