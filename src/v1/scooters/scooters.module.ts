import { Module } from '@nestjs/common';
import { ScootersService } from './Service/scooters.service';
import { ScootersController } from './Controller/scooters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scooter } from 'src/entities/scooter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Scooter])],
  controllers: [ScootersController],
  providers: [ScootersService],
})
export class ScootersModule {}
