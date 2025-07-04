import { Module } from '@nestjs/common';
import { AnimalService } from '../animal/animal.service';
import { AnimalController } from '../animal/animal.controller';
import { DrizzleProviderModule } from './drizzle.provider'; // ✅ updated name

@Module({
  imports: [DrizzleProviderModule], // ✅ only one Drizzle module
  providers: [AnimalService],
  controllers: [AnimalController],
  exports: [DrizzleProviderModule],
})
export class DrizzleModule {} // ✅ only one module with this name
