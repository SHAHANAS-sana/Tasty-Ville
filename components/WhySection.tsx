"use client";

import { useEffect, useRef, useState } from "react";
import { WHY_CARDS } from "@/lib/data";

export default function WhySection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="why" ref={ref} className="py-24 px-8 md:px-16 bg-smoke">
      <div className="max-w-xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-5 h-0.5 bg-amber" />
          <span className="text-amber text-[10px] font-semibold tracking-[0.22em] uppercase">Why Tasty Ville</span>
        </div>
        <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-ink leading-[1.1]">
          Six Reasons Sharjah{" "}
          <em className="text-amber not-italic">Keeps Choosing Us</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {WHY_CARDS.map((card, i) => (
          <div
            key={card.title}
            className={`bg-card border border-border rounded-2xl p-8 transition-all duration-700 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber/10 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
          >
            <div className="w-13 h-13 rounded-xl gradient-amber flex items-center justify-center text-2xl mb-5 w-12 h-12">
              {card.icon}
            </div>
            <h3 className="font-cormorant text-ink text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
