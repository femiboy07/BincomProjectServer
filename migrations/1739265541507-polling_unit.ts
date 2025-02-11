import { MigrationInterface, QueryRunner } from "typeorm";

export class PollingUnit1739265541507 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS \`polling_unit\` (
        \`uniqueid\` int(11) NOT NULL AUTO_INCREMENT,
        \`polling_unit_id\` int(11) NOT NULL,
        \`ward_id\` int(11) NOT NULL,
        \`lga_id\` int(11) NOT NULL,
        \`uniquewardid\` int(11) DEFAULT NULL,
        \`polling_unit_number\` varchar(50) DEFAULT NULL,
        \`polling_unit_name\` varchar(50) DEFAULT NULL,
        \`polling_unit_description\` text,
        \`lat\` varchar(255) DEFAULT NULL,
        \`long\` varchar(255) DEFAULT NULL,
        \`entered_by_user\` varchar(50) DEFAULT NULL,
        \`date_entered\` datetime DEFAULT NULL,
        \`user_ip_address\` varchar(50) DEFAULT NULL,
        PRIMARY KEY (\`uniqueid\`)
        ) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=280 ;`)
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.query(`DROP TABLE IF EXISTS polling_unit`)
    }


}
