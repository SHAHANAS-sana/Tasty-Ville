"use client";

import { TESTIMONIALS } from "@/lib/data";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="text-gold text-sm mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="reviews" className="py-24 px-8 md:px-16 overflow-hidden bg-cream">
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-5 h-0.5 bg-amber" />
        <span className="text-amber text-[10px] font-semibold tracking-[0.22em] uppercase">Guest Reviews</span>
      </div>
      <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-ink leading-[1.1] mb-10">
        What Our <em className="text-amber not-italic">Guests Say</em>
      </h2>

      {/* Scrolling track */}
      <div className="overflow-hidden -mx-8 md:-mx-16">
        <div
          className="flex gap-5 w-max ticker-pause"
          style={{ animation: "testiScroll 40s linear infinite" }}
        >
          {doubled.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="bg-card border border-border rounded-2xl p-6 w-[300px] md:w-[340px] flex-shrink-0"
            >
              <StarRow rating={t.rating} />
              <p className="text-muted text-sm leading-relaxed italic mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-ink text-xs font-semibold">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
