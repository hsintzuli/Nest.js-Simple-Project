import {
  OneToOne,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { ScooterType } from './scooter_type.entity';

@Entity()
export class Scooter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('char', { length: 8, unique: true })
  license_plate: string;

  @Column('decimal', { precision: 7, scale: 2 })
  mileage: number;

  @Column('int', { width: 3 })
  battery_level: number;

  @Column('decimal', { precision: 17, scale: 14 })
  lat: number;

  @Column('decimal', { precision: 17, scale: 14 })
  lon: number;

  @OneToOne(() => ScooterType)
  @JoinColumn()
  vehicle_type: number;

  @Column('boolean', { default: false })
  is_reserved: boolean;

  @Column('boolean', { default: false })
  is_disabled: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
