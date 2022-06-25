import { Injectable, NotFoundException } from '@nestjs/common';
import { Scooter } from 'src/entities/scooter.entity';
import { CreateScooterDto } from '../dto/create-scooter.dto';
import { UpdateScooterDto } from '../dto/update-scooter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ScootersService {
  constructor(
    @InjectRepository(Scooter)
    private scooterRepository: Repository<Scooter>,
  ) {}

  async create(createScooterDto: CreateScooterDto): Promise<Scooter> {
    return await this.scooterRepository.save(createScooterDto);
  }

  async findAll(): Promise<Scooter[]> {
    return await this.scooterRepository.find();
  }

  async findOne(id: number) {
    return await this.findScooterById(id);
  }

  async update(id: number, updateScooterDto: UpdateScooterDto) {
    const scooter = await this.findScooterById(id);
    scooter.battery_level =
      updateScooterDto.battery_level || scooter.battery_level;
    scooter.lat = updateScooterDto.lat || scooter.lat;
    scooter.lon = updateScooterDto.lon || scooter.lon;
    scooter.license_plate =
      updateScooterDto.license_plate || scooter.license_plate;
    scooter.mileage = updateScooterDto.mileage || scooter.mileage;
    scooter.vehicle_type =
      updateScooterDto.vehicle_type || scooter.vehicle_type;

    return this.scooterRepository.save(scooter);
  }

  async remove(id: number) {
    const scooter = await this.findScooterById(id);
    return await this.scooterRepository.remove(scooter);
  }

  private async findScooterById(id: number): Promise<Scooter> {
    const scooter = await this.scooterRepository.findOneBy({ id });
    if (!scooter) {
      throw new NotFoundException('Could not find the Scooter Type');
    }
    return scooter;
  }
}
