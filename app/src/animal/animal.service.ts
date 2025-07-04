import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { animals, } from 'src/db/schema';
import { eq } from 'drizzle-orm';
import { UpdateAnimalDto } from 'src/dto/update-animaldto';
import { CreateAnimalDto } from 'src/dto/create-animaldto';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';


@Injectable()
export class AnimalService {
  constructor(@Inject('DRIZZLE') private db: NodePgDatabase ){}
  async findAll(){
    return await this.db.select().from(animals);
  }

  async findOne(id: number) {
    const result = await this.db.select().from(animals).where(eq(animals.id, id));
    if (!result.length) {
      throw new NotFoundException(`Animal with ID ${id} not found`);
    }
    return result[0];
  }

  async create(dto: CreateAnimalDto): Promise<any> {
    const result= await this.db.insert(animals).values(dto).returning();
    return result[0]

  }

  async update(id: number, dto: UpdateAnimalDto): Promise<any> {
    const result= await this.db.update(animals).set(dto).where(eq(animals.id, id)).returning();
    if(!result.length) throw new NotFoundException('animal not found');
     return result[0];
  }

  async delete(id: number): Promise<any> {
    const existing =  await this.db.delete(animals).where(eq(animals.id, id)).returning();
    if (!existing.length) {
      throw new NotFoundException(`Animal with ID ${id} not found`);
    }
   return existing[0]
  }
}
