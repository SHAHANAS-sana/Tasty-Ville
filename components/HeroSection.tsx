import Link from "next/link";
import { Star, Clock, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-charcoal grid grid-cols-1 lg:grid-cols-2 overflow-hidden relative">
      {/* Left */}
      <div className="flex flex-col justify-center px-8 md:px-16 pt-28 pb-12 relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <span className="block w-7 h-px bg-gold" />
          <span className="text-gold text-xs font-semibold tracking-[0.22em] uppercase">
            Sharjah&apos;s Favourite Grill
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-bebas text-white leading-[0.93] mb-4"
          style={{ fontSize: "clamp(3.4rem, 7vw, 6rem)" }}>
          Fire, Flavour
          <br />
          &amp;{" "}
          <span className="text-amber">Family</span>
          <br />
          in Every Bite
        </h1>

        <p className="font-cormorant italic text-[#c9b89e] text-lg md:text-xl leading-relaxed max-w-md mb-8">
          From smoky charcoal grills to steaming biryanis — Tasty Ville serves
          the food Sharjah has been coming back to for years. Open daily until 3&nbsp;AM.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Link
            href="#menu"
            className="bg-amber hover:bg-amber-light text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-amber/30"
          >
            Explore Menu
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href="tel:+971503755797"
            className="border border-white/30 hover:border-gold text-white hover:text-gold px-7 py-3.5 rounded-full font-medium text-sm transition-all flex items-center justify-center gap-2"
          >
            📞 Call to Order
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-5">
          <div className="flex items-center gap-2 text-[#a89070] text-xs font-medium">
            <Star size={13} className="text-gold fill-gold" />
            4.1 Stars · 1,154 Reviews
          </div>
          <div className="flex items-center gap-2 text-[#a89070] text-xs font-medium">
            <Clock size={13} className="text-gold" />
            Open Daily 5 AM – 3 AM
          </div>
          <div className="flex items-center gap-2 text-[#a89070] text-xs font-medium">
            <Users size={13} className="text-gold" />
            Family &amp; Private Dining
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="relative overflow-hidden lg:block h-64 lg:h-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent z-10" />

        {/* Visual placeholder — replace with real <Image> */}
        <div className="w-full h-full bg-gradient-to-br from-[#3d1f05] via-[#1a0e03] to-[#0d0800] flex flex-col items-center justify-center gap-3">
          <span className="text-7xl md:text-8xl animate-flicker">🍖</span>
          <span className="font-bebas text-gold/70 text-lg tracking-[0.12em]">
            CHARCOAL GRILLED PERFECTION
          </span>
        </div>

        {/* Rating card */}
        <div className="absolute bottom-8 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex items-center gap-4">
          <div>
            <div className="font-bebas text-white text-4xl leading-none">4.1</div>
            <div className="text-gold text-xs mt-0.5">★★★★☆</div>
          </div>
          <div>
            <div className="text-white font-semibold text-sm">Guest Rating</div>
            <div className="text-[#c9b89e] text-xs">1,154 Reviews</div>
          </div>
        </div>
      </div>

      {/* Flame strip */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber via-gold to-amber opacity-70" />
    </section>
  );
}
