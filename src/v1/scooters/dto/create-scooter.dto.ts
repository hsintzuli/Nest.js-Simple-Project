import { IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class CreateScooterDto {
  @IsNotEmpty()
  @IsString()
  license_plate: string;

  @IsNotEmpty()
  @IsNumber()
  mileage: number;

  @IsNotEmpty()
  @IsNumber()
  battery_level: number;

  @IsNotEmpty()
  @IsNumber()
  lat: number;

  @IsNotEmpty()
  @IsNumber()
  lon: number;

  @IsNotEmpty()
  @IsNumber()
  type_id: number;

  @IsNotEmpty()
  @IsBoolean()
  is_reserved: boolean;

  @IsNotEmpty()
  @IsBoolean()
  is_disabled: boolean;
}
