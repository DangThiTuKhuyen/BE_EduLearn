import { SuccessOutputDto } from '@shared/dtos/success-output.dto';
import { NotificationOutputDto } from './dtos/notification-output.dto';
import { NotificationParamDto } from './dtos/notification-param.dto';
import { UpdateNotificationInput } from './dtos/update-notification-input.dto';
import { NotificationRepository } from './notification.repository';
export declare class NotificationService {
    private readonly repository;
    constructor(repository: NotificationRepository);
    findAll(param: NotificationParamDto): Promise<NotificationOutputDto[]>;
    update(input: UpdateNotificationInput): Promise<SuccessOutputDto>;
}
//# sourceMappingURL=notification.service.d.ts.map