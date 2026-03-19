import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tasty Ville Restaurant — Sharjah's Favourite Grill",
  description:
    "Authentic charcoal grills, Thalassery biryani, North Indian classics and more. Open 5AM–3AM daily in Maysaloon, Sharjah, UAE.",
  keywords: "Tasty Ville, restaurant Sharjah, charcoal chicken, biryani, Maysaloon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-outfit bg-cream text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
