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
import {
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import { Scooter } from 'src/entities/scooter.entity';

@ApiTags('Scooters')
@Controller('scooters')
export class ScootersController {
  constructor(private readonly scootersService: ScootersService) {}

  @Post()
  @ApiBody({ type: CreateScooterDto })
  @ApiCreatedResponse({
    type: Scooter,
    description: 'Operation successfully',
  })
  @ApiBadRequestResponse({
    description: 'Invalid scooter',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  async create(@Body() createScooterDto: CreateScooterDto) {
    return this.scootersService.create(createScooterDto);
  }

  @Get()
  @ApiOkResponse({ type: [Scooter], description: 'Get scooters' })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  async findAll() {
    return this.scootersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Scooter, description: 'Get scooter by id' })
  @ApiBadRequestResponse({ description: 'Invalid query parameter' })
  @ApiNotFoundResponse({ description: 'Scooter not found' })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.scootersService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateScooterDto })
  @ApiOkResponse({
    type: Scooter,
    description: 'Operation successfully',
  })
  @ApiBadRequestResponse({ description: 'Invalid query parameter' })
  @ApiNotFoundResponse({ description: 'Scooter not found' })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateScooterDto: UpdateScooterDto,
  ) {
    return this.scootersService.update(id, updateScooterDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    type: Scooter,
    description: 'Operation successfully',
  })
  @ApiBadRequestResponse({ description: 'Invalid query parameter' })
  @ApiNotFoundResponse({ description: 'Scooter not found' })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.scootersService.remove(id);
  }
}
