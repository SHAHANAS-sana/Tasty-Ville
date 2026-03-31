export interface MenuItem {
  id: number;
  cat: MenuCategory;
  name: string;
  desc: string;
  price: string;
  badge?: string;
}

export type MenuCategory =
  | 'all'
  | 'grill'
  | 'biryani'
  | 'north'
  | 'rice'
  | 'burger'
  | 'drinks'
  | 'desserts';

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  rating: number;
}

export interface WhyCard {
  icon: string;
  title: string;
  desc: string;
}

export interface NavLink {
  label: string;
  href: string;
}
