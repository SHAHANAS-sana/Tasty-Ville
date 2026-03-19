"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { num: "1,154", label: "Reviews" },
  { num: "4.1★", label: "Rating" },
  { num: "22hrs", label: "Open Daily" },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-cream">
      {/* Text */}
      <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-5 h-0.5 bg-amber" />
          <span className="text-amber text-[10px] font-semibold tracking-[0.22em] uppercase">Our Story</span>
        </div>

        <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-ink leading-[1.1] mb-5">
          Where <em className="text-amber not-italic">Every Craving</em>
          <br />Finds Its Match
        </h2>

        <p className="text-muted text-base leading-relaxed mb-4">
          Tasty Ville Restaurant in Maysaloon, Sharjah is where the neighbourhood comes alive — morning chai,
          charcoal-kissed grills, and late-night biryanis under one roof. We&apos;ve built our reputation on
          generous portions, honest flavours, and a team that genuinely cares.
        </p>
        <p className="text-muted text-base leading-relaxed mb-8">
          From signature charcoal chicken to slow-cooked Thalassery biryani and bold Mango Chilli grills,
          every dish tells a story of tradition adapted for the modern table. A dedicated family dining space,
          22-hour service, and a menu spanning South Indian, Arabic, and global flavours make Tasty Ville the
          most versatile dining address in Sharjah.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center">
              <div className="font-bebas text-3xl text-amber">{s.num}</div>
              <div className="text-muted text-[10px] uppercase tracking-widest font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual */}
      <div className={`relative transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-charcoal to-[#0d0800] flex flex-col items-center justify-center gap-4">
          <span className="text-6xl">🫕</span>
          <span className="font-cormorant italic text-gold text-xl">Family Dining · Private Rooms</span>
        </div>
        {/* Badge */}
        <div className="absolute top-8 -right-4 bg-amber text-white rounded-full w-20 h-20 flex flex-col items-center justify-center text-center shadow-lg shadow-amber/40">
          <strong className="text-base leading-none font-bebas">Open</strong>
          <span className="text-[9px] font-semibold leading-tight">5 AM<br />to 3 AM</span>
        </div>
      </div>
    </section>
  );
}
