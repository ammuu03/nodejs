import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAnimalDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  species: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;
}
