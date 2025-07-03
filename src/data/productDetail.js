import tsFront from "@/assets/images/ts-front.png";
import tsBack from "@/assets/images/ts-back.png";
import tsModel from "@/assets/images/ts-model.png";

export const productDetail = {
  id: "abc123",
  name: "One Life Graphic T-Shirt",
  rating: 4.5,
  price: 260,
  originalPrice: 300,
  discountPercent: 40,
  description:
    "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  colors: [
    { name: "Olive", hex: "#4F4631" },
    { name: "Forest Green", hex: "#314F4A" },
    { name: "Navy", hex: "#31344F" },
  ],
  sizes: [
    { label: "Small", inStock: true },
    { label: "Medium", inStock: true },
    { label: "Large", inStock: true },
    { label: "X-Large", inStock: true },
  ],
  images: [tsFront, tsBack, tsModel],
  faqs: [
    { q: "What’s the fabric?", a: "100% cotton." },
    { q: "Machine washable?", a: "Yes, gentle cycle." },
  ],
  reviews: [
    {
      id: 1,
      author: "Samatha D",
      rating: 4.5,
      date: "August 14, 2023",
      text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    },
    {
      id: 2,
      author: "Alex M.",
      rating: 5,
      date: "August 15, 2023",
      text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    },
    {
      id: 3,
      author: "Ethan R.",
      rating: 4.5,
      date: "August 16, 2023",
      text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    },
    {
      id: 4,
      author: "Olivia P.",
      rating: 5,
      date: "August 17, 2023",
      text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    },
    {
      id: 5,
      author: "Liam K.",
      rating: 4,
      date: "August 18, 2023",
      text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    },
    {
      id: 6,
      author: "Ava H.",
      rating: 4.5,
      date: "August 19, 2023",
      text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    },
  ],
};
