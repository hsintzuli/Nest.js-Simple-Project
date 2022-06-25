import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ScooterTypesService } from '../Service/scooter_types.service';
import { CreateScooterTypeDto } from '../dto/create-scooter_type.dto';
import { ParseIntPipe } from '@nestjs/common';

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
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.scooterTypesService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.scooterTypesService.remove(+id);
  }
}
