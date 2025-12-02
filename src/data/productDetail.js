import tsFront from "@/assets/images/ts-front.png";
import tsBack from "@/assets/images/ts-back.png";
import tsModel from "@/assets/images/ts-model.png";
import cloth1 from "@/assets/images/cloth 1.png";
import cloth2 from "@/assets/images/cloth 2.png";
import cloth3 from "@/assets/images/cloth 3.png";
import cloth4 from "@/assets/images/cloth 4.png";
import cloth5 from "@/assets/images/cloth 5.png";
import cloth6 from "@/assets/images/cloth 6.png";
import cloth7 from "@/assets/images/cloth 7.png";
import cloth8 from "@/assets/images/cloth 8.png";
import blackStriped from "@/assets/images/Polo with Contrast Trims.png";
import poloWthContrastTrims from "@/assets/images/Gradient Graphic T-shirt.png";
import poloWithTipping from "@/assets/images/Polo with Tipping Details.png";
import gradientGraphicTshirt from "@/assets/images/Black Striped T-shirt.png";
import relaxedOversizedTee from "@/assets/images/Relaxed Oversized Tee.jpeg";
import stripedSummerPolo from "@/assets/images/Striped Summer Polo.jpg";
import denimOvershirt from "@/assets/images/Denim Overshirt.jpeg";

