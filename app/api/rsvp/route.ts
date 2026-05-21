import { NextRequest, NextResponse } from "next/server";
import { appendRows } from "@/lib/googleSheets";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, guestCount, dietaryNotes } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    await appendRows("RSVPs", "A:F", [
      [timestamp, name, email, phone || "", String(guestCount || 1), dietaryNotes || ""],
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("RSVP error:", error);
    return NextResponse.json(
      { error: "Failed to save RSVP. Please try again." },
      { status: 500 }
    );
  }
}
