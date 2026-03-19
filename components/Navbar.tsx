"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-400",
          scrolled ? "bg-cream/97 shadow-sm backdrop-blur-sm" : "bg-transparent"
        )}
      >
        {/* Logo */}
        <div className="flex flex-col leading-none">
          <span className="font-bebas text-2xl md:text-3xl text-amber tracking-wider">
            Tasty Ville
          </span>
          <span className="text-[10px] text-muted tracking-[0.2em] uppercase font-medium">
            Restaurant · Sharjah
          </span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-charcoal hover:text-amber transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+971503755797"
            className="flex items-center gap-2 text-sm font-medium text-muted hover:text-amber transition-colors"
          >
            <Phone size={14} />
            +971 50 375 5797
          </a>
          <Link
            href="#contact"
            className="bg-amber hover:bg-amber-light text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
          >
            Order Now →
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden p-1 text-ink"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={clsx(
          "fixed inset-0 z-[200] bg-cream flex flex-col items-center justify-center gap-8 transition-all duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <button
          className="absolute top-6 right-6 text-ink"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <X size={30} />
        </button>

        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-cormorant text-3xl font-semibold text-ink hover:text-amber transition-colors"
          >
            {link.label}
          </Link>
        ))}

        <a
          href="tel:+971503755797"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 text-muted text-base"
        >
          <Phone size={16} />
          +971 50 375 5797
        </a>

        <Link
          href="#contact"
          onClick={() => setOpen(false)}
          className="bg-amber text-white px-8 py-3 rounded-full font-semibold text-base mt-2"
        >
          Order Now →
        </Link>
      </div>
    </>
  );
}