export default [
  {
    id: 1,
    category: "t-shirts",
    name: "ONE LIFE GRAPHIC T-SHIRT",
    rating: 4.5,
    priceCurrent: 260,
    priceOriginal: 300,
    discountPercent: 40,
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
  },
  {
    id: 2,
    category: "casual",
    name: "T-shirt with Tape Details",
    rating: 4.5,
    priceCurrent: 120,
    priceOriginal: 150,
    discountPercent: 20,
    description:
      "A lightweight casual T-shirt featuring subtle tape detailing at the seams — breathable, comfortable and easy to style. Great for layering or wearing alone.",
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Olive", hex: "#6B6B49" },
      { name: "Charcoal", hex: "#333333" },
    ],
    sizes: [
      { label: "Small", inStock: true },
      { label: "Medium", inStock: true },
      { label: "Large", inStock: true },
      { label: "X-Large", inStock: false },
    ],
    images: [cloth1, cloth1, cloth1],
    faqs: [
      { q: "What fabric is used?", a: "100% cotton for a soft handfeel." },
      { q: "Care instructions?", a: "Machine wash cold, tumble low." },
      { q: "Is the tape detail stitched?", a: "Yes — reinforced stitching for durability." },
    ],
    reviews: [
      {
        id: 1,
        author: "Maya O.",
        rating: 5,
        date: "2025-06-06",
        text: "Perfect fit and the tape detail makes it feel premium.",
        verified: true,
      },
      {
        id: 2,
        author: "Dan J.",
        rating: 4,
        date: "2025-06-07",
        text: "Good value for money — fabric is soft.",
        verified: true,
      },
      {
        id: 3,
        author: "Ruth K.",
        rating: 4,
        date: "2025-06-08",
        text: "Colour slightly different on screen but still great.",
        verified: false,
      },
    ],
    date: "2025-06-01",
  },

  {
    id: 3,
    category: "casual",
    name: "Skinny Fit Jeans",
    rating: 3.5,
    priceCurrent: 240,
    priceOriginal: 260,
    discountPercent: 8,
    description:
      "A modern skinny fit jean cut from a stretch denim for all-day comfort. Slightly faded finish for a lived-in look.",
    colors: [
      { name: "Faded Blue", hex: "#5B7FA6" },
      { name: "Dark Indigo", hex: "#1F2A44" },
    ],
    sizes: [
      { label: "28", inStock: true },
      { label: "30", inStock: true },
      { label: "32", inStock: true },
      { label: "34", inStock: false },
    ],
    images: [cloth2, cloth2, cloth2],
    faqs: [
      {
        q: "Is the denim stretchable?",
        a: "Yes, contains a small percentage of elastane for comfort.",
      },
      { q: "Care instructions?", a: "Wash inside out to maintain colour." },
    ],
    reviews: [
      {
        id: 1,
        author: "Ike U.",
        rating: 3,
        date: "2025-05-29",
        text: "Nice fit but the length was slightly long for me.",
        verified: true,
      },
      {
        id: 2,
        author: "Tosin A.",
        rating: 4,
        date: "2025-06-02",
        text: "Comfortable and true to size.",
        verified: true,
      },
    ],
    date: "2025-05-28",
  },

  {
    id: 4,
    category: "formal",
    name: "Checkered Shirt",
    rating: 4.5,
    priceCurrent: 180,
    priceOriginal: 225,
    discountPercent: 20,
    description:
      "A sharp checkered shirt with a slim cut — designed for smart casual and office wear. Soft cotton-blend fabric for a crisp look.",
    colors: [
      { name: "Blue Check", hex: "#2B5F9E" },
      { name: "Grey Check", hex: "#6E7277" },
    ],
    sizes: [
      { label: "Small", inStock: true },
      { label: "Medium", inStock: true },
      { label: "Large", inStock: true },
      { label: "X-Large", inStock: true },
    ],
    images: [cloth3, cloth3, cloth3],
    faqs: [
      { q: "Is this shirt iron-friendly?", a: "Yes — low heat ironing recommended." },
      {
        q: "Does it have a chest pocket?",
        a: "No, this style is pocketless for a cleaner silhouette.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Sade L.",
        rating: 5,
        date: "2025-06-11",
        text: "Perfect for office days. Great fabric.",
        verified: true,
      },
      {
        id: 2,
        author: "Peter N.",
        rating: 4,
        date: "2025-06-12",
        text: "Very smart; I wore it to a meeting.",
        verified: true,
      },
    ],
    date: "2025-06-10",
  },

  {
    id: 5,
    category: "casual",
    name: "Sleeve Striped T-shirt",
    rating: 4.5,
    priceCurrent: 130,
    priceOriginal: 160,
    discountPercent: 19,
    description:
      "A casual T-shirt with bold sleeve stripes that add a sporty edge. Soft jersey knit and a relaxed fit make it an everyday favorite.",
    colors: [
      { name: "White/Navy", hex: "#FFFFFF" },
      { name: "Black/Red", hex: "#1A1A1A" },
    ],
    sizes: [
      { label: "Small", inStock: true },
      { label: "Medium", inStock: true },
      { label: "Large", inStock: true },
      { label: "X-Large", inStock: true },
    ],
    images: [cloth4, cloth4, cloth4],
    faqs: [
      { q: "Is the fit roomy?", a: "This is a regular relaxed fit." },
      { q: "Can I tumble dry?", a: "We recommend air drying to preserve the stripe print." },
    ],
    reviews: [
      {
        id: 1,
        author: "Chimamanda V.",
        rating: 5,
        date: "2025-06-06",
        text: "Nice weight and the stripes look great.",
        verified: true,
      },
      {
        id: 2,
        author: "Ben K.",
        rating: 4,
        date: "2025-06-09",
        text: "Colourfastness is good so far.",
        verified: false,
      },
    ],
    date: "2025-06-05",
  },

  {
    id: 6,
    category: "formal",
    name: "Vertical Stripped Shirt",
    rating: 5.0,
    priceCurrent: 212,
    priceOriginal: 232,
    discountPercent: 9,
    description:
      "A classic vertical striped shirt for formal occasions. Slim tailored cut with breathable fabric and a crisp collar.",
    colors: [
      { name: "Sky Blue", hex: "#CFE8FF" },
      { name: "Grey Stripe", hex: "#D8D8D8" },
    ],
    sizes: [
      { label: "Small", inStock: true },
      { label: "Medium", inStock: true },
      { label: "Large", inStock: true },
      { label: "X-Large", inStock: true },
    ],
    images: [cloth5, cloth5, cloth5],
    faqs: [
      { q: "Does it come pre-shrunk?", a: "Yes — pre-shrunk to reduce post-wash changes." },
      { q: "Is the collar stiff?", a: "Semi-stiff — holds shape but remains comfortable." },
    ],
    reviews: [
      {
        id: 1,
        author: "Emeka O.",
        rating: 5,
        date: "2025-05-16",
        text: "Excellent quality — perfect for events.",
        verified: true,
      },
      {
        id: 2,
        author: "Grace B.",
        rating: 5,
        date: "2025-05-20",
        text: "My go-to shirt for formal meetings.",
        verified: true,
      },
    ],
    date: "2025-05-15",
  },

  {
    id: 7,
    category: "casual",
    name: "Courage Graphic T-shirt",
    rating: 4.0,
    priceCurrent: 145,
    priceOriginal: 181,
    discountPercent: 20,
    description:
      "A bold graphic tee with a modern print and comfortable cotton jersey. Statement piece for casual outfits and layering.",
    colors: [
      { name: "Black", hex: "#0A0A0A" },
      { name: "Heather Grey", hex: "#BDBDBD" },
      { name: "Maroon", hex: "#6B0F0F" },
    ],
    sizes: [
      { label: "Small", inStock: true },
      { label: "Medium", inStock: true },
      { label: "Large", inStock: true },
      { label: "X-Large", inStock: true },
    ],
    images: [cloth6, cloth6, cloth6],
    faqs: [
      { q: "Is the print durable?", a: "Yes — printed with long-lasting inks." },
      { q: "Does it shrink?", a: "Minimal shrinkage when washed according to care label." },
    ],
    reviews: [
      {
        id: 1,
        author: "Aisha M.",
        rating: 4,
        date: "2025-06-13",
        text: "Great design, nice material.",
        verified: true,
      },
      {
        id: 2,
        author: "Kola D.",
        rating: 4,
        date: "2025-06-14",
        text: "Comfortable but the graphic is large.",
        verified: false,
      },
    ],
    date: "2025-06-12",
  },

  {
    id: 8,
    category: "sportswear",
    name: "Loose Fit Bermuda Shorts",
    rating: 3.0,
    priceCurrent: 80,
    priceOriginal: 100,
    discountPercent: 20,
    description:
      "Lightweight bermuda shorts with an elastic waistband for sport and leisure. Quick-dry fabric and side pockets.",
    colors: [
      { name: "Khaki", hex: "#C3B091" },
      { name: "Navy", hex: "#203253" },
    ],
    sizes: [
      { label: "Small", inStock: true },
      { label: "Medium", inStock: true },
      { label: "Large", inStock: true },
      { label: "X-Large", inStock: false },
    ],
    images: [cloth7, cloth7, cloth7],
    faqs: [
      { q: "Are pockets deep?", a: "Yes — deep enough for phones and keys." },
      { q: "Suitable for running?", a: "Yes — designed for light workouts and casual wear." },
    ],
    reviews: [
      {
        id: 1,
        author: "Femi S.",
        rating: 3,
        date: "2025-05-21",
        text: "Comfortable but a bit baggy.",
        verified: true,
      },
      {
        id: 2,
        author: "Lola R.",
        rating: 3,
        date: "2025-05-22",
        text: "Good for beach days.",
        verified: false,
      },
    ],
    date: "2025-05-20",
  },

  {
    id: 9,
    category: "casual",
    name: "Faded Skinny Jeans",
    rating: 4.5,
    priceCurrent: 210,
    priceOriginal: 263,
    discountPercent: 20,
    description:
      "A trendy pair of skinny jeans with controlled fading and a stretch blend for comfort. Slim silhouette and modern fit.",
    colors: [
      { name: "Light Blue", hex: "#7DA6D9" },
      { name: "Mid Indigo", hex: "#2E506E" },
    ],
    sizes: [
      { label: "28", inStock: true },
      { label: "30", inStock: true },
      { label: "32", inStock: true },
      { label: "34", inStock: true },
    ],
    images: [cloth8, cloth8, cloth8],
    faqs: [
      {
        q: "Do they stretch out during the day?",
        a: "Designed to retain shape with minimal stretch.",
      },
      { q: "Are these true to size?", a: "We recommend ordering your normal waist size." },
    ],
    reviews: [
      {
        id: 1,
        author: "Ngozi P.",
        rating: 5,
        date: "2025-06-09",
        text: "Looks great and holds shape.",
        verified: true,
      },
      {
        id: 2,
        author: "John C.",
        rating: 4,
        date: "2025-06-10",
        text: "Nice wash and colour.",
        verified: false,
      },
    ],
    date: "2025-06-08",
  },

  {
    id: 10,
    category: "casual",
    name: "Polo with Contrast Trims",
    rating: 4.0,
    priceCurrent: 212,
    priceOriginal: 242,
    discountPercent: 12,
    description:
      "Smart-casual polo featuring contrast tipping on the collar and sleeves. Soft pique knit with a neat finish.",
    colors: [
      { name: "Navy/White", hex: "#23324A" },
      { name: "Olive/Black", hex: "#556B44" },
    ],
    sizes: [
      { label: "Small", inStock: true },
      { label: "Medium", inStock: true },
      { label: "Large", inStock: true },
      { label: "X-Large", inStock: true },
    ],
    images: [poloWthContrastTrims, poloWthContrastTrims],
    faqs: [
      { q: "Material?", a: "Cotton pique — breathable and durable." },
      { q: "Can it be ironed?", a: "Yes, at low to medium heat." },
    ],
    reviews: [
      {
        id: 1,
        author: "Yemi A.",
        rating: 4,
        date: "2025-06-19",
        text: "Smart and durable.",
        verified: true,
      },
      {
        id: 2,
        author: "Sami B.",
        rating: 4,
        date: "2025-06-20",
        text: "I like the fit overall.",
        verified: false,
      },
    ],
    date: "2025-06-18",
  },

  {
    id: 11,
    category: "casual",
    name: "Gradient Graphic T-shirt",
    rating: 3.5,
    priceCurrent: 145,
    priceOriginal: 181,
    discountPercent: 20,
    description:
      "A lightweight tee with a gradient graphic print for a contemporary look. Comfortable fit, great for everyday wear.",
    colors: [
      { name: "Sunset", hex: "#FFB07C" },
      { name: "Steel", hex: "#9AA7B0" },
    ],
    sizes: [
      { label: "Small", inStock: true },
      { label: "Medium", inStock: true },
      { label: "Large", inStock: true },
      { label: "X-Large", inStock: false },
    ],
    images: [gradientGraphicTshirt, gradientGraphicTshirt],
    faqs: [
      { q: "Is the print soft?", a: "Yes — printed with soft-hand inks." },
      { q: "Does it fade quickly?", a: "Follow care instructions; colours are stable." },
    ],
    reviews: [
      {
        id: 1,
        author: "Zainab M.",
        rating: 3,
        date: "2025-06-21",
        text: "Nice look but size runs slightly small.",
        verified: false,
      },
      {
        id: 2,
        author: "Victor L.",
        rating: 4,
        date: "2025-06-22",
        text: "Great graphic and good fabric.",
        verified: true,
      },
    ],
    date: "2025-06-20",
  },

  {
    id: 12,
    category: "formal",
    name: "Polo with Tipping Details",
    rating: 4.5,
    priceCurrent: 180,
    priceOriginal: 225,
    discountPercent: 20,
    description:
      "Classic polo with refined tipping on collar edges. Designed for office-friendly smart casual looks.",
    colors: [
      { name: "White/Navy", hex: "#FFFFFF" },
      { name: "Olive/Navy", hex: "#556B44" },
    ],
    sizes: [
      { label: "Small", inStock: true },
      { label: "Medium", inStock: true },
      { label: "Large", inStock: true },
      { label: "X-Large", inStock: true },
    ],
    images: [poloWithTipping, poloWithTipping],
    faqs: [
      { q: "Is the fabric breathable?", a: "Yes — classic cotton pique." },
      {
        q: "Does the tipping come in different colours?",
        a: "This style ships with the shown contrasting tipping.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Ada C.",
        rating: 5,
        date: "2025-05-31",
        text: "Excellent detail and comfortable fabric.",
        verified: true,
      },
      {
        id: 2,
        author: "Kingsley H.",
        rating: 4,
        date: "2025-06-02",
        text: "Looks premium and fits well.",
        verified: true,
      },
    ],
    date: "2025-05-30",
  },

  {
    id: 13,
    category: "casual",
    name: "Black Striped T-shirt",
    rating: 5,
    priceCurrent: 120,
    priceOriginal: 150,
    discountPercent: 20,
    description:
      "Timeless black tee with subtle stripe accents. Soft, durable and perfect for everyday wear.",
    colors: [
      { name: "Black", hex: "#0A0A0A" },
      { name: "Dark Grey", hex: "#2F2F2F" },
    ],
    sizes: [
      { label: "Small", inStock: true },
      { label: "Medium", inStock: true },
      { label: "Large", inStock: true },
      { label: "X-Large", inStock: true },
    ],
    images: [blackStriped, blackStriped],
    faqs: [
      { q: "Material?", a: "100% combed cotton." },
      { q: "How does it wash?", a: "Wash inside out on a gentle cycle." },
    ],
    reviews: [
      {
        id: 1,
        author: "Uche I.",
        rating: 5,
        date: "2025-06-16",
        text: "Fantastic quality and cut.",
        verified: true,
      },
      {
        id: 2,
        author: "Bintu S.",
        rating: 5,
        date: "2025-06-17",
        text: "Black stayed rich after several washes.",
        verified: true,
      },
    ],
    date: "2025-06-15",
  },
  {
    id: 14,
    category: "casual",
    name: "Relaxed Oversized Tee",
    rating: 4.2,
    priceCurrent: 140,
    priceOriginal: 180,
    discountPercent: 22,
    description:
      "A soft, relaxed-fit oversized tee cut for effortless styling. Breathable cotton blend, dropped shoulders and a slightly longer hem for modern layering. Perfect for casual days and streetwear looks.",
    colors: [
      { name: "Cloud White", hex: "#F7F7F7" },
      { name: "Sand", hex: "#D9C6AA" },
      { name: "Charcoal", hex: "#2F2F2F" },
    ],
    sizes: [
      { label: "Small", inStock: true },
      { label: "Medium", inStock: true },
      { label: "Large", inStock: true },
      { label: "X-Large", inStock: true },
    ],
    images: [relaxedOversizedTee],
    faqs: [
      { q: "What’s the fabric?", a: "60% cotton, 40% modal for extra softness." },
      { q: "Is it pre-shrunk?", a: "Yes — minimal shrinkage when washed per care instructions." },
      {
        q: "How does it fit?",
        a: "Designed oversized — if you prefer a regular fit, size down one.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Nora A.",
        rating: 5,
        date: "2025-07-12",
        text: "Lovely fabric and great cut. Oversized but still looks tidy — great for layering.",
        verified: true,
      },
      {
        id: 2,
        author: "Sam T.",
        rating: 4,
        date: "2025-07-13",
        text: "Comfy and soft. I sized down to medium and it fits perfectly.",
        verified: false,
      },
      {
        id: 3,
        author: "Ibrahim K.",
        rating: 4,
        date: "2025-07-14",
        text: "Good value for the price. Color is slightly lighter in person than on screen.",
        verified: true,
      },
    ],
    date: "2025-07-10",
  },

  {
    id: 15,
    category: "casual",
    name: "Striped Summer Polo",
    rating: 4.6,
    priceCurrent: 195,
    priceOriginal: 245,
    discountPercent: 20,
    description:
      "A lightweight polo built for warm days — breathable piqué knit with tonal stripes and a soft ribbed collar. Smart-casual by design, it pairs well with chinos or denim.",
    colors: [
      { name: "Navy / Cream", hex: "#0F2B4C" },
      { name: "Stone / White", hex: "#E6E1D6" },
      { name: "Olive / Beige", hex: "#58634A" },
    ],
    sizes: [
      { label: "Small", inStock: true },
      { label: "Medium", inStock: true },
      { label: "Large", inStock: true },
      { label: "X-Large", inStock: false },
    ],
    images: [stripedSummerPolo],
    faqs: [
      { q: "What fabric is used?", a: "100% premium cotton piqué." },
      { q: "Are buttons reinforced?", a: "Yes — corozo-style buttons with reinforced stitching." },
      { q: "Can I iron it?", a: "Yes, iron on low-medium heat; avoid high heat on ribbing." },
    ],
    reviews: [
      {
        id: 1,
        author: "Kemi O.",
        rating: 5,
        date: "2025-07-09",
        text: "Smart look and breathable — wore it for a weekend outing and got lots of compliments.",
        verified: true,
      },
      {
        id: 2,
        author: "Daniel R.",
        rating: 4.5,
        date: "2025-07-10",
        text: "Great quality. Slightly slimmer than expected — I recommend checking the size guide.",
        verified: true,
      },
      {
        id: 3,
        author: "Yusuf H.",
        rating: 4,
        date: "2025-07-11",
        text: "Nice fabric, good weight for summer evenings. Color stayed after wash.",
        verified: false,
      },
    ],
    date: "2025-07-08",
  },

  {
    id: 16,
    category: "formal",
    name: "Denim Overshirt",
    rating: 4.8,
    priceCurrent: 320,
    priceOriginal: 400,
    discountPercent: 20,
    description:
      "A tailored denim overshirt crafted from rigid-wash denim with refined stitching and classic chest pockets. Wear it as a lightweight jacket or layered over shirts for a clean, elevated look.",
    colors: [
      { name: "Indigo", hex: "#1F3B63" },
      { name: "Mid Wash", hex: "#4B6A8A" },
      { name: "Black Wash", hex: "#1E1E1E" },
    ],
    sizes: [
      { label: "Small", inStock: false },
      { label: "Medium", inStock: true },
      { label: "Large", inStock: true },
      { label: "X-Large", inStock: true },
    ],
    images: [denimOvershirt],
    faqs: [
      {
        q: "Is the denim rigid or stretch?",
        a: "Rigid denim with a small amount of finishing for comfort.",
      },
      {
        q: "How should I care for it?",
        a: "Wash inside out, cold wash, hang to dry to preserve color.",
      },
      {
        q: "Does it run true to size?",
        a: "Yes — fits true to size; choose outerwear size if layering thicker knits.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Tunde M.",
        rating: 5,
        date: "2025-07-01",
        text: "Top-quality denim and clean finishing. Strongly recommend if you want a staple layering piece.",
        verified: true,
      },
      {
        id: 2,
        author: "Grace L.",
        rating: 4.5,
        date: "2025-07-02",
        text: "Stylish and versatile. Slightly heavy for very hot days but perfect for evenings.",
        verified: true,
      },
      {
        id: 3,
        author: "Peter S.",
        rating: 4.5,
        date: "2025-07-03",
        text: "Excellent cut and very durable. The black wash looks very modern.",
        verified: false,
      },
    ],
    date: "2025-06-30",
  },
];
