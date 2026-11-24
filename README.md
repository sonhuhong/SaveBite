# SaveBite

SaveBite is a food-waste reduction platform built as a pnpm/Turborepo monorepo. It connects food merchants with customers through discounted surplus food and mystery boxes.

## Structure

- `apps/api`: NestJS REST API
- `apps/web`: Next.js App Router portal
- `apps/mobile`: Expo React Native app
- `packages/shared`: shared TypeScript contracts
- `packages/config-typescript`: shared TypeScript base configuration
- `packages/config-eslint`: shared ESLint baseline
- `docker`: local PostgreSQL/PostGIS and Redis services

## Prerequisites

- Node.js 20 LTS or newer
- pnpm 9 (`corepack enable` or install pnpm globally)
- Docker Compose or Podman Compose

The current host does not have Node.js, npm, pnpm, or Docker installed, so install those prerequisites before running the commands below.

## Getting started

```bash
pnpm install
cp .env.example .env
docker compose -f docker/docker-compose.yml up -d
pnpm dev
```

On Fedora with the installed rootless Podman setup, use `podman-compose` in place
of `docker compose`:

```bash
podman-compose -f docker/docker-compose.yml up -d
```

The API listens on `http://localhost:3000`; the web portal listens on `http://localhost:3001`.

## Development commands

```bash
pnpm typecheck
pnpm build
pnpm lint
```

Database access and Redis-based order locking should be implemented in the API after the initial domain modules and persistence choice (Prisma or TypeORM) are agreed.