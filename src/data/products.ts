import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Baofeng UV-5R",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=80",
    rating: 4.5,
    label: "License Free",
    category: "Walkie Talkie",
    description: "Dual-band handheld radio with extended range.",
    isTrending: true,
    isGallery: true,
  },
  {
    id: 2,
    name: "Baofeng BF-88E",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
    label: "Business Radio",
    category: "Professional Series",
    description: "Clear voice quality and lightweight body.",
    isTrending: true,
    isGallery: true,
  },
  {
    id: 3,
    name: "Baofeng GT-22",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=900&q=80",
    rating: 4.4,
    label: "License Free",
    category: "Outdoor Radios",
    description: "Long battery life for all day expeditions.",
    isTrending: true,
    isGallery: true,
  },
  {
    id: 4,
    name: "Baofeng ProLink 9X",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    label: "Professional Series",
    category: "Professional Series",
    description: "Durable shell with high power output.",
    isTrending: true,
    isGallery: true,
  },
  {
    id: 5,
    name: "Remote Speaker Microphone",
    price: 59,
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    label: "Business Radio",
    category: "Accessories",
    description: "Noise-filtered clip-on microphone accessory.",
    isAccessory: true,
  },
];
