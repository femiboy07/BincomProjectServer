import { MigrationInterface, QueryRunner } from "typeorm";

export class Lga1739265869938 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
await queryRunner.query(`CREATE TABLE IF NOT EXISTS \`lga\` (
\`uniqueid\` int(11) NOT NULL AUTO_INCREMENT,
\`lga_id\` int(11) NOT NULL,
\`lga_name\` varchar(50) NOT NULL,
\`state_id\` int(11) NOT NULL,
\`lga_description\` text,
\`entered_by_user\` varchar(50) NOT NULL,
\`date_entered\` datetime NOT NULL,
\`user_ip_address\` varchar(50) NOT NULL,
PRIMARY KEY (\`uniqueid\`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS lga`)
    }

}
