import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iain's 3rd Birthday & Gender Reveal 🎉",
  description:
    "Join us for Iain's 3rd birthday party and gender reveal at Golden Gardens Park! July 11, 2026 — RSVP now.",
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
