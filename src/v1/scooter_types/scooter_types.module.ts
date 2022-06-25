import { Module } from '@nestjs/common';
import { ScooterTypesService } from './Service/scooter_types.service';
import { ScooterTypesController } from './Controller/scooter_types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScooterType } from 'src/entities/scooter_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ScooterType])],
  controllers: [ScooterTypesController],
  providers: [ScooterTypesService],
})
export class ScooterTypesModule {}
