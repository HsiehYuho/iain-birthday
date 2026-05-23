export default function Hero() {
  return (
    <section
      id="event"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient — beach sunset vibes */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-600 via-ocean-400 to-sand-300" />

      {/* Decorative wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 180" className="w-full" preserveAspectRatio="none">
          <path
            fill="#fdf8f0"
            d="M0,80 C360,160 720,0 1080,80 C1260,120 1380,100 1440,80 L1440,180 L0,180 Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Iain's photo */}
        <div className="mb-6">
          <img
            src="/iain.jpg"
            alt="Iain"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mx-auto border-4 border-white shadow-xl"
          />
        </div>

        <p className="text-sand-100 text-sm sm:text-base font-medium tracking-widest uppercase mb-3">
          You&apos;re invited to
        </p>

        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
          Iain&apos;s 3rd Birthday
        </h1>

        <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
          <span className="text-lg">🎉</span>
          <span className="text-white font-semibold text-sm sm:text-base drop-shadow">
            &amp; We&apos;re Welcoming the Second!
          </span>
          <span className="text-lg">🍼</span>
        </div>

        <p className="text-sand-100 text-sm sm:text-base font-medium mb-8">
          Come find out and place your bet! 🎉
        </p>

        <div className="space-y-2 mb-8">
          <p className="font-bold text-white text-lg sm:text-xl drop-shadow">
            📅 Sunday, July 12, 2026
          </p>
          <p className="text-white font-semibold drop-shadow">🕓 3:00 PM – 7:00 PM</p>
          <p className="text-white font-semibold drop-shadow">
            📍{" "}
            <a
              href="https://maps.google.com/?q=Golden+Gardens+Park+Seattle+WA"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-2 underline-offset-2 hover:text-sand-100 transition-colors"
            >
              Golden Gardens Park, Seattle
            </a>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#rsvp"
            className="inline-block bg-coral-500 hover:bg-coral-600 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all hover:shadow-xl text-lg"
          >
            RSVP Now
          </a>
          <a
            href="#registry"
            className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full transition-all border border-white/30"
          >
            📚 View Book Registry
          </a>
        </div>
      </div>
    </section>
  );
}
