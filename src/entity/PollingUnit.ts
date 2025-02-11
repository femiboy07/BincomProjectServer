import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity({
    name: 'polling_unit',
    engine: 'InnoDB'
  })
  export class PollingUnit {
    @PrimaryGeneratedColumn({ name: 'uniqueid' })
    uniqueId!: number;
  
    @Column({ name: 'polling_unit_id', type: 'int' })
    pollingUnitId!: number;
  
    @Column({ name: 'ward_id', type: 'int' })
    wardId!: number;
  
    @Column({ name: 'lga_id', type: 'int' })
    lgaId!: number;
  
    @Column({ name: 'uniquewardid', type: 'int', nullable: true })
    uniqueWardId!: number | null;
  
    @Column({ name: 'polling_unit_number', type: 'varchar', length: 50, nullable: true })
    pollingUnitNumber!: string | null;
  
    @Column({ name: 'polling_unit_name', type: 'varchar', length: 50, nullable: true })
    pollingUnitName!: string | null;
  
    @Column({ name: 'polling_unit_description', type: 'text', nullable: true })
    pollingUnitDescription!: string | null;
  
    @Column({ name: 'lat', type: 'varchar', length: 255, nullable: true })
    lat!: string | null;
  
    @Column({ name: 'long', type: 'varchar', length: 255, nullable: true })
    long!: string | null;
  
    @Column({ name: 'entered_by_user', type: 'varchar', length: 50, nullable: true })
    enteredByUser!: string | null;
  
    @Column({ name: 'date_entered', type: 'datetime', nullable: true })
    dateEntered!: Date | null;
  
    @Column({ name: 'user_ip_address', type: 'varchar', length: 50, nullable: true })
    userIpAddress!: string | null;
  }