import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

// Store the SQLite file under <project>/data so it persists across restarts.
const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, "training.db");

// Reuse the connection across hot-reloads in development.
const globalForDb = globalThis;
const db = globalForDb.__sqliteDb ?? new Database(dbPath);
globalForDb.__sqliteDb = db;

db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    email TEXT NOT NULL,
    street_address TEXT,
    city TEXT,
    state_province TEXT,
    current_occupation TEXT,
    educational_qualification TEXT,
    preferred_cohort TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    city TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

export default db;
