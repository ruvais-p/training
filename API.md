# API Documentation

Data is stored in a **MySQL** database (any hosted provider — PlanetScale, Aiven,
Railway, etc.) and accessed through the endpoints below. All responses are JSON.

Base URL (local): `http://localhost:3000`

## Configuration

Set these environment variables (locally in `.env.local`, and in the Vercel
project's **Settings → Environment Variables**):

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | yes | MySQL connection string, e.g. `mysql://user:pass@host:3306/dbname` |
| `DATABASE_SSL` | no | Set to `false` only for a plain local MySQL. Defaults to TLS on (required by most hosted providers). |

Tables (`applications`, `leads`) are created automatically on first request.

---

## Get Applications

Returns every submitted application, newest first.

```
GET /api/applications
```

**Response — `200 OK`**

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Jane",
      "last_name": "Doe",
      "phone_number": "+91888",
      "email": "jane@example.com",
      "street_address": null,
      "city": "Kochi",
      "state_province": null,
      "current_occupation": null,
      "educational_qualification": null,
      "preferred_cohort": "AI & ML",
      "created_at": "2026-06-10 15:42:05"
    }
  ]
}
```

**Errors**

| Status | Body | Meaning |
|--------|------|---------|
| `500`  | `{ "error": "Failed to fetch applications" }` | Database read failed |

**Example**

```bash
curl http://localhost:3000/api/applications
```

---

## Get Leads

Returns every captured lead (from the registration popup), newest first.

```
GET /api/leads
```

**Response — `200 OK`**

```json
{
  "data": [
    {
      "id": 1,
      "full_name": "Test User",
      "phone": "+919999999999",
      "email": "t@example.com",
      "city": "Kochi",
      "created_at": "2026-06-10 15:42:05"
    }
  ]
}
```

**Errors**

| Status | Body | Meaning |
|--------|------|---------|
| `500`  | `{ "error": "Failed to fetch leads" }` | Database read failed |

**Example**

```bash
curl http://localhost:3000/api/leads
```

---

## Notes

- `data` is always an array; it is `[]` when no rows exist.
- Rows are ordered by `created_at` descending (newest first).
- These endpoints are currently **unauthenticated** and return applicant PII — add
  an auth guard before exposing them in production.

---

## Related: store endpoints

The same routes accept `POST` to insert data (used by the site's forms).

### `POST /api/applications`

Required fields: `first_name`, `last_name`, `phone_number`, `email`.
Optional: `street_address`, `city`, `state_province`, `current_occupation`,
`educational_qualification`, `preferred_cohort`.

```bash
curl -X POST http://localhost:3000/api/applications \
  -H 'Content-Type: application/json' \
  -d '{"first_name":"Jane","last_name":"Doe","phone_number":"+91888","email":"jane@example.com"}'
```

### `POST /api/leads`

Required fields: `full_name`, `phone`, `email`. Optional: `city`.

```bash
curl -X POST http://localhost:3000/api/leads \
  -H 'Content-Type: application/json' \
  -d '{"full_name":"Test User","phone":"+919999999999","email":"t@example.com","city":"Kochi"}'
```

**Responses**

| Status | Body | Meaning |
|--------|------|---------|
| `201`  | `{ "id": 1 }` | Created; returns new row id |
| `400`  | `{ "error": "Missing required field: <name>" }` | A required field was absent |
| `500`  | `{ "error": "Failed to store ..." }` | Database write failed |
