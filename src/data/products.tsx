export type Product = {
  id: number;
  image: string;
  title: string;
  price: string;
  color: string;
  badge?: string;
  stockStatus?: string;
  category: "Women" | "Men" | "Shoes";
  tags?: ('new-arrival' | 'trending' | 'icon')[];
};

export const products: Product[] = [
  {
    id: 101,
    image: "https://i.pinimg.com/736x/f7/cf/89/f7cf894ae66c91a7cd8587e23e814bb4.jpg",
    title: "Long Over Coat",
    price: "4500",
    color: "Black",
    badge: "New Arrival",
    stockStatus: "In Stock & Ready to Ship",
    category: "Women",
    tags: ['icon']
  },
  {
    id: 102,
    image: "https://i.pinimg.com/1200x/21/50/15/215015c008da7ad1014bbda9e0a03772.jpg",
    title: "Men's Classic Suit",
    price: "8500",
    color: "Navy",
    badge: "Trending",
    stockStatus: "Limited Stock",
    category: "Men",
    tags: ['icon']
  },
  {
    id: 104,
    image: "https://i.pinimg.com/1200x/d2/c3/3a/d2c33a58c6e7820e0d06317cfb4e7e8a.jpg",
    title: "Leather Running Shoes",
    price: "3500",
    color: "Brown",
    badge: "New",
    stockStatus: "In Stock & Ready to Ship",
    category: "Shoes",
    tags: ['icon']
  },
];

export type JustforyouProduct = {
  id: number;
  image: string;
  title: string;
  price: string;
  rating: string;
  color?: string;
  badge?: string;
  stockStatus?: string;
  category: "Women" | "Men" | "Shoes";
  tags?: ('new-arrival' | 'trending' | 'icon')[];
};

