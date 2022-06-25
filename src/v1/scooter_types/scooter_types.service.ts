import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateScooterTypeDto } from './dto/create-scooter_type.dto';
import { Repository } from 'typeorm';
import { ScooterType } from 'src/entities/scooter_type.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ScooterTypesService {
  constructor(
    @InjectRepository(ScooterType)
    private scooterTypeRepository: Repository<ScooterType>,
  ) {}

  async create(
    createScooterTypeDto: CreateScooterTypeDto,
  ): Promise<ScooterType> {
    return await this.scooterTypeRepository.save(createScooterTypeDto);
  }

  async findAll(): Promise<ScooterType[]> {
    return await this.scooterTypeRepository.find();
  }

  async findOne(id: number): Promise<ScooterType> {
    return await this.findScooterTypeById(id);
  }

  async remove(id: number): Promise<ScooterType> {
    return await this.scooterTypeRepository.findOneBy({ id });
  }

  private async findScooterTypeById(id: number): Promise<ScooterType> {
    const scooterType = await this.scooterTypeRepository.findOneBy({ id });
    if (!scooterType) {
      throw new NotFoundException('Could not find the Scooter Type');
    }
    return scooterType;
  }
}
