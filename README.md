This is a [Next.js](https://nextjs.org) project.

## Getting Started

### 1. Configure the database

The app stores form submissions in **Supabase** (Postgres). The API routes run
server-side and use the **service-role key**, which bypasses Row Level Security so
they can read and write while the tables stay locked down against public access.

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Server-only secret — bypasses RLS. Never prefix with NEXT_PUBLIC.
# Supabase Dashboard -> Project Settings -> API -> "service_role" secret.
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

The `applications` and `leads` tables must exist in your Supabase project with the
columns used by the API routes (see [`API.md`](./API.md)).

### 2. Run the development server

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API

The site captures data through these routes (full reference in [`API.md`](./API.md)):

| Method | Endpoint | Purpose |
|--------|----------|---------|
| `POST` | `/api/applications` | Store an application (apply form) |
| `GET`  | `/api/applications` | Fetch all applications |
| `POST` | `/api/leads` | Store a lead (registration popup) |
| `GET`  | `/api/leads` | Fetch all leads |

## Deploy on Vercel

This app deploys on [Vercel](https://vercel.com). Supabase is a hosted service, so it
works on Vercel without any extra infrastructure.

In **Vercel → Settings → Environment Variables**, add all three variables from
`.env.local` (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
`SUPABASE_SERVICE_ROLE_KEY`), then **redeploy** — env vars only apply to deployments
created after they're added.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
