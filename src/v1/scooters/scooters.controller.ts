import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ScootersService } from './scooters.service';
import { CreateScooterDto } from './dto/create-scooter.dto';
import { UpdateScooterDto } from './dto/update-scooter.dto';
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

  @Get(':license_plate')
  @ApiOkResponse({ type: Scooter, description: 'Get scooter by id' })
  @ApiBadRequestResponse({ description: 'Invalid query parameter' })
  @ApiNotFoundResponse({ description: 'Scooter not found' })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  async findOne(@Param('license_plate') license_plate: string) {
    return this.scootersService.findOne(license_plate);
  }

  @Patch(':license_plate')
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
    @Param('license_plate') license_plate: string,
    @Body() updateScooterDto: UpdateScooterDto,
  ) {
    return this.scootersService.update(license_plate, updateScooterDto);
  }

  @Delete(':license_plate')
  @ApiOkResponse({
    type: Scooter,
    description: 'Operation successfully',
  })
  @ApiBadRequestResponse({ description: 'Invalid query parameter' })
  @ApiNotFoundResponse({ description: 'Scooter not found' })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  async remove(@Param('license_plate') license_plate: string) {
    return this.scootersService.remove(license_plate);
  }
}
