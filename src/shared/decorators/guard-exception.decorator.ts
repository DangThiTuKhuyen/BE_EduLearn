import { SetMetadata } from '@nestjs/common';
import { GuardEnum } from '@shared/constants/enum.constant';

export const GuardsException = (guards: GuardEnum[]) =>
  SetMetadata('GuardsException', guards);
