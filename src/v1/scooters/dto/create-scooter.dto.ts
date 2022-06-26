import { IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateScooterDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  license_plate: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  mileage: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
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
