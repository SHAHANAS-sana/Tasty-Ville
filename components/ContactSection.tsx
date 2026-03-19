"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Truck } from "lucide-react";

const hours = [
  { day: "Monday", time: "5:00 AM – 3:00 AM" },
  { day: "Tuesday", time: "5:00 AM – 3:00 AM" },
  { day: "Wednesday", time: "5:00 AM – 3:00 AM" },
  { day: "Thursday", time: "5:00 AM – 3:00 AM" },
  { day: "Friday", time: "5:00 AM – 3:00 AM" },
  { day: "Saturday", time: "5:00 AM – 3:00 AM" },
  { day: "Sunday", time: "5:00 AM – 3:00 AM" },
];

type FormData = {
  name: string;
  phone: string;
  occasion: string;
  date: string;
  guests: string;
  notes: string;
};

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", occasion: "", date: "", guests: "1 – 2 People", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  function validate(): boolean {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  }

  return (
    <section id="contact" className="bg-charcoal py-24 px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* Info */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-5 h-0.5 bg-gold" />
          <span className="text-gold text-[10px] font-semibold tracking-[0.22em] uppercase">Find Us</span>
        </div>
        <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-white leading-[1.1] mb-10">
          Come Dine With Us{" "}
          <em className="text-gold not-italic">Tonight</em>
        </h2>

        <div className="flex flex-col gap-7">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber/20 flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-amber" />
            </div>
            <div>
              <strong className="block text-gold text-[10px] uppercase tracking-widest font-semibold mb-1">Address</strong>
              <p className="text-white/70 text-sm leading-relaxed">
                Near Police Headquarters, Al Zahra&apos;a St<br />
                Maysaloon, Sharjah, United Arab Emirates
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber/20 flex items-center justify-center flex-shrink-0">
              <Phone size={18} className="text-amber" />
            </div>
            <div>
              <strong className="block text-gold text-[10px] uppercase tracking-widest font-semibold mb-1">Phone</strong>
              <a href="tel:+971503755797" className="text-white/70 text-sm hover:text-amber transition-colors">
                +971 50 375 5797
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber/20 flex items-center justify-center flex-shrink-0">
              <Clock size={18} className="text-amber" />
            </div>
            <div className="flex-1">
              <strong className="block text-gold text-[10px] uppercase tracking-widest font-semibold mb-2">Opening Hours</strong>
              <div className="grid grid-cols-2 gap-x-4">
                {hours.map((h) => (
                  <div key={h.day} className="py-1 border-b border-white/5 text-xs">
                    <span className="text-white/80 font-medium">{h.day}</span>
                    <span className="text-white/40 ml-2">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber/20 flex items-center justify-center flex-shrink-0">
              <Truck size={18} className="text-amber" />
            </div>
            <div>
              <strong className="block text-gold text-[10px] uppercase tracking-widest font-semibold mb-1">Services</strong>
              <p className="text-white/70 text-sm">Dine-In · Delivery · Catering<br />Private Events · Family Rooms</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8">
        <h3 className="font-cormorant text-white text-2xl font-semibold mb-6">
          Reserve a Table or Enquire
        </h3>

        {submitted ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">✦</div>
            <p className="font-cormorant italic text-gold text-xl mb-2">
              Thank you, {form.name}!
            </p>
            <p className="text-white/60 text-sm">
              We&apos;ve received your request and will confirm within 2 hours.<br />
              See you soon at Tasty Ville!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gold text-[10px] uppercase tracking-widest font-semibold mb-1.5">
                  Your Name *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full bg-white/[0.07] border border-white/[0.12] focus:border-amber rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-white/30 font-outfit"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-gold text-[10px] uppercase tracking-widest font-semibold mb-1.5">
                  Phone Number *
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+971 XX XXX XXXX"
                  className="w-full bg-white/[0.07] border border-white/[0.12] focus:border-amber rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-white/30 font-outfit"
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gold text-[10px] uppercase tracking-widest font-semibold mb-1.5">
                Occasion
              </label>
              <select
                name="occasion"
                value={form.occasion}
                onChange={handleChange}
                className="w-full bg-white/[0.07] border border-white/[0.12] focus:border-amber rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors font-outfit"
              >
                <option value="" className="bg-charcoal">Select occasion</option>
                <option className="bg-charcoal">Regular Dine-In</option>
                <option className="bg-charcoal">Birthday Party</option>
                <option className="bg-charcoal">Family Gathering</option>
                <option className="bg-charcoal">Corporate Lunch</option>
                <option className="bg-charcoal">Aqeeqa / Ceremony</option>
                <option className="bg-charcoal">Catering Enquiry</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gold text-[10px] uppercase tracking-widest font-semibold mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full bg-white/[0.07] border border-white/[0.12] focus:border-amber rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors font-outfit"
                />
              </div>
              <div>
                <label className="block text-gold text-[10px] uppercase tracking-widest font-semibold mb-1.5">
                  Guests
                </label>
                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className="w-full bg-white/[0.07] border border-white/[0.12] focus:border-amber rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors font-outfit"
                >
                  <option className="bg-charcoal">1 – 2 People</option>
                  <option className="bg-charcoal">3 – 5 People</option>
                  <option className="bg-charcoal">6 – 10 People</option>
                  <option className="bg-charcoal">10+ People</option>
                </select>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-gold text-[10px] uppercase tracking-widest font-semibold mb-1.5">
                Special Requests
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                placeholder="Dietary requirements, special setup, etc."
                className="w-full bg-white/[0.07] border border-white/[0.12] focus:border-amber rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-white/30 font-outfit resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber hover:bg-amber-light text-white rounded-full py-3.5 font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-amber/30"
            >
              Send Reservation Request →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
