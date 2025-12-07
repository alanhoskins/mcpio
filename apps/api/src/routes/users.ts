import { Hono } from 'hono';
import { db } from '../db/index.js';
import { users } from '../db/schema.js';
import { eq } from 'drizzle-orm';
import { authHandler } from '../middleware/auth.js';

export default function (app: Hono) {
  const userRoutes = new Hono()
    .use('*', authHandler);

  // Get authenticated user profile
  userRoutes.get('/me', async (c) => {
    const userId = c.get('userId');

    if (!userId) {
      return c.json({ error: 'Authentication required' }, 401);
    }

    const user = await db.query.users.findFirst({
      where: eq(users.clerkId, userId),
    });

    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }

    return c.json(user);
  });

  // Create or update user
  userRoutes.post('/users', async (c) => {
    const userId = c.get('userId');

    if (!userId) {
      return c.json({ error: 'Authentication required' }, 401);
    }

    const { email } = await c.req.json<{ email: string }>();

    const existingUser = await db.query.users.findFirst({
      where: eq(users.clerkId, userId),
    });

    if (existingUser) {
      // User exists, you might want to update them
      return c.json(existingUser);
    }

    // Create new user
    const newUser = await db
      .insert(users)
      .values({
        clerkId: userId,
        email,
      })
      .returning();

    return c.json(newUser[0]);
  });

  app.route('/api', userRoutes);
}
