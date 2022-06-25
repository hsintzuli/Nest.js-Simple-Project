import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateScooterTypeDto {
  @IsNotEmpty()
  @IsString()
  type_name: string;

  @IsNotEmpty()
  @IsNumber()
  volume_cc: number;
}
