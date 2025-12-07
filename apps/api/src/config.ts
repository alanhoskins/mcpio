import dotenv from 'dotenv';

dotenv.config();

export const config = {
  server: {
    port: process.env.PORT || 3001,
    host: process.env.HOST || '0.0.0.0',
  },
  database: {
    url: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/mcpio',
  },
  clerk: {
    secretKey: process.env.CLERK_SECRET_KEY || '',
  },
};
