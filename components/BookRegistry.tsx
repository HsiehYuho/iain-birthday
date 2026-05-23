"use client";

import { useState, useEffect } from "react";
import { BOOKS, CATEGORIES, type Book } from "@/lib/books";

interface BookClaim {
  bookId: number;
  claimedBy: string;
}

export default function BookRegistry() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [claims, setClaims] = useState<BookClaim[]>([]);
  const [claimingId, setClaimingId] = useState<number | null>(null);
  const [claimName, setClaimName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [loadingClaims, setLoadingClaims] = useState(true);

  useEffect(() => {
    fetchClaims();
  }, []);

  async function fetchClaims() {
    try {
      const res = await fetch("/api/books");
      if (res.ok) {
        const data = await res.json();
        setClaims(data.claims ?? []);
      }
    } catch {
      // silent
    } finally {
      setLoadingClaims(false);
    }
  }

  async function handleClaim(bookId: number) {
    if (!claimName.trim()) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookId, claimedBy: claimName.trim() }),
      });

      if (res.ok) {
        setClaims((prev) => [...prev, { bookId, claimedBy: claimName.trim() }]);
        setClaimingId(null);
        setClaimName("");
      } else {
        const data = await res.json().catch(() => null);
        alert(data?.error || "Failed to claim book. It may have already been taken.");
        await fetchClaims();
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const filteredBooks =
    activeCategory === "All"
      ? BOOKS
      : BOOKS.filter((b) => b.category === activeCategory);

  const claimedIds = new Set(claims.map((c) => c.bookId));
  const claimedCount = claims.length;
  const totalCount = BOOKS.length;

  return (
    <section id="registry" className="py-16 sm:py-24 bg-sand-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sand-900 text-center mb-3">
          📚 Book Registry
        </h2>
        <p className="text-sand-500 text-center mb-3 max-w-xl mx-auto">
          Instead of gifts, we&apos;d love STEM-inspired books to grow Iain&apos;s library!
          Claim a book below to let others know you&apos;ve got it covered.
        </p>
        <div className="text-center mb-3">
          <p className="text-sand-600 text-sm bg-sand-100 inline-block px-4 py-2 rounded-lg">
            📦 <span className="font-medium">Ship to:</span> Iain Hsieh, 4330 32nd Ave W, Seattle, WA 98199
          </p>
        </div>

        {/* Progress */}
        <div className="max-w-xs mx-auto mb-8">
          <div className="flex justify-between text-xs text-sand-500 mb-1">
            <span>{claimedCount} claimed</span>
            <span>{totalCount - claimedCount} available</span>
          </div>
          <div className="h-2 bg-sand-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-ocean-500 rounded-full transition-all duration-500"
              style={{ width: `${(claimedCount / totalCount) * 100}%` }}
            />
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-ocean-500 text-white shadow-sm"
                  : "bg-white text-sand-600 border border-sand-200 hover:border-ocean-300 hover:text-ocean-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Books grid */}
        {loadingClaims ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ocean-500" />
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBooks.map((book) => {
              const isClaimed = claimedIds.has(book.id);
              const claimInfo = claims.find((c) => c.bookId === book.id);
              const isClaiming = claimingId === book.id;

              return (
                <div
                  key={book.id}
                  className={`rounded-2xl p-5 border transition-all ${
                    isClaimed
                      ? "bg-sand-100/60 border-sand-200 opacity-70"
                      : "bg-white border-sand-100 shadow-sm hover:shadow-md"
                  }`}
                >
                  {/* Category tag */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-ocean-600 bg-ocean-50 px-2 py-0.5 rounded-full">
                      {book.category}
                    </span>
                    <span className="text-[11px] text-sand-400">{book.ageRange}</span>
                  </div>

                  {/* Title & Author */}
                  <h3 className={`font-bold text-base mb-0.5 ${isClaimed ? "text-sand-500 line-through" : "text-sand-900"}`}>
                    {book.title}
                  </h3>
                  <p className="text-sm text-sand-500 mb-2">by {book.author}</p>

                  {/* Description */}
                  <p className="text-sm text-sand-600 leading-relaxed mb-3">
                    {book.description}
                  </p>

                  {/* Action area */}
                  {isClaimed ? (
                    <div className="flex items-center gap-1.5 text-sm text-sand-500">
                      <span>✅</span>
                      <span>Claimed by {claimInfo?.claimedBy}</span>
                    </div>
                  ) : isClaiming ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={claimName}
                        onChange={(e) => setClaimName(e.target.value)}
                        placeholder="Your name"
                        autoFocus
                        className="w-full px-3 py-2 border border-ocean-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ocean-300 bg-sand-50"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleClaim(book.id);
                          if (e.key === "Escape") {
                            setClaimingId(null);
                            setClaimName("");
                          }
                        }}
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleClaim(book.id)}
                          disabled={submitting || !claimName.trim()}
                          className="flex-1 py-1.5 bg-ocean-500 hover:bg-ocean-600 disabled:bg-sand-300 text-white font-medium rounded-lg text-sm transition-colors"
                        >
                          {submitting ? "Claiming..." : "Confirm"}
                        </button>
                        <button
                          onClick={() => {
                            setClaimingId(null);
                            setClaimName("");
                          }}
                          className="px-3 py-1.5 bg-sand-100 hover:bg-sand-200 text-sand-600 rounded-lg text-sm transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setClaimingId(book.id);
                          setClaimName("");
                        }}
                        className="flex-1 py-2 bg-coral-50 hover:bg-coral-100 text-coral-600 font-medium rounded-lg text-sm transition-colors border border-coral-200"
                      >
                        🎁 I&apos;ll Get This One
                      </button>
                      <a
                        href={`https://www.amazon.com/s?k=${book.amazonQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 bg-sand-100 hover:bg-sand-200 text-sand-600 rounded-lg text-sm transition-colors"
                        title="Find on Amazon"
                      >
                        🛒
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
