// src/data/productDetail.js

import tsFront from "@/assets/images/ts-front.png";
import tsBack from "@/assets/images/ts-back.png";
import tsModel from "@/assets/images/ts-model.png";

export default {
  id: "abc123",
  category: "t-shirts",
  name: "ONE LIFE GRAPHIC T-SHIRT",
  rating: 4.5,
  priceCurrent: 260,
  priceOriginal: 300,
  discountPercent: "-40%",
  description:
    "This graphic t‑shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  colors: [
    { name: "Olive", hex: "#4F4631" },
    { name: "Forest Green", hex: "#314F4A" },
    { name: "Navy", hex: "#31344F" },
  ],
  sizes: [
    { label: "Small", inStock: true },
    { label: "Medium", inStock: true },
    { label: "Large", inStock: true },
    { label: "X-Large", inStock: false },
  ],
  images: [tsFront, tsBack, tsModel],

  faqs: [
    { q: "What’s the fabric?", a: "100% cotton." },
    { q: "Machine washable?", a: "Yes, gentle cycle." },
    { q: "How does it fit?", a: "Runs true to size." },
    { q: "Country of origin?", a: "Made in Portugal." },
  ],

  reviews: [
    {
      id: 1,
      author: "Samantha D.",
      rating: 4.5,
      date: "2023-08-14",
      text: "I absolutely love this t‑shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go‑to shirt.",
      verified: true,
    },
    {
      id: 2,
      author: "Alex M.",
      rating: 5,
      date: "2023-08-15",
      text: "The t‑shirt exceeded my expectations! The colors are vibrant and the print quality is top‑notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t‑shirt definitely gets a thumbs up from me.",
      verified: true,
    },
    {
      id: 3,
      author: "Ethan R.",
      rating: 4.5,
      date: "2023-08-16",
      text: "This t‑shirt is a must‑have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      verified: true,
    },
    {
      id: 4,
      author: "Olivia P.",
      rating: 5,
      date: "2023-08-17",
      text: "As a UI/UX enthusiast, I value simplicity and functionality. This t‑shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t‑shirt stand out.",
      verified: true,
    },
    {
      id: 5,
      author: "Liam K.",
      rating: 4,
      date: "2023-08-18",
      text: "This t‑shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      verified: false,
    },
    {
      id: 6,
      author: "Ava H.",
      rating: 4.5,
      date: "2023-08-19",
      text: "I'm not just wearing a t‑shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      verified: false,
    },
  ],
};
