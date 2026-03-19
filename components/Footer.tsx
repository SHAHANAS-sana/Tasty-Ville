import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";

const menuLinks = ["Charcoal Grill", "Biryani", "North Indian", "Burgers", "Drinks & Juices"];

export default function Footer() {
  return (
    <footer className="bg-[#100d07]">
      <div className="px-8 md:px-16 pt-14 pb-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/[0.07]">
          {/* Brand */}
          <div>
            <div className="font-bebas text-amber text-3xl tracking-wider mb-3">Tasty Ville</div>
            <p className="text-white/40 text-sm leading-relaxed max-w-[220px]">
              Sharjah&apos;s beloved all-day restaurant. Charcoal grills, family tables, and
              flavours from across the world — open from dawn to near midnight.
            </p>
            <div className="flex gap-2 mt-5">
              {["f", "in", "▶"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 text-xs hover:border-amber hover:text-amber transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-gold text-[10px] font-semibold uppercase tracking-[0.16em] mb-4">Quick Links</div>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 text-sm hover:text-amber transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div>
            <div className="text-gold text-[10px] font-semibold uppercase tracking-[0.16em] mb-4">Menu</div>
            <ul className="flex flex-col gap-2.5">
              {menuLinks.map((item) => (
                <li key={item}>
                  <Link href="#menu" className="text-white/50 text-sm hover:text-amber transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-gold text-[10px] font-semibold uppercase tracking-[0.16em] mb-4">Contact</div>
            <ul className="flex flex-col gap-2.5">
              <li className="text-white/50 text-sm">Al Zahra&apos;a St, Maysaloon</li>
              <li className="text-white/50 text-sm">Sharjah, UAE</li>
              <li>
                <a href="tel:+971503755797" className="text-white/50 text-sm hover:text-amber transition-colors">
                  +971 50 375 5797
                </a>
              </li>
              <li className="text-white/50 text-sm">Open: 5 AM – 3 AM Daily</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-white/20 text-xs">© 2025 Tasty Ville Restaurant. All rights reserved.</p>
          <span className="text-amber/80 text-xs italic">Fire-grilled. Family-loved. Always fresh.</span>
        </div>
      </div>
    </footer>
  );
}
