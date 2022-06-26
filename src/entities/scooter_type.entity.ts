import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class ScooterType {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column('varchar', { length: 32, unique: true })
  @ApiProperty()
  type_name: string;

  @Column('int', { width: 3 })
  @ApiProperty()
  volume_cc: number;
}
