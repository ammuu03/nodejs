import { Module } from '@nestjs/common';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import { DrizzleModule } from 'src/db/drizzle.module';

@Module({
  controllers: [AnimalController],
  providers: [AnimalService],
  imports: [DrizzleModule],
})
export class AnimalModule {}
