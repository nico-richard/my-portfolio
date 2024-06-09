import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET() {
  try {
    const result = await sql`SELECT * FROM needs`;
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch needs" },
      { status: 500 }
    );
  }
}
