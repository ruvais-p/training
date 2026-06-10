import { NextResponse } from "next/server";
import db from "@/lib/db";

export const dynamic = "force-dynamic";

// POST /api/leads — store a new lead
export async function POST(request) {
  try {
    const body = await request.json();

    const required = ["full_name", "phone", "email"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const stmt = db.prepare(`
      INSERT INTO leads (full_name, phone, email, city)
      VALUES (@full_name, @phone, @email, @city)
    `);

    const result = stmt.run({
      full_name: body.full_name,
      phone: body.phone,
      email: body.email,
      city: body.city ?? null,
    });

    return NextResponse.json({ id: result.lastInsertRowid }, { status: 201 });
  } catch (err) {
    console.error("POST /api/leads error:", err);
    return NextResponse.json({ error: "Failed to store lead" }, { status: 500 });
  }
}

// GET /api/leads — fetch all leads
export async function GET() {
  try {
    const rows = db
      .prepare("SELECT * FROM leads ORDER BY created_at DESC")
      .all();
    return NextResponse.json({ data: rows });
  } catch (err) {
    console.error("GET /api/leads error:", err);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
