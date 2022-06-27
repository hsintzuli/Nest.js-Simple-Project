import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ScooterType } from './scooter_type.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Scooter {
  @PrimaryColumn('char', { length: 8 })
  @ApiProperty()
  license_plate: string;

  @Column('decimal', { precision: 7, scale: 2 })
  @ApiProperty()
  mileage: number;

  @Column('int', { width: 3 })
  @ApiProperty()
  battery_level: number;

  @Column('decimal', { precision: 17, scale: 14 })
  @ApiProperty()
  lat: number;

  @Column('decimal', { precision: 17, scale: 14 })
  @ApiProperty()
  lon: number;

  @ManyToOne(() => ScooterType, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'type_id' })
  _vehicle_type: ScooterType;

  @Column()
  @ApiProperty()
  type_id: number;

  @Column('boolean', { default: false })
  @ApiProperty()
  is_reserved: boolean;

  @Column('boolean', { default: false })
  @ApiProperty()
  is_disabled: boolean;

  @CreateDateColumn()
  @ApiProperty()
  created_at: Date;

  @UpdateDateColumn()
  @ApiProperty()
  updated_at: Date;
}
