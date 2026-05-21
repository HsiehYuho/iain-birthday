export default function WhatToExpect() {
  return (
    <section id="details" className="py-16 sm:py-24 bg-sand-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sand-900 text-center mb-4">
          What to Expect
        </h2>
        <p className="text-sand-500 text-center mb-12 max-w-xl mx-auto">
          An evening of sun, sand, and celebration at one of Seattle&apos;s most beautiful beaches
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Food & Drinks */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand-100">
            <span className="text-3xl mb-3 block">🍕</span>
            <h3 className="font-bold text-sand-900 text-lg mb-2">Food &amp; Drinks</h3>
            <p className="text-sand-600 text-sm leading-relaxed">
              All food and beverages are provided — just bring your appetite and good vibes!
            </p>
          </div>

          {/* Gender Reveal */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand-100">
            <span className="text-3xl mb-3 block">🎁</span>
            <h3 className="font-bold text-sand-900 text-lg mb-2">Gender Reveal Surprise</h3>
            <p className="text-sand-600 text-sm leading-relaxed">
              We&apos;re keeping baby&apos;s gender a secret during the party! But for those who
              really want to know, we&apos;ll have a special little box you can peek into privately. 🤫
            </p>
          </div>

          {/* Parking */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand-100">
            <span className="text-3xl mb-3 block">🅿️</span>
            <h3 className="font-bold text-sand-900 text-lg mb-2">Parking</h3>
            <p className="text-sand-600 text-sm leading-relaxed">
              Parking is available, but we recommend arriving a little early — the walk from the
              parking lot to the beach can be a bit of a trek!
            </p>
          </div>

          {/* What to Bring */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand-100">
            <span className="text-3xl mb-3 block">🏄</span>
            <h3 className="font-bold text-sand-900 text-lg mb-2">What to Bring</h3>
            <p className="text-sand-600 text-sm leading-relaxed">
              No need to bring anything! But if you want to enjoy the beach — towels, beach toys,
              or a swimsuit for a dip in the ocean are all welcome.
            </p>
          </div>

          {/* Dress Code */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand-100">
            <span className="text-3xl mb-3 block">👕</span>
            <h3 className="font-bold text-sand-900 text-lg mb-2">Dress Code</h3>
            <p className="text-sand-600 text-sm leading-relaxed">
              None! Come as you are. It&apos;s a beach party — casual and comfortable is perfect.
            </p>
          </div>

          {/* Gifts */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand-100">
            <span className="text-3xl mb-3 block">📚</span>
            <h3 className="font-bold text-sand-900 text-lg mb-2">In Lieu of Gifts</h3>
            <p className="text-sand-600 text-sm leading-relaxed">
              We kindly ask for no big gifts — instead, check out our{" "}
              <a href="#registry" className="text-ocean-600 font-medium hover:underline">
                STEM book registry
              </a>{" "}
              if you&apos;d like to bring something special for Iain!
            </p>
          </div>
        </div>

        {/* Location Map */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-sm border border-sand-100">
          <h3 className="font-bold text-sand-900 text-lg mb-3">📍 Golden Gardens Park</h3>
          <p className="text-sand-600 text-sm mb-4">
            8498 Seaview Pl NW, Seattle, WA 98117
          </p>
          <a
            href="https://maps.google.com/?q=Golden+Gardens+Park+Seattle+WA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ocean-50 hover:bg-ocean-100 text-ocean-700 font-medium px-4 py-2 rounded-lg transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
