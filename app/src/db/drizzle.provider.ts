import { Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

const pool = new Pool({
  connectionString: 'postgres://postgres:ammu1230@localhost:5432/drizzleormdb',
});

const db = drizzle(pool, { schema });

@Module({
  providers: [
    {
      provide: 'DRIZZLE',
      useValue: db,
    },
  ],
  exports: ['DRIZZLE'],
})
export class DrizzleProviderModule {} // ✅ Renamed to avoid conflict
