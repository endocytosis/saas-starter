import { drizzle, type PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import dotenv from 'dotenv';

dotenv.config();

let connection: ReturnType<typeof postgres> | undefined;
let database: PostgresJsDatabase<typeof schema> | undefined;

export function getClient() {
  if (!connection) {
    if (!process.env.POSTGRES_URL) {
      throw new Error('POSTGRES_URL environment variable is not set');
    }
    connection = postgres(process.env.POSTGRES_URL);
  }
  return connection;
}

// Connecting eagerly would crash every route, including pages that never touch
// Postgres, whenever POSTGRES_URL is absent.
export const db = new Proxy({} as PostgresJsDatabase<typeof schema>, {
  get(_target, property) {
    if (!database) {
      database = drizzle(getClient(), { schema });
    }
    return database[property as keyof PostgresJsDatabase<typeof schema>];
  }
});
