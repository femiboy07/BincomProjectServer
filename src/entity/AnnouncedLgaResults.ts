import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
  name: "announced_lga_results",
  engine: "InnoDB"
})
export class AnnouncedLgaResult {
  @PrimaryGeneratedColumn({ name: "result_id" })
  resultId!: number;

  @Column({ name: "lga_name", type: "varchar", length: 50 })
  lgaName!: string;

  @Column({ name: "party_abbreviation", type: "char", length: 4 })
  partyAbbreviation!: string;

  @Column({ name: "party_score", type: "int" })
  partyScore!: number;

  @Column({ name: "entered_by_user", type: "varchar", length: 50 })
  enteredByUser!: string;

  @Column({ name: "date_entered", type: "datetime" })
  dateEntered!: Date;

  @Column({ name: "user_ip_address", type: "varchar", length: 50 })
  userIpAddress!: string;
}