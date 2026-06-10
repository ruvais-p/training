This is a [Next.js](https://nextjs.org) project.

## Getting Started

### 1. Configure the database

The app stores form submissions in a **MySQL** database (any hosted provider —
PlanetScale, Aiven, Railway, etc.). Create a `.env.local` file in the project root:

```bash
# MySQL connection string
DATABASE_URL=mysql://user:pass@host:3306/dbname

# Set to "false" ONLY for a plain local MySQL without TLS.
# Defaults to TLS on, which most hosted providers require.
DATABASE_SSL=false
```

The `applications` and `leads` tables are created automatically on the first request —
no manual migration step needed.

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

This app deploys on [Vercel](https://vercel.com). Because Vercel functions run on a
read-only filesystem, data **must** live in an external database — a hosted MySQL,
not a local file.

1. Provision a hosted MySQL (e.g. PlanetScale, Railway, Aiven).
2. In **Vercel → Settings → Environment Variables**, add `DATABASE_URL` (and
   `DATABASE_SSL` if needed — leave unset to keep TLS on).
3. Deploy. Tables are created on the first form submission.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
