import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ScootersService } from '../Service/scooters.service';
import { CreateScooterDto } from '../dto/create-scooter.dto';
import { UpdateScooterDto } from '../dto/update-scooter.dto';
import { ParseIntPipe } from '@nestjs/common';

@Controller('scooters')
export class ScootersController {
  constructor(private readonly scootersService: ScootersService) {}

  @Post()
  async create(@Body() createScooterDto: CreateScooterDto) {
    return this.scootersService.create(createScooterDto);
  }

  @Get()
  async findAll() {
    return this.scootersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.scootersService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateScooterDto: UpdateScooterDto,
  ) {
    return this.scootersService.update(id, updateScooterDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.scootersService.remove(id);
  }
}
