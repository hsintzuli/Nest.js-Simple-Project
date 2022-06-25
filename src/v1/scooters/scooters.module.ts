import { Module } from '@nestjs/common';
import { ScootersService } from './Service/scooters.service';
import { ScootersController } from './Controller/scooters.controller';

@Module({
  controllers: [ScootersController],
  providers: [ScootersService],
})
export class ScootersModule {}
