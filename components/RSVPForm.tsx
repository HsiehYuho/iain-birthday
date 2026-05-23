"use client";

import { useState } from "react";

export default function RSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [dietaryNotes, setDietaryNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          guestCount,
          dietaryNotes: dietaryNotes.trim(),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => null);
        setError(data?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <section id="rsvp" className="py-16 sm:py-24 bg-ocean-50">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-ocean-100">
            <span className="text-6xl block mb-4">🎉</span>
            <h2 className="text-2xl font-serif font-bold text-sand-900 mb-3">
              You&apos;re All Set!
            </h2>
            <p className="text-sand-600 mb-2">
              Thanks, <span className="font-semibold text-sand-800">{name}</span>!
              We can&apos;t wait to celebrate with you and your{" "}
              {guestCount > 1 ? `${guestCount - 1} guest${guestCount > 2 ? "s" : ""}` : "crew"}!
            </p>
            <p className="text-sand-500 text-sm mt-4">
              📅 Sunday, July 12 · 3–7 PM · Golden Gardens Park
            </p>
            <div className="mt-6">
              <a
                href="#registry"
                className="inline-block bg-ocean-500 hover:bg-ocean-600 text-white font-medium px-6 py-2.5 rounded-full transition-colors"
              >
                📚 Browse the Book Registry
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-16 sm:py-24 bg-ocean-50">
      <div className="max-w-lg mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sand-900 text-center mb-3">
          RSVP
        </h2>
        <p className="text-sand-500 text-center mb-8">
          Let us know you&apos;re coming! We&apos;d love to see you there.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-ocean-100 space-y-5"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-sand-700 mb-1.5">
              Your Name <span className="text-coral-500">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              className="w-full px-4 py-2.5 border border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-300 focus:border-ocean-300 bg-sand-50 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-sand-700 mb-1.5">
              Email <span className="text-coral-500">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
              className="w-full px-4 py-2.5 border border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-300 focus:border-ocean-300 bg-sand-50 transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-sand-700 mb-1.5">
              Phone <span className="text-sand-400 text-xs">(optional)</span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 123-4567"
              className="w-full px-4 py-2.5 border border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-300 focus:border-ocean-300 bg-sand-50 transition"
            />
          </div>

          {/* Guest count */}
          <div>
            <label className="block text-sm font-medium text-sand-700 mb-1.5">
              Number of Guests <span className="text-sand-400 text-xs">(including yourself)</span>
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                className="w-10 h-10 rounded-xl bg-sand-100 hover:bg-sand-200 text-sand-700 font-bold text-xl transition flex items-center justify-center"
              >
                −
              </button>
              <span className="w-12 text-center text-xl font-bold text-sand-900 tabular-nums">
                {guestCount}
              </span>
              <button
                type="button"
                onClick={() => setGuestCount(Math.min(20, guestCount + 1))}
                className="w-10 h-10 rounded-xl bg-sand-100 hover:bg-sand-200 text-sand-700 font-bold text-xl transition flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>

          {/* Dietary notes */}
          <div>
            <label className="block text-sm font-medium text-sand-700 mb-1.5">
              Dietary Restrictions / Notes{" "}
              <span className="text-sand-400 text-xs">(optional)</span>
            </label>
            <textarea
              value={dietaryNotes}
              onChange={(e) => setDietaryNotes(e.target.value)}
              rows={3}
              placeholder="Any allergies or dietary needs we should know about?"
              className="w-full px-4 py-2.5 border border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-300 focus:border-ocean-300 bg-sand-50 transition resize-none"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="bg-coral-50 border border-coral-200 rounded-xl p-3 text-coral-700 text-sm">
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting || !name.trim() || !email.trim()}
            className="w-full py-3 bg-coral-500 hover:bg-coral-600 disabled:bg-sand-300 text-white font-bold rounded-xl transition-colors text-lg shadow-sm"
          >
            {submitting ? "Sending..." : "Count Me In! 🎉"}
          </button>
        </form>
      </div>
    </section>
  );
}
