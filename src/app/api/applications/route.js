import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export const dynamic = "force-dynamic";

// POST /api/applications — store a new application
export async function POST(request) {
  try {
    const body = await request.json();

    const required = ["first_name", "last_name", "phone_number", "email"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const result = await query(
      `INSERT INTO applications (
        first_name, last_name, phone_number, email,
        street_address, city, state_province,
        current_occupation, educational_qualification, preferred_cohort
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        body.first_name,
        body.last_name,
        body.phone_number,
        body.email,
        body.street_address ?? null,
        body.city ?? null,
        body.state_province ?? null,
        body.current_occupation ?? null,
        body.educational_qualification ?? null,
        body.preferred_cohort ?? null,
      ]
    );

    return NextResponse.json({ id: result.insertId }, { status: 201 });
  } catch (err) {
    console.error("POST /api/applications error:", err);
    return NextResponse.json({ error: "Failed to store application" }, { status: 500 });
  }
}

// GET /api/applications — fetch all applications
export async function GET() {
  try {
    const rows = await query("SELECT * FROM applications ORDER BY created_at DESC");
    return NextResponse.json({ data: rows });
  } catch (err) {
    console.error("GET /api/applications error:", err);
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 });
  }
}
