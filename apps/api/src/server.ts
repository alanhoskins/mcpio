import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { config } from './config.js';

// Routes
import healthRoutes from './routes/health.js';
import userRoutes from './routes/users.js';
import projectRoutes from './routes/projects.js';

const app = new Hono();

// Middleware
app.use('*', logger());
app.use('*', cors({
  origin: '*', // In production, you should limit this to specific origins
}));

// Routes
healthRoutes(app);
userRoutes(app);
projectRoutes(app);

// Global error handler
app.onError((err, c) => {
  console.error('Error:', err);
  return c.json({ error: err.message || 'An unknown error occurred' }, 500);
});

serve({
  fetch: app.fetch,
  port: Number(config.server.port),
  hostname: config.server.host,
}, (info) => {
  console.log(`Server listening at http://${info.address}:${info.port}`);
});

export default app;