export const justforyouproducts: JustforyouProduct[] = [
  // Womens Fashion
  {
    id: 1,
    image: "https://i.pinimg.com/736x/bf/5e/fb/bf5efb3c8c17d17e1cba12a65397bdb7.jpg",
    title: "Adidas Ba Sing Se Jackect",
    price: "2500",
    rating: "4.8",
    badge: "Summer Sale",
    stockStatus: "In Stock",
    category: "Men",
    tags: ['new-arrival']
  },
  { id: 2, 
    image: "https://i.pinimg.com/1200x/5f/28/db/5f28db9087a850a355dc4c86b376b30a.jpg", 
    title: "Fleece Jacket", 
    price: "3200", 
    rating: "4.7", 
    stockStatus: "In Stock", 
    category: "Women", 
    tags: ['trending'] 
  },
  { 
    id: 3, 
    image: "https://i.pinimg.com/736x/a8/5b/50/a85b5005409052a45f34f26b400edc93.jpg", 
    title: "Silk Scarf", 
    price: "6500", 
    rating: "4.9", 
    badge: "Premium", 
    stockStatus: "Low Stock", 
    category: "Women", 
    tags: ['trending'] 
  },
  { 
    id: 4, 
    image: "https://i.pinimg.com/1200x/8f/03/6e/8f036e9f42a910035de75f185e35c01d.jpg", 
    title: "Casual White Tee", 
    price: "950", 
    rating: "4.5", 
    stockStatus: "In Stock & Ready to Ship", 
    category: "Women" 
  },
  { 
    id: 5, 
    image: "https://i.pinimg.com/736x/2f/ac/7c/2fac7c81ae2c9fb17c5300af4113e761.jpg", 
    title: "Barrel Leg Jeans", 
    price: "2800", 
    rating: "4.6", 
    category: "Women" 
  },
  { 
    id: 6, 
    image: "https://i.pinimg.com/1200x/fd/9f/97/fd9f97f3b37a6eda6adb4e843529f0a3.jpg", 
    title: "Bubble Collar Ruched Jacket", 
    price: "1500", 
    rating: "4.7", 
    category: "Women" 
  },
  { 
    id: 7, 
    image: "https://i.pinimg.com/1200x/ce/45/ee/ce45ee72a922296683f46ecf2ff8db40.jpg", 
    title: "Carhart Jacket", 
    price: "5200", 
    rating: "4.8", 
    badge: "Best Seller", 
    category: "Women", 
    tags: ['trending'] 
  },
  { 
    id: 8, 
    image: "https://i.pinimg.com/736x/b8/3f/08/b83f0833956a171c1793d0e7327a642a.jpg", 
    title: "Cropped trench", 
    price: "1500", 
    rating: "4.9", 
    badge: "Exclusive",
    category: "Women", 
    tags: ['trending', 'new-arrival'] 
  },
  { 
    id: 9, 
    image: "https://i.pinimg.com/1200x/59/83/e2/5983e2e9a5abb49027b4081f895ea46c.jpg", 
    title: "Woolen Cardigan", 
    price: "2200", 
    rating: "4.6", 
    category: "Women" },
  { id: 10, image: "https://i.pinimg.com/1200x/b8/82/6a/b8826a75fe702be8642c16293b849f66.jpg", title: "Boho Maxi Skirt", price: "1800", rating: "4.5", category: "Women" },

  // Mens Fashion
  { id: 11, image: "https://i.pinimg.com/1200x/75/ba/20/75ba203b197fe2d881ac19e628bf9bb7.jpg", title: "Wool Fleece", price: "2100", rating: "4.7", badge: "New", category: "Men", tags: ['new-arrival'] },
  { id: 12, image: "https://i.pinimg.com/1200x/b2/34/e1/b234e1ec21dab73dbd9e2fdda6bb0e91.jpg", title: "NFL Jursey", price: "2500", rating: "4.6", category: "Men" },
  { id: 13, image: "https://i.pinimg.com/736x/2b/b3/91/2bb3912c2771716df822b18aef1dad83.jpg", title: "Daily Blazer", price: "8000", rating: "4.9", badge: "Top Rated", category: "Men", tags: ['trending'] },
  { id: 14, image: "https://i.pinimg.com/736x/bd/7f/d5/bd7fd50ffa52f074bd00d88835d50267.jpg", title: "Mershiers Wool", price: "1200", rating: "4.5", category: "Men" },
  { id: 15, image: "https://i.pinimg.com/736x/d1/37/f4/d137f4d339c0a0ded93b796287a78e4b.jpg", title: "Flannel overshirt", price: "3500", rating: "4.7", category: "Men" },
  { id: 16, image: "https://i.pinimg.com/1200x/bc/2b/72/bc2b72d1ea5004fc8d045964ae55e701.jpg", title: "Leather Jacket", price: "4900", rating: "4.4", category: "Men" },
  { id: 17, image: "https://i.pinimg.com/736x/b3/1a/6d/b31a6dfb63ebce82b5f9283d6479bc4b.jpg", title: "Corduroy Jacket", price: "2400", rating: "4.6", category: "Men" },
  { id: 18, image: "https://i.pinimg.com/1200x/2a/86/5b/2a865b6b2638dd2f6210900b8e426448.jpg", title: "Tiramisu likes", price: "1800", rating: "4.8", category: "Men", tags: ['trending'] },
  { id: 19, image: "https://i.pinimg.com/736x/1b/ad/fa/1badfa1a51f5f43df72a08b72bf7e622.jpg", title: "Casual Shorts", price: "1100", rating: "4.5", category: "Men" },
  { id: 20, image: "https://i.pinimg.com/736x/67/8f/76/678f762e14481827a1870c47ab71bf89.jpg", title: "Sherpa Jacket", price: "4500", rating: "4.8", category: "Men", tags: ['trending'] },


  // SHOES
  // ==========================================
  { id: 31, image: "https://i.pinimg.com/1200x/1a/e2/14/1ae214003be2b520592f8e5ad45cb978.jpg", title: "Nike Air Max", price: "3200", rating: "4.7", category: "Shoes" },
  { id: 32, image: "https://i.pinimg.com/736x/54/a7/05/54a7056dbb39ca030a5acdb1eaa69cb5.jpg", title: "Running Shoe", price: "2800", rating: "4.8", category: "Shoes" },
  { id: 33, image: "https://i.pinimg.com/736x/23/a8/59/23a859029eb426aa6ce515c5be844d61.jpg", title: "Adidas Samba ", price: "4500", rating: "4.9", category: "Shoes" },
  { id: 34, image: "https://i.pinimg.com/1200x/d1/0b/a3/d10ba373e254f411e221096d14ab4442.jpg", title: "Nike Dunk Low", price: "3800", rating: "4.7", category: "Shoes" },
  { id: 35, image: "https://i.pinimg.com/736x/43/fd/38/43fd38159b99f706676844b80bb0eafb.jpg", title: "Puma Palermo", price: "1200", rating: "4.5", category: "Shoes" },
  { id: 36, image: "https://i.pinimg.com/736x/5a/54/40/5a5440f8422fb0579f44a196e900839a.jpg", title: "Sweat Sandals", price: "950", rating: "4.6", category: "Shoes" },
  { id: 37, image: "https://i.pinimg.com/736x/25/b0/5e/25b05e7dbb211e4d0b47af1a9fa3bb23.jpg", title: "New Balanse Shoes", price: "2500", rating: "4.7", category: "Shoes" },
  { id: 38, image: "https://i.pinimg.com/736x/1b/60/1a/1b601a20f8018c64b19c9c630f77a1c8.jpg", title: "Ankle Boots", price: "3200", rating: "4.8", category: "Shoes" },
  { id: 39, image: "https://i.pinimg.com/736x/87/f1/65/87f1658c34c46d67a26f723f74617105.jpg", title: "Dr. Martin Air Max", price: "2100", rating: "4.9", category: "Shoes" },
  { id: 40, image: "https://i.pinimg.com/1200x/4f/23/5b/4f235bd799537d7768d88c7c39b16402.jpg", title: "Zebzag Mules Dr. Martin", price: "5500", rating: "4.8", category: "Shoes" },
];