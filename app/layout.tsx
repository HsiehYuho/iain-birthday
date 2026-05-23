import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1st Party, 2nd Baby, 3rd Birthday! 🎉",
  description:
    "Join us for Iain's 3rd birthday — we're welcoming the second! Come find out and place your bet! Golden Gardens Park, July 12, 2026 — RSVP now.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-sand-50 text-gray-800 antialiased">{children}</body>
    </html>
  );
}
