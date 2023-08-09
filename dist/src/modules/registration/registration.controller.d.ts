import { SuccessOutputDto } from '@shared/dtos/success-output.dto';
import { RegistrationDateParamDto } from './dtos/registration-date-param.dto';
import { RegistrationInputDto } from './dtos/registration-input.dto';
import { RegistrationOutputDto } from './dtos/registration-output.dto';
import { RegistrationParamDto } from './dtos/registration-param.dto';
import { RegistrationsParamDto } from './dtos/registrations-param.dto';
import { UpdateRegistrationInputDto } from './dtos/update-registration-input.dto';
import { RegistrationService } from './registration.service';
export declare class RegistrationController {
    private readonly registrationService;
    constructor(registrationService: RegistrationService);
    create(input: RegistrationInputDto, param: RegistrationParamDto): Promise<SuccessOutputDto>;
    listRegistration(paramsDate: RegistrationDateParamDto): Promise<RegistrationOutputDto[]>;
    registration(param: RegistrationParamDto): Promise<RegistrationOutputDto[]>;
    findByUser(param: RegistrationParamDto): Promise<RegistrationOutputDto[]>;
    listRegistrationAccepted(paramsDate: RegistrationDateParamDto): Promise<RegistrationOutputDto[]>;
    acceptStatus(params: RegistrationsParamDto): Promise<SuccessOutputDto>;
    remove(params: RegistrationsParamDto): Promise<SuccessOutputDto>;
    update(params: RegistrationsParamDto, input: UpdateRegistrationInputDto): Promise<SuccessOutputDto>;
    accept(params: RegistrationsParamDto): Promise<SuccessOutputDto>;
}
//# sourceMappingURL=registration.controller.d.ts.map