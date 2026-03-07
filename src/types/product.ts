export type ProductLabel = "License Free" | "Business Radio" | "Professional Series";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  label: ProductLabel;
  category: string;
  description?: string;
  isTrending?: boolean;
  isGallery?: boolean;
  isAccessory?: boolean;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}
