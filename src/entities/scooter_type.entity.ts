import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ScooterType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 32, unique: true })
  type_name: string;

  @Column('int', { width: 3 })
  volume_cc: number;
}
