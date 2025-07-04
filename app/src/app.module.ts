import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './animal/animal.module';
import { DrizzleModule } from './db/drizzle.module';
import { AnimalService } from './animal/animal.service';
import { AnimalController } from './animal/animal.controller';

@Module({
  imports: [AnimalModule, DrizzleModule],
  controllers: [AppController, AnimalController],
  providers: [AppService,AnimalService],
})
export class AppModule {}
