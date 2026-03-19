const items = [
  "Charcoal Chicken", "Chicken Mandi", "Thalassery Biryani",
  "Mix Grill Platter", "Naadan Chaya", "Falak Juice",
  "Mutton Kabab", "Peri Peri Charcoal", "Beef Ribs",
  "Schezwan Noodles", "Butter Chicken", "Mango Chilli Charcoal",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-amber py-3 overflow-hidden">
      <div className="flex gap-10 whitespace-nowrap animate-ticker ticker-pause w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-white text-xs font-semibold tracking-[0.18em] uppercase flex items-center gap-3"
          >
            {item}
            <span className="opacity-50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
