/// <reference types="node" />
import 'dotenv/config';

// Using a direct connection string to bypass the process.env error
const CONNECTION_STRING = 'postgres://postgres:postgres@localhost:5432/mcpio';

export default {
  schema: './src/db/schema.ts',
  out: './migrations',
  connectionString: CONNECTION_STRING,
};
