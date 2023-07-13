/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  readonly brand: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  readonly model: string;
}
