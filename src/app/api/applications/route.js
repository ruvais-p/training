import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

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

    const { data, error } = await supabase
      .from("applications")
      .insert([
        {
          first_name: body.first_name,
          last_name: body.last_name,
          phone_number: body.phone_number,
          email: body.email,
          street_address: body.street_address ?? null,
          city: body.city ?? null,
          state_province: body.state_province ?? null,
          current_occupation: body.current_occupation ?? null,
          educational_qualification: body.educational_qualification ?? null,
          preferred_cohort: body.preferred_cohort ?? null,
        },
      ])
      .select("id")
      .single();

    if (error) throw error;

    return NextResponse.json({ id: data?.id }, { status: 201 });
  } catch (err) {
    console.error("POST /api/applications error:", err);
    return NextResponse.json({ error: "Failed to store application" }, { status: 500 });
  }
}

// GET /api/applications — fetch all applications
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({ data });
  } catch (err) {
    console.error("GET /api/applications error:", err);
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 });
  }
}
