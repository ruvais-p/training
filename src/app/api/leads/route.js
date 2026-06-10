import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

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

    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          full_name: body.full_name,
          phone: body.phone,
          email: body.email,
          city: body.city ?? null,
        },
      ])
      .select("id")
      .single();

    if (error) throw error;

    return NextResponse.json({ id: data?.id }, { status: 201 });
  } catch (err) {
    console.error("POST /api/leads error:", err);
    return NextResponse.json({ error: "Failed to store lead" }, { status: 500 });
  }
}

// GET /api/leads — fetch all leads
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({ data });
  } catch (err) {
    console.error("GET /api/leads error:", err);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
