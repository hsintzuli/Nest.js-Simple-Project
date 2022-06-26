import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ScooterTypesService } from '../Service/scooter_types.service';
import { CreateScooterTypeDto } from '../dto/create-scooter_type.dto';
import { ParseIntPipe } from '@nestjs/common';
import { ScooterType } from 'src/entities/scooter_type.entity';
import {
  ApiTags,
  ApiBody,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';

@ApiTags('Scooter-Types')
@Controller('scooter-types')
export class ScooterTypesController {
  constructor(private readonly scooterTypesService: ScooterTypesService) {}

  @Post()
  @ApiBody({ type: CreateScooterTypeDto })
  @ApiCreatedResponse({
    type: ScooterType,
    description: 'Operation successfully',
  })
  @ApiBadRequestResponse({
    description: 'Invalid scooter type',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  async create(@Body() createScooterTypeDto: CreateScooterTypeDto) {
    return await this.scooterTypesService.create(createScooterTypeDto);
  }

  @Get()
  @ApiOkResponse({
    type: [ScooterType],
    description: 'Get scooter types',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  async findAll() {
    return await this.scooterTypesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    type: ScooterType,
    description: 'Get scooter type by id',
  })
  @ApiBadRequestResponse({ description: 'Invalid query parameters' })
  @ApiNotFoundResponse({ description: 'Scooter type not found' })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.scooterTypesService.findOne(id);
  }

  @Delete(':id')
  @ApiOkResponse({
    type: ScooterType,
    description: 'Successfully delete',
  })
  @ApiBadRequestResponse({ description: 'Invalid query parameters' })
  @ApiNotFoundResponse({ description: 'Scooter type not found' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.scooterTypesService.remove(id);
  }
}
