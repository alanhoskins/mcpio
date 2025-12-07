import { Context } from 'hono';
import { createClerkClient } from '@clerk/backend';
import { config } from '../config.js';

const clerk = createClerkClient({ secretKey: config.clerk.secretKey });

export async function verifyAuth(c: Context): Promise<string> {
  try {
    const authHeader = c.req.header('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('Missing or invalid authorization header');
    }

    const token = authHeader.split(' ')[1];
    const claims = await clerk.sessions.verifySession(token);

    if (!claims || !claims.userId) {
      throw new Error('Invalid token');
    }

    return claims.userId;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Clerk authentication error: ${error.message}`);
    }
    throw error;
  }
}

export async function authHandler(c: Context, next: () => Promise<void>) {
  try {
    const userId = await verifyAuth(c);
    c.set('userId', userId);
    await next();
  } catch (error) {
    return c.json({ error: error instanceof Error ? error.message : 'Authentication error' }, 401);
  }
}