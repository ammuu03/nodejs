import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from 'src/dto/create-animaldto';
import { UpdateAnimalDto } from 'src/dto/update-animaldto';

@Controller('animals')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get()
  findAll() {
    return this.animalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalService.findOne(Number(+id));
  }

  @Post()
  create(@Body() dto: CreateAnimalDto) {
    return this.animalService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAnimalDto) {
    return this.animalService.update(Number(id), dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.animalService.delete(Number(+id));
  }
}
