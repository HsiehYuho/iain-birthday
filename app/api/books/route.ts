import { NextRequest, NextResponse } from "next/server";
import { getSheetData, appendRows } from "@/lib/googleSheets";
import { BOOKS } from "@/lib/books";

// GET — fetch all claims
export async function GET() {
  try {
    const rows = await getSheetData("BookClaims", "A2:D");
    const claims = rows.map((row) => ({
      bookId: parseInt(row[0], 10),
      bookTitle: row[1] || "",
      claimedBy: row[2] || "",
      claimedAt: row[3] || "",
    }));
    return NextResponse.json({ claims });
  } catch (error) {
    console.error("Fetch claims error:", error);
    // Return empty claims if sheet doesn't exist yet
    return NextResponse.json({ claims: [] });
  }
}

// POST — claim a book
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { bookId, claimedBy } = body;

    if (!bookId || !claimedBy) {
      return NextResponse.json(
        { error: "bookId and claimedBy are required." },
        { status: 400 }
      );
    }

    // Check if already claimed
    const rows = await getSheetData("BookClaims", "A2:D");
    const alreadyClaimed = rows.some(
      (row) => parseInt(row[0], 10) === bookId
    );

    if (alreadyClaimed) {
      return NextResponse.json(
        { error: "This book has already been claimed!" },
        { status: 409 }
      );
    }

    const book = BOOKS.find((b) => b.id === bookId);
    const bookTitle = book?.title || `Book #${bookId}`;
    const timestamp = new Date().toISOString();

    await appendRows("BookClaims", "A:D", [
      [String(bookId), bookTitle, claimedBy, timestamp],
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Claim book error:", error);
    return NextResponse.json(
      { error: "Failed to claim book. Please try again." },
      { status: 500 }
    );
  }
}
