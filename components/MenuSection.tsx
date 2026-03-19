"use client";

import { useState } from "react";
import Link from "next/link";
import { MENU_ITEMS, CAT_LABELS } from "@/lib/data";
import { MenuCategory } from "@/types";
import clsx from "clsx";

const TABS: MenuCategory[] = ["all", "grill", "biryani", "north", "rice", "burger", "drinks", "desserts"];

export default function MenuSection() {
  const [active, setActive] = useState<MenuCategory>("all");

  const filtered = active === "all" ? MENU_ITEMS : MENU_ITEMS.filter((i) => i.cat === active);

  return (
    <section id="menu" className="bg-charcoal py-24 px-8 md:px-16">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-5 h-0.5 bg-gold" />
        <span className="text-gold text-[10px] font-semibold tracking-[0.22em] uppercase">Explore the Menu</span>
      </div>
      <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-white leading-[1.1] mb-6">
        Flavours That Keep{" "}
        <em className="text-gold not-italic">You Coming Back</em>
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {TABS.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={clsx(
              "px-4 py-2 rounded-full border text-xs font-medium transition-all duration-200 font-outfit",
              active === cat
                ? "bg-amber border-amber text-white"
                : "border-white/20 text-white/60 hover:border-white/40 hover:text-white/80"
            )}
          >
            {CAT_LABELS[cat]}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 menu-card-hover hover:border-amber/50 hover:bg-amber/[0.06] cursor-default"
          >
            {/* Category tag */}
            <div className="text-gold text-[10px] font-semibold tracking-[0.15em] uppercase mb-1.5">
              {CAT_LABELS[item.cat]}
            </div>

            {/* Badge */}
            {item.badge && (
              <span className="inline-block bg-amber/20 text-amber text-[9px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full mb-2">
                {item.badge}
              </span>
            )}

            <h3 className="font-cormorant text-white text-lg font-semibold leading-tight mb-2">
              {item.name}
            </h3>
            <p className="text-white/40 text-xs leading-relaxed mb-4">{item.desc}</p>
            <div className="font-bebas text-amber text-xl tracking-wide">
              {item.price}
              <span className="font-outfit text-white/30 text-[10px] font-normal ml-1">per serving</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 bg-amber hover:bg-amber-light text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-amber/30"
        >
          Place Your Order →
        </Link>
      </div>
    </section>
  );
}
