import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';


export const animals = pgTable('animals', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  species: text('species').notNull(),
  age: integer('age').notNull(),
});

