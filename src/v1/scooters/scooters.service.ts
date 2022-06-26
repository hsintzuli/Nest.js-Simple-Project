import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Scooter } from 'src/entities/scooter.entity';
import { CreateScooterDto } from './dto/create-scooter.dto';
import { UpdateScooterDto } from './dto/update-scooter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScooterType } from 'src/entities/scooter_type.entity';
import { QueryScooterDto } from './dto/query-scooter.dto';

@Injectable()
export class ScootersService {
  constructor(
    @InjectRepository(Scooter)
    private scooterRepository: Repository<Scooter>,
    @InjectRepository(ScooterType)
    private scooterTypesRepository: Repository<ScooterType>,
  ) {}

  async create(createScooterDto: CreateScooterDto): Promise<Scooter> {
    const vehicle_type = await this.scooterTypesRepository.findOneBy({
      id: createScooterDto.type_id,
    });
    if (!vehicle_type) {
      throw new BadRequestException('Invalid vehicle type');
    }
    const exitedScooter = await this.scooterRepository.findOneBy({
      license_plate: createScooterDto.license_plate,
    });
    if (exitedScooter) {
      throw new BadRequestException('Duplicate license plate');
    }
    return await this.scooterRepository.save(createScooterDto);
  }

  async findAll(): Promise<Scooter[]> {
    return await this.scooterRepository.find();
  }

  async findOne(license_plate: string): Promise<Scooter> {
    return await this.findScooterByPK(license_plate);
  }

  async findAvaliableScooters(isAvaliable: boolean) {
    const condition = !isAvaliable;
    return await this.scooterRepository.find({
      where: { is_reserved: condition, is_disabled: condition },
    });
  }

  async update(license_plate: string, updateScooterDto: UpdateScooterDto) {
    const scooter = await this.findScooterByPK(license_plate);
    scooter.battery_level =
      updateScooterDto.battery_level || scooter.battery_level;
    scooter.lat = updateScooterDto.lat || scooter.lat;
    scooter.lon = updateScooterDto.lon || scooter.lon;
    scooter.license_plate =
      updateScooterDto.license_plate || scooter.license_plate;
    scooter.mileage = updateScooterDto.mileage || scooter.mileage;
    scooter.type_id = updateScooterDto.type_id || scooter.type_id;

    return this.scooterRepository.save(scooter);
  }

  async remove(license_plate: string) {
    const scooter = await this.findScooterByPK(license_plate);
    return await this.scooterRepository.remove(scooter);
  }

  private async findScooterByPK(license_plate: string): Promise<Scooter> {
    const scooter = await this.scooterRepository.findOneBy({ license_plate });
    if (!scooter) {
      throw new NotFoundException('Could not find the scooter');
    }
    return scooter;
  }
}
