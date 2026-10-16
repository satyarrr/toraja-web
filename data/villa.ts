// ✏️ EDIT SEMUA KONTEN DI SINI — tidak perlu sentuh kode lain.

export const villa = {
  name: "Toraja Villa",
  wifi: { name: "torajavilla5G", password: "p@ddyv1ew" },
  whatsapp: "628563778779", // format internasional tanpa +
};

export const slides = [
  {
    image: "/images/hero-1.jpg",
    title: "Welcome to Toraja Villa",
    subtitle: "Your second home in Bali",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Private pool & jacuzzi",
    subtitle: "Swim or soak anytime, 24 hours a day",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Sunset views from your villa",
    subtitle: "Golden evenings, right at your doorstep",
  },
];

export const about = {
  title: "About our villa",
  paragraphs: [
    "Villa Toraja is a beautiful four-bedroom private villa located in the peaceful Babakan area of Canggu, Bali. Combining tropical charm with distinctive architectural design, the villa offers a relaxing atmosphere for families and groups of friends seeking privacy, comfort, and a memorable Bali getaway. Its tranquil surroundings provide a welcome escape while keeping guests within reach of Canggu’s popular cafés, restaurants, and beaches.",
    "The villa features a private swimming pool & jacuzzi, spacious living and dining areas, a fully equipped kitchen, and comfortable bedrooms with en-suite bathrooms. Guests can unwind by the pool, enjoy quality time in the open living space, or relax in the hot tub. With its blend of comfort, privacy, and tropical surroundings, Villa Toraja is an inviting home away from home in Canggu.",
  ],
  info: [
    { label: "Check-in", value: "2:00 PM" },
    { label: "Check-out", value: "12:00 PM" },
    { label: "Quiet hours", value: "10:00 PM – 7:00 AM" },
    { label: "Emergency contact", value: "+62 856-3778-779" },
  ],
  rules: [
    "No smoking inside the rooms",
    "Please turn off the AC when you leave the villa",
    "Parties must permit prior approval from the villa manager",
  ],
};

export const breakfast = {
  title: "Free Breakfast",
  menuName: "Simple Breakfast Menu Toraja Villa",
  note: "Served 7:30 – 10:30 AM. Please order the day before via WhatsApp.",
  image: "/images/breakfast.jpg",
  items: [
    { name: "Toast", desc: "Served with jam and butter" },
    { name: "Eggs", desc: "Scrambled or omelette" },
    {
      name: "Fruit slices",
      desc: "Papaya, dragon fruit, mango (seasonal), watermelon, pineapple",
    },
    { name: "Orange juice", desc: "" },
    {
      name: "Tea or coffee",
      desc: "Lipton tea, cappuccino, black coffee, or latte",
    },
  ],
  options: {
    eggs: ["Scrambled eggs", "Omelette"],
    drinks: ["Lipton tea", "Cappuccino", "Black coffee", "Latte"],
    times: ["07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30"],
    maxPax: 10,
  },
};

// price dalam ribuan rupiah: 265 = Rp 265.000
export const spa = {
  title: "Spa & Beauty",
  intro:
    "Massages, facials, and beauty treatments in the comfort of your villa, by experienced local therapists.",
  image: "/images/spa.jpg",
  hours: "Open daily, 8 AM – 8 PM",
  categories: [
    {
      id: "body",
      label: "Body massage",
      items: [
        {
          name: "Balinese Massage",
          desc: "Stretches, acupressure, reflexology, and aromatherapy.",
          duration: "1 hour",
          price: 265,
        },
        {
          name: "Swedish Massage",
          desc: "Full body massage with gentle pressure.",
          duration: "1 hour",
          price: 265,
        },
        {
          name: "Shiatsu Massage",
          desc: "Full body massage without oil.",
          duration: "1 hour",
          price: 315,
        },
        {
          name: "Deep Tissue / Strong Massage",
          desc: "Energizing massage with deep pressure and stretching to relieve tension, boost circulation, and improve flexibility.",
          duration: "1 hour",
          price: 315,
        },
        {
          name: "Aromatherapy Massage",
          desc: "Full body massage with a choice of warm oil.",
          duration: "1 hour",
          price: 315,
        },
        {
          name: "Hot Stone Massage",
          desc: "Full body massage with deeply relaxing warm stones along the body.",
          duration: "1 hour",
          price: 315,
        },
        {
          name: "Sunburn Massage",
          desc: "Gentle aloe vera massage to soothe sunburned skin.",
          duration: "1 hour",
          price: 315,
        },
        {
          name: "Hot Herbal Massage",
          desc: "Full body massage using warm herbal spice and clove oil.",
          duration: "1 hour",
          price: 315,
        },
        {
          name: "Foot Massage",
          desc: "Foot reflexology with pressure on foot points to relieve pain.",
          duration: "45 minutes",
          price: 265,
        },
        {
          name: "Back, Neck & Shoulder Massage",
          duration: "45 minutes",
          price: 265,
        },
        { name: "Pregnancy Massage", duration: "1 hour", price: 265 },
        { name: "Kids Massage", duration: "45 minutes", price: 225 },
        {
          name: "Twin (Four Hand) Massage",
          desc: "Two therapists massage in sync to relax your mind and body.",
          duration: "1 hour",
          price: 490,
        },
      ],
    },
    {
      id: "package",
      label: "Toraja package",
      items: [
        {
          name: "Package Toraja I",
          desc: "Balinese massage, body scrub, and body mask.",
          duration: "1.5 hours",
          price: 450,
        },
        {
          name: "Package Toraja II",
          desc: "Balinese massage, body scrub, and traditional facial (1 hour).",
          duration: "2 hours",
          price: 565,
        },
      ],
    },
    {
      id: "facial",
      label: "Facial",
      items: [
        { name: "Traditional Facial", desc: "For all skin types.", price: 240 },
        { name: "Sari Ayu Rose Facial", desc: "For dry skin.", price: 270 },
        { name: "Sari Ayu Lemon Facial", desc: "For oily skin.", price: 270 },
        { name: "Biokos Aloe Vera Facial", desc: "Vitality.", price: 300 },
        { name: "Biokos Seaweed Facial", desc: "Anti-wrinkle.", price: 300 },
        {
          name: "Nu Skin Galvanic Facial / Lifting",
          desc: "Face lift.",
          price: 450,
        },
        {
          name: "Body Scrub",
          desc: "Includes massage.",
          duration: "1 hour",
          price: 270,
        },
        { name: "Ear Candle", price: 225 },
      ],
    },
    {
      id: "hair",
      label: "Hair",
      items: [
        { name: "Creambath / Head Massage", price: 240 },
        { name: "Hair Mask (Short)", price: 300 },
        { name: "Hair Mask (Medium)", price: 375 },
        { name: "Hair Mask (Long)", price: 450 },
        { name: "Hair Braiding / Plaiting", price: 450, from: true },
      ],
    },
    {
      id: "nail",
      label: "Nail",
      items: [
        { name: "Pedicure without polish", price: 190 },
        { name: "Manicure without polish", price: 190 },
        { name: "Pedicure with normal polish", price: 225 },
        { name: "Manicure with normal polish", price: 225 },
        { name: "Pedicure with gel polish", price: 270 },
        { name: "Manicure with gel polish", price: 270 },
        { name: "Polish gel", price: 115 },
        { name: "Polish normal", price: 75 },
        { name: "Remove gel", price: 75 },
        { name: "Remove normal", price: 45 },
      ],
    },
  ],
};

