"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRelation1667891965482 = void 0;
const commons_1 = require("../shared/helpers/commons");
class createRelation1667891965482 {
    async up(queryRunner) {
        const foreignKeys = [
            {
                keys: [
                    ['fk_registration_user_id_user', 'user_id', 'user_id', 'user'],
                    [
                        'fk_registration_vaccine_id_vaccine',
                        'vaccine_id',
                        'vaccine_id',
                        'vaccine',
                    ],
                    [
                        'fk_registration_medical_center_id_medical_center',
                        'medical_center_id',
                        'medical_center_id',
                        'medical_center',
                    ],
                    [
                        'fk_registration_disease_id_disease',
                        'disease_id',
                        'disease_id',
                        'disease',
                    ],
                ],
                table: 'registration',
            },
            {
                keys: [['fk_baby_user_id_user', 'user_id', 'user_id', 'user']],
                table: 'baby',
            },
            {
                keys: [
                    ['fk_history_user_id_user', 'user_id', 'user_id', 'user'],
                    [
                        'fk_history_vaccine_id_vaccine',
                        'vaccine_id',
                        'vaccine_id',
                        'vaccine',
                    ],
                    [
                        'fk_history_disease_id_disease',
                        'disease_id',
                        'disease_id',
                        'disease',
                    ],
                    [
                        'fk_history_medical_center_id_medical_center',
                        'medical_center_id',
                        'medical_center_id',
                        'medical_center',
                    ],
                ],
                table: 'history',
            },
            {
                keys: [
                    ['fk_share_access_user_baby_id_baby', 'baby_id', 'baby_id', 'baby'],
                ],
                table: 'share_access_user',
            },
            {
                keys: [
                    [
                        'fk_treatment_disease_id_disease',
                        'disease_id',
                        'disease_id',
                        'disease',
                    ],
                    [
                        'fk_treatment_vaccine_id_vaccine',
                        'vaccine_id',
                        'vaccine_id',
                        'vaccine',
                    ],
                ],
                table: 'treatment',
            },
            {
                keys: [
                    [
                        'fk_vaccine_detail_vaccine_id_vaccine',
                        'vaccine_id',
                        'vaccine_id',
                        'vaccine',
                    ],
                ],
                table: 'vaccine_detail',
            },
            {
                keys: [
                    ['fk_medical_record_user_id_user', 'user_id', 'user_id', 'user'],
                    [
                        'fk_medical_record_disease_id_disease',
                        'disease_id',
                        'disease_id',
                        'disease',
                    ],
                ],
                table: 'medical_record',
            },
        ];
        await (0, commons_1.createForeignKeys)(foreignKeys, queryRunner);
    }
    async down(queryRunner) {
        const foreignKeys = [
            ['registration', 'fk_registration_user_id_user'],
            ['registration', 'fk_registration_vaccine_id_vaccine'],
            ['registration', 'fk_registration_medical_center_id_medical_center'],
            ['registration', 'fk_registration_disease_id_disease'],
            ['baby', 'fk_baby_user_id_user'],
            ['history', 'fk_history_user_id_user'],
            ['history', 'fk_history_vaccine_id_vaccine'],
            ['share_access_user', 'fk_share_access_user_baby_id_baby'],
            ['treatment', 'fk_treatment_disease_id_disease'],
            ['treatment', 'fk_treatment_vaccine_id_vaccine'],
            ['vaccine_detail', 'fk_vaccine_detail_vaccine_id_vaccine'],
            ['medical_record', 'fk_medical_record_user_id_user'],
            ['medical_record', 'fk_medical_record_disease_id_disease'],
        ];
        await (0, commons_1.dropForeignKeys)(foreignKeys, queryRunner);
    }
}
exports.createRelation1667891965482 = createRelation1667891965482;
//# sourceMappingURL=1667891965482-createRelation.js.map