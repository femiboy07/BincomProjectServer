import { MigrationInterface, QueryRunner } from "typeorm";

export class Announcedpollingunitresults1739246511827 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
await queryRunner.query(`CREATE TABLE IF NOT EXISTS \`announced_pu_results\` (
\`result_id\` int(11) NOT NULL AUTO_INCREMENT,
\`polling_unit_uniqueid\` varchar(50) NOT NULL,
\`party_abbreviation\` char(4) NOT NULL,
\`party_score\` int(11) NOT NULL,
\`entered_by_user\` varchar(50) NOT NULL,
\`date_entered\` datetime NOT NULL,
\`user_ip_address\` varchar(50) NOT NULL,
PRIMARY KEY (\`result_id\`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=261 ;`)
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS announced_pu_results`)
    }

}