// Peta di-embed dari Google Maps lewat kata pencarian — tidak butuh API key.
// Ganti `query` dengan nama tempat + area, misalnya "Warung Eny Seminyak".
export const nearby = {
  title: "Recommendations nearby",
  tabs: [
    {
      id: "restaurant",
      label: "Restaurants",
      categories: ["Asian", "Western", "Cafe & brunch"],
    },
    { id: "activity", label: "Activities" },
    { id: "bar", label: "Bars" },
  ],
  places: {
    restaurant: [
      {
        name: "Seaweed Resto",
        category: ["Asian", "Western"],
        note: "Local Indonesian food and Western Food, near Batu Bolong beach",
        query: "Seaweed Resto Canggu",
      },
      {
        name: "Ji Terrace by the Sea",
        category: "Asian",
        note: "Rooftop Asian fusion, sushi rolls, near Batu Bolong beach",
        query: "Ji Terrace by the Sea Canggu",
      },
      {
        name: "Yen Social",
        category: "Asian",
        note: "Japanese-style yakiniku grill in Pererenan",
        query: "Yen Social Pererenan Canggu",
      },
      {
        name: "Sa'Mesa",
        category: "Western",
        note: "Social Italian dinner club, book ahead",
        query: "Sa'Mesa Canggu",
      },
      {
        name: "Gather",
        category: "Cafe & brunch",
        note: "Popular brunch spot in Pererenan",
        query: "Gather Pererenan Canggu",
      },
      {
        name: "Kopikota",
        category: "Cafe & brunch",
        note: "Coffee spot, a short drive from the villa",
        query: "Kopikota Canggu",
      },
    ],
    activity: [
      {
        name: "Bali Padel Academy",
        note: "Padel court, 5 min drive",
        query: "Bali Padel Academy Canggu",
      },
      {
        name: "Surf at Batu Bolong",
        note: "Beginner-friendly waves, lessons available on the beach",
        query: "Batu Bolong Beach Canggu",
      },
      {
        name: "Sunset at La Brisa",
        note: "Echo Beach, best from late afternoon",
        query: "La Brisa Bali Echo Beach",
      },
      {
        name: "Atlas Beach Club",
        note: "Daybeds, pool, and DJ sets",
        query: "Atlas Beach Club Canggu",
      },
      {
        name: "Tanah Lot Temple",
        note: "Sea temple, about 10 km away. Go before sunset",
        query: "Tanah Lot Temple",
      },
    ],
    bar: [
      {
        name: "Meimei",
        note: "Cocktails and late-night food, open until 2 AM",
        query: "Meimei Canggu",
      },
      {
        name: "Old Man's",
        note: "Batu Bolong classic, lively at night",
        query: "Old Man's Canggu",
      },
      {
        name: "Sandbar",
        note: "Late-night spot on Batu Bolong",
        query: "Sandbar Canggu",
      },
    ],
  } as Record<
    string,
    {
      name: string;
      note: string;
      query: string;
      category?: string | string[];
      link?: string;
    }[]
  >,
};
