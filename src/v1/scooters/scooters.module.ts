import { Module } from '@nestjs/common';
import { ScootersService } from './Service/scooters.service';
import { ScootersController } from './Controller/scooters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scooter } from 'src/entities/scooter.entity';
import { ScooterType } from 'src/entities/scooter_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ScooterType, Scooter])],
  controllers: [ScootersController],
  providers: [ScootersService],
})
export class ScootersModule {}
