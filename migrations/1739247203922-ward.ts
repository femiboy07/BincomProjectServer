import { MigrationInterface, QueryRunner } from "typeorm";

export class Ward1739247203922 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.query(`CREATE TABLE IF NOT EXISTS \`ward\` (
\`uniqueid\` int(11) NOT NULL AUTO_INCREMENT,
\`ward_id\` int(11) NOT NULL,
\`ward_name\` varchar(50) NOT NULL,
\`lga_id\` int(11) NOT NULL,
\`ward_description\` text,
\`entered_by_user\` varchar(50) NOT NULL,
\`date_entered\` datetime NOT NULL,
\`user_ip_address\` varchar(50) NOT NULL,
PRIMARY KEY (\`uniqueid\`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=264 ;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXIST ward`)
    }

}
