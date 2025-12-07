import { Hono } from 'hono';

export default function (app: Hono) {
  app.get('/health', (c) => {
    return c.json({ status: 'ok', timestamp: new Date().toISOString() });
  });
}