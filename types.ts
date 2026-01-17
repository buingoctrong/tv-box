
// Product interface defines the structure for software and ROM items
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  // Optional fields for store display
  version?: string;
  fileSize?: string;
}

// Software is used as an alias for Product in store pages
export type Software = Product;

// CartItem represents a product added to the shopping cart with quantity
export interface CartItem extends Product {
  quantity: number;
}

// Guide interface defines the structure for technical tutorials and repair guides
export interface Guide {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
  // Optional fields for technical details in guides sections
  difficulty?: string;
  description?: string;
  toolsNeeded?: string[];
}
