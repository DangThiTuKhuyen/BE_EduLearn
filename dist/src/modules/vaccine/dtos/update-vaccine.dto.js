"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVaccineDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_vaccine_dto_1 = require("./create-vaccine.dto");
class UpdateVaccineDto extends (0, mapped_types_1.PartialType)(create_vaccine_dto_1.CreateVaccineDto) {
}
exports.UpdateVaccineDto = UpdateVaccineDto;
//# sourceMappingURL=update-vaccine.dto.js.map