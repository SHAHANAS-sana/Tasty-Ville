import { MenuItem, Testimonial, WhyCard, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Our Story", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1, cat: "grill",
    name: "Tasty Ville Special Charcoal",
    desc: "Signature charcoal-grilled chicken with smoky spice marinade. Served with hummus, khubz & complimentary soup.",
    price: "AED 91.25", badge: "Signature",
  },
  {
    id: 2, cat: "grill",
    name: "Peri Peri Chicken Charcoal",
    desc: "Juicy whole chicken marinated in fiery peri peri sauce, slow-grilled over live charcoal until smoky perfection.",
    price: "AED 95.00",
  },
  {
    id: 3, cat: "grill",
    name: "Mango Chilli Charcoal",
    desc: "A bold twist — sweet mango glaze meets fiery chilli on charcoal-grilled chicken. Wildly popular.",
    price: "AED 95.00", badge: "Fan Favourite",
  },
  {
    id: 4, cat: "grill",
    name: "Green Chili Charcoal",
    desc: "Chicken marinated in vibrant green chilli and herb paste, grilled over charcoal for a zesty kick.",
    price: "AED 91.25",
  },
  {
    id: 5, cat: "grill",
    name: "Pepper Chicken Charcoal",
    desc: "Whole charcoal chicken marinated generously with cracked black pepper and warming aromatic spices.",
    price: "AED 95.00",
  },
  {
    id: 6, cat: "biryani",
    name: "Thalassery Biryani",
    desc: "The legendary Malabar-style biryani — aromatic Jeerakasala rice, layered with slow-cooked meat and fried onions.",
    price: "From AED 42", badge: "Must Try",
  },
  {
    id: 7, cat: "biryani",
    name: "Chicken Mandi",
    desc: "Slow-cooked Yemeni-style mandi rice with tender whole chicken, smoky spices and dried lime.",
    price: "From AED 60",
  },
  {
    id: 8, cat: "biryani",
    name: "Lagoon Chicken Biryani",
    desc: "Tasty Ville's signature biryani with fragrant basmati, tender chicken and a rich masala base.",
    price: "AED 42.00",
  },
  {
    id: 9, cat: "north",
    name: "Butter Chicken Masala",
    desc: "Tender chicken in a velvety tomato-butter sauce. Best paired with flaky porotta or naan.",
    price: "AED 42.00",
  },
  {
    id: 10, cat: "north",
    name: "Chicken 65",
    desc: "Deep-fried chicken bites marinated with ginger, garlic, chilli and curry leaves. Crispy and addictive.",
    price: "AED 42.00",
  },
  {
    id: 11, cat: "north",
    name: "Kadai Chicken",
    desc: "Chicken stir-fried in a wok with bell peppers, onions and tomatoes in a robust Kadai masala.",
    price: "AED 38.00",
  },
  {
    id: 12, cat: "north",
    name: "Paneer Butter Masala",
    desc: "Soft paneer cubes in a rich, creamy tomato-butter sauce. A vegetarian showstopper.",
    price: "AED 38.00",
  },
  {
    id: 13, cat: "rice",
    name: "Schezwan Noodles (Mix)",
    desc: "Spicy Schezwan noodles with chicken, beef, egg and mixed vegetables. A full-flavour bomb.",
    price: "AED 49.50",
  },
  {
    id: 14, cat: "rice",
    name: "Fried Rice (Mix)",
    desc: "Wok-tossed rice with chicken, beef, egg and vegetables in savory soy sauce.",
    price: "AED 47.50",
  },
  {
    id: 15, cat: "rice",
    name: "Cheetos Pasta (Chicken)",
    desc: "Creamy pasta with a signature Cheetos crunch and tender chicken — an unexpected crowd-pleaser.",
    price: "AED 47.50",
  },
  {
    id: 16, cat: "burger",
    name: "Zinger Double Mighty",
    desc: "Two crispy fried chicken fillets, cheese, lettuce and spicy mayo in a towering stacked bun.",
    price: "AED 45.75", badge: "Bestseller",
  },
  {
    id: 17, cat: "burger",
    name: "Delux Boofer Burger",
    desc: "Large beef patty, multiple cheese slices, crispy onions and special house sauce. Truly indulgent.",
    price: "AED 40.00",
  },
  {
    id: 18, cat: "burger",
    name: "Fresh Cheetos Burger",
    desc: "Grilled chicken or beef patty with Cheetos, cheese, lettuce and special sauce. A crunchy delight.",
    price: "AED 51.50",
  },
  {
    id: 19, cat: "drinks",
    name: "Naadan Chaya (Milk Tea)",
    desc: "The iconic South Indian frothed milk tea served in a traditional steel glass. Utterly unmissable.",
    price: "AED 6–8", badge: "Iconic",
  },
  {
    id: 20, cat: "drinks",
    name: "Falak Juice",
    desc: "Tasty Ville's signature refreshing fruit juice blend — light, sweet, and beautifully balanced.",
    price: "AED 32.50",
  },
  {
    id: 21, cat: "drinks",
    name: "Mango Passion Mojito",
    desc: "Sweet mango, tangy passion fruit, fresh mint and sparkling soda — a tropical escape in a glass.",
    price: "AED 34.25",
  },
  {
    id: 22, cat: "drinks",
    name: "Lotus Shake",
    desc: "Creamy milkshake with Lotus Biscoff biscuits, whole milk and vanilla ice cream. Utterly indulgent.",
    price: "AED 34.25",
  },
  {
    id: 23, cat: "desserts",
    name: "Tasty Ville Signature Falooda",
    desc: "Show-stopping falooda with fresh fruits, vermicelli, nuts, and three scoops of ice cream.",
    price: "AED 34.25", badge: "Signature",
  },
  {
    id: 24, cat: "desserts",
    name: "London Dairy Falooda",
    desc: "Premium falooda built with London Dairy ice cream, basil seeds, vermicelli and tropical garnish.",
    price: "AED 51.50",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, text: "The set lunch at AED 11 with Sheri fish fry was fantastic — great quality and variety that exceeded all expectations.", author: "Najath M.", rating: 5 },
  { id: 2, text: "Staff member Nadeeka gave an excellent menu suggestion for my dietary needs. Truly attentive and warm hospitality.", author: "Daphine A.", rating: 5 },
  { id: 3, text: "Chicken Mandi with extra rice was more than enough for a family of four. The complementary mutton leg soup was a beautiful bonus.", author: "Mohamed A.", rating: 5 },
  { id: 4, text: "The Mango Chilli Charcoal was absolutely crazy good. Restaurant was top-notch. Highly recommend their charcoal range.", author: "Mohammed S.", rating: 5 },
  { id: 5, text: "Good ambiance, great charcoal chicken and the Falak juice is something special — perfectly balanced and refreshing.", author: "Sinan S.", rating: 4 },
  { id: 6, text: "Birthday party arrangements were excellent and the food was delicious. Everyone truly enjoyed it. Great team!", author: "Neethu A.", rating: 5 },
  { id: 7, text: "Beef ribs and kabab platter were awesomely tasty. Tasty Ville has some of the best grills in Sharjah, hands down.", author: "Md Zobaer", rating: 5 },
  { id: 8, text: "Delicious food and excellent friendly service. Staff are well trained and energetic. The tea is on another level.", author: "Asim", rating: 5 },
  { id: 9, text: "Great Thalassery biryani varieties — mutton, chicken and beef all superb. Their special Alfaham is flavourful.", author: "Zubinology", rating: 5 },
  { id: 10, text: "Waiter Amel was exceptional — greeted warmly and checked on us throughout. Service that made the food taste even better.", author: "Sarath V.", rating: 5 },
];

export const WHY_CARDS: WhyCard[] = [
  { icon: "🔥", title: "Real Charcoal Grilling", desc: "Our signature charcoal chicken is slow-cooked over live coals for that unmistakable smoky depth you simply cannot fake." },
  { icon: "👨‍👩‍👧‍👦", title: "Dedicated Family Space", desc: "Private family dining room with attentive staff ensures your gathering is comfortable, relaxed, and truly yours." },
  { icon: "🕐", title: "Open Until 3 AM", desc: "Late-night craving? We're here. 7 days a week, from 5 AM to 3 AM — Sharjah's most reliable all-day dining address." },
  { icon: "🌍", title: "Multi-Cuisine Mastery", desc: "South Indian, Arabic, Chinese, North Indian and burgers — an entire culinary world under one roof at honest prices." },
  { icon: "💰", title: "Unbeatable Value", desc: "Set lunch from AED 11. Full meals under AED 50. Premium grills for two under AED 100. Quality that respects your wallet." },
  { icon: "🎂", title: "Events & Celebrations", desc: "Birthday parties, Aqeeqa ceremonies, corporate lunches — our team handles catering with genuine warmth and care." },
];

export const CAT_LABELS: Record<string, string> = {
  all: "All",
  grill: "Charcoal Grill",
  biryani: "Biryani",
  north: "North Indian",
  rice: "Rice & Noodles",
  burger: "Burgers",
  drinks: "Drinks",
  desserts: "Desserts",
};
