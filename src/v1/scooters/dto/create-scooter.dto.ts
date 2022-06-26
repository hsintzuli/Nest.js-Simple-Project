import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsBoolean,
  Min,
  Max,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateScooterDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  license_plate: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  @Min(0)
  @Max(99999.99)
  mileage: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  @Min(0)
  @Max(100)
  battery_level: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  lat: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  lon: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  type_id: number;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty()
  is_reserved: boolean;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty()
  is_disabled: boolean;
}
