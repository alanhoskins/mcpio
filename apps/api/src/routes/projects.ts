import { Hono } from 'hono';
import { db } from '../db/index.js';
import { projects } from '../db/schema.js';
import { authHandler } from '../middleware/auth.js';
import { eq } from 'drizzle-orm';

export default function (app: Hono) {
  const projectRoutes = new Hono()
    .use('*', authHandler);

  // Get all projects for the authenticated user
  projectRoutes.get('/projects', async (c) => {
    const userId = c.get('userId');
    
    if (!userId) {
      return c.json({ error: 'Authentication required' }, 401);
    }

    // Lookup user by clerk ID in your database
    // This is a simplified example - you'd need to find your DB user first
    const result = await db.query.projects.findMany({
      where: eq(projects.userId, 1), // This should be the actual user ID from your database
    });

    return c.json(result);
  });

  // Create a new project
  projectRoutes.post('/projects', async (c) => {
    const userId = c.get('userId');
    
    if (!userId) {
      return c.json({ error: 'Authentication required' }, 401);
    }

    const { name, description } = await c.req.json<{ 
      name: string; 
      description?: string;
    }>();

    // Lookup user by clerk ID in your database
    // This is a simplified example - you'd need to find your DB user first
    const newProject = await db
      .insert(projects)
      .values({
        name,
        description,
        userId: 1, // This should be the actual user ID from your database
      })
      .returning();

    return c.json(newProject[0]);
  });

  // Get a specific project by ID
  projectRoutes.get('/projects/:id', async (c) => {
    const userId = c.get('userId');
    
    if (!userId) {
      return c.json({ error: 'Authentication required' }, 401);
    }

    const id = parseInt(c.req.param('id'), 10);

    const project = await db.query.projects.findFirst({
      where: eq(projects.id, id),
    });

    if (!project) {
      return c.json({ error: 'Project not found' }, 404);
    }

    return c.json(project);
  });

  app.route('/api', projectRoutes);
}