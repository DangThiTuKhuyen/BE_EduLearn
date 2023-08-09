import { SuccessOutputDto } from '@shared/dtos/success-output.dto';
import { NotificationOutputDto } from './dtos/notification-output.dto';
import { NotificationParamDto } from './dtos/notification-param.dto';
import { UpdateNotificationInput } from './dtos/update-notification-input.dto';
import { NotificationService } from './notification.service';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    findByUser(param: NotificationParamDto): Promise<NotificationOutputDto[]>;
    update(input: UpdateNotificationInput): Promise<SuccessOutputDto>;
}
//# sourceMappingURL=notification.controller.d.ts.map