import { Module } from '@nestjs/common';

// Local files
import { ScootersModule } from './scooters/scooters.module';
import { ScooterTypesModule } from './scooter_types/scooter_types.module';

@Module({
  imports: [ScootersModule, ScooterTypesModule],
})
export class V1Module {}
