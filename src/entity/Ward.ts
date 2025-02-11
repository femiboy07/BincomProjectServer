import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'ward',
  engine: 'InnoDB',
})
export class Ward {
  @PrimaryGeneratedColumn({ name: 'uniqueid' })
  uniqueId!: number;

  @Column({ name: 'ward_id', type: 'int' })
  wardId!: number;

  @Column({ name: 'ward_name', type: 'varchar', length: 50 })
  wardName!: string;

  @Column({ name: 'lga_id', type: 'int' })
  lgaId!: number;

  @Column({ name: 'ward_description', type: 'text', nullable: true })
  wardDescription!: string | null;

  @Column({ name: 'entered_by_user', type: 'varchar', length: 50 })
  enteredByUser!: string;

  @Column({ name: 'date_entered', type: 'datetime' })
  dateEntered!: Date;

  @Column({ name: 'user_ip_address', type: 'varchar', length: 50 })
  userIpAddress!: string;
}