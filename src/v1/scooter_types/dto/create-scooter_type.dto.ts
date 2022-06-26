import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateScooterTypeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  volume_cc: number;
}
