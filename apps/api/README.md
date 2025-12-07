# MCPIO API

A Fastify API with Drizzle ORM for PostgreSQL database and Clerk authentication.

## Features

- Fastify API server
- Drizzle ORM for database interactions
- PostgreSQL database
- Clerk authentication
- TypeScript support

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- PostgreSQL database

### Setup

1. **Install dependencies**

```bash
pnpm install
```

2. **Environment variables**

Copy the `.env.example` file to `.env` and update with your credentials:

```bash
cp .env.example .env
```

Required environment variables:
- `DATABASE_URL`: PostgreSQL connection string
- `CLERK_SECRET_KEY`: Your Clerk secret key

3. **Generate and run migrations**

```bash
pnpm db:generate
pnpm db:migrate
```

### Development

Start the development server:

```bash
pnpm dev
```

### Production

Build and start the production server:

```bash
pnpm build
pnpm start
```

## API Routes

### Public Routes

- `GET /health` - Check API health

### Protected Routes (require Clerk authentication)

- `GET /api/me` - Get authenticated user profile
- `POST /api/users` - Create or update user
- `GET /api/projects` - Get all projects for authenticated user
- `POST /api/projects` - Create a new project
- `GET /api/projects/:id` - Get a specific project by ID

## Authentication

This API uses Clerk for authentication. You must include a valid JWT token in the Authorization header:

```
Authorization: Bearer your_jwt_token
```

## Database Schema

The database has the following tables:

- `users` - User accounts
- `projects` - User's projects

See `src/db/schema.ts` for the complete schema definition.