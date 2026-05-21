"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Event", href: "#event" },
  { label: "Details", href: "#details" },
  { label: "RSVP", href: "#rsvp" },
  { label: "Book Registry", href: "#registry" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#event"
          className={`text-lg font-serif font-bold transition-colors ${
            scrolled ? "text-sand-800" : "text-white"
          }`}
        >
          🎂 Iain&apos;s 3rd
        </a>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-coral-500 ${
                scrolled ? "text-sand-700" : "text-white/90"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`sm:hidden p-1 ${scrolled ? "text-sand-700" : "text-white"}`}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-md border-t border-sand-100 px-4 py-3 space-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-sand-700 hover:text-coral-500 py-1"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
