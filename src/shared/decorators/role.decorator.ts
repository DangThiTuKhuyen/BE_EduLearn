import { SetMetadata } from '@nestjs/common';
import { RoleValue } from '@shared/constants/enum.constant';

export const Roles = (roles: RoleValue[]) => SetMetadata('Roles', roles);
