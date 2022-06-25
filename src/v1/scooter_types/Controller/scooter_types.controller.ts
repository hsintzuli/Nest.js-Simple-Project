import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ScooterTypesService } from '../scooter_types.service';
import { CreateScooterTypeDto } from '../dto/create-scooter_type.dto';

@Controller('scooter-types')
export class ScooterTypesController {
  constructor(private readonly scooterTypesService: ScooterTypesService) {}

  @Post()
  async create(@Body() createScooterTypeDto: CreateScooterTypeDto) {
    return await this.scooterTypesService.create(createScooterTypeDto);
  }

  @Get()
  async findAll() {
    return await this.scooterTypesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.scooterTypesService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.scooterTypesService.remove(+id);
  }
}
