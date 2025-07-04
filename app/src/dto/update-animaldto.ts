import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalDto } from './create-animaldto';

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {}
