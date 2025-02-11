import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'lga',
  engine: 'InnoDB',
})
export class Lga {
  @PrimaryGeneratedColumn({ name: 'uniqueid' })
  uniqueId!: number;

  @Column({ name: 'lga_id', type: 'int' })
  lgaId!: number;

  @Column({ name: 'lga_name', type: 'varchar', length: 50 })
  lgaName!: string;

  // Even though the SQL shows `int(50)`, MySQL’s int is always 4 bytes.
  @Column({ name: 'state_id', type: 'int' })
  stateId!: number;

  @Column({ name: 'lga_description', type: 'text', nullable: true })
  lgaDescription!: string | null;

  @Column({ name: 'entered_by_user', type: 'varchar', length: 50 })
  enteredByUser!: string;

  @Column({ name: 'date_entered', type: 'datetime' })
  dateEntered!: Date;

  @Column({ name: 'user_ip_address', type: 'varchar', length: 50 })
  userIpAddress!: string;
}