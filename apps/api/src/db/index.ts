import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema.js';
import { config } from '../config.js';

// Create the connection
const client = postgres(config.database.url);

// Create the db instance
export const db = drizzle(client, { schema });
