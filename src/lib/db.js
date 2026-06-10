import mysql from "mysql2/promise";

// A single connection string drives everything, e.g.
//   mysql://user:pass@host:3306/dbname
// On Vercel set DATABASE_URL in the project's Environment Variables.
// Most hosted MySQL providers (PlanetScale, Aiven, Railway) require TLS;
// set DATABASE_SSL=false only for a plain local MySQL during development.
const globalForDb = globalThis;

function createPool() {
  const uri = process.env.DATABASE_URL;
  if (!uri) {
    throw new Error("DATABASE_URL is not set");
  }

  return mysql.createPool({
    uri,
    waitForConnections: true,
    connectionLimit: 5,
    // Keep the pool small — serverless functions each hold their own pool.
    ssl:
      process.env.DATABASE_SSL === "false"
        ? undefined
        : { rejectUnauthorized: true },
  });
}

// Lazily build (and cache) the pool so `next build` doesn't need DATABASE_URL.
// The pool is reused across hot-reloads (dev) and warm invocations (serverless).
function getPool() {
  if (!globalForDb.__mysqlPool) {
    globalForDb.__mysqlPool = createPool();
  }
  return globalForDb.__mysqlPool;
}

async function ensureSchema(pool) {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS applications (
      id INT AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      phone_number VARCHAR(50) NOT NULL,
      email VARCHAR(255) NOT NULL,
      street_address TEXT,
      city VARCHAR(255),
      state_province VARCHAR(255),
      current_occupation VARCHAR(255),
      educational_qualification VARCHAR(255),
      preferred_cohort VARCHAR(255),
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id INT AUTO_INCREMENT PRIMARY KEY,
      full_name VARCHAR(255) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      email VARCHAR(255) NOT NULL,
      city VARCHAR(255),
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

// Run schema setup once per process, not on every request.
function schemaReady(pool) {
  if (!globalForDb.__schemaReady) {
    globalForDb.__schemaReady = ensureSchema(pool);
  }
  return globalForDb.__schemaReady;
}

// Run a parameterized query (`?` placeholders). Returns the rows / result.
export async function query(sql, params = []) {
  const pool = getPool();
  await schemaReady(pool);
  const [rows] = await pool.query(sql, params);
  return rows;
}
