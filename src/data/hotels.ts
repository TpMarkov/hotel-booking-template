// Villa Serenità Collection - Original Boutique Hotel Brand Data

export interface Hotel {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  location: {
    city: string;
    country: string;
    address: string;
    coordinates: { lat: number; lng: number };
  };
  images: {
    hero: string;
    gallery: string[];
    rooms: string[];
  };
  amenities: string[];
  experiences: Experience[];
  rooms: Room[];
  pricing: {
    startingFrom: number;
    currency: string;
  };
  awards: string[];
  established: number;
}

export interface Experience {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  image: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  size: string;
  maxGuests: number;
  bedType: string;
  price: number;
  amenities: string[];
  images: string[];
  available: boolean;
}

export const hotels: Hotel[] = [
  {
    id: "villa-serena-amaraldo",
    name: "Villa Serena Amaldo",
    tagline: "Where Tuscan Soul Meets Timeless Grace",
    description:
      "A 17th-century villa nestled in the rolling hills of Chianti, offering an authentic Tuscan retreat with modern luxury.",
    fullDescription:
      "Nestled amid the legendary vineyards of Chianti, Villa Serena Amaldo embodies the essence of Tuscan hospitality. Originally built in 1647 as a aristocratic summer residence, our villa has been meticulously restored to preserve its historic character while introducing contemporary comforts. Each of our 12 suites tells a story through antique furnishings, original frescoes, and carefully curated artworks.",
    location: {
      city: "Florence",
      country: "Italy",
      address: "Via della Vigna 45, 50022 Greve in Chianti",
      coordinates: { lat: 43.5828, lng: 11.3171 },
    },
    images: {
      hero: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      ],
      rooms: [
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
      ],
    },
    amenities: [
      "Infinity Pool overlooking Vineyards",
      "Michelin-starred Restaurant",
      "Wine Cellar with 800+ Labels",
      "Spa with Thermal Treatments",
      "Cooking Academy",
      "Helicopter Pad",
      "Private Vineyard Tours",
      "Art Collection Viewing",
    ],
    experiences: [
      {
        id: "truffle-hunting",
        name: "Truffle Hunting Adventure",
        description:
          "Join our expert truffle hunter and his trained dogs through the ancient oak forests surrounding the villa.",
        duration: "Half Day",
        price: 280,
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      },
      {
        id: "wine-pairing",
        name: "Sommelier Wine Pairing",
        description:
          "An intimate tasting experience featuring rare vintages from our cellar paired with artisanal cheeses.",
        duration: "2 Hours",
        price: 150,
        image:
          "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
      },
    ],
    rooms: [
      {
        id: "villa-serena-siena",
        name: "Siena Suite",
        description:
          "A spacious corner suite featuring panoramic views of the Chianti hills and original 18th-century ceiling frescoes.",
        size: "65 m²",
        maxGuests: 2,
        bedType: "King Size",
        price: 850,
        amenities: [
          "Private Terrace",
          "Frescoed Ceiling",
          "Rain Shower",
          "Soaking Tub",
        ],
        images: [
          "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80",
        ],
        available: true,
      },
      {
        id: "villa-serena-valdorcia",
        name: "Val d'Orcia Room",
        description:
          "Elegantly appointed room with terracotta floors, antique furniture, and stunning valley views.",
        size: "45 m²",
        maxGuests: 2,
        bedType: "Queen Size",
        price: 580,
        amenities: [
          "Valley View",
          "Antique Furnishings",
          "En-suite Bath",
          "Minibar",
        ],
        images: [
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
        ],
        available: true,
      },
    ],
    pricing: {
      startingFrom: 580,
      currency: "EUR",
    },
    awards: [
      "Michelin Guide Recommended 2024",
      "Condé Nast Traveller Gold List 2023",
      "Small Luxury Hotels Member",
    ],
    established: 2015,
  },
  {
    id: "hotel-ciel-azur",
    name: "Hotel Ciel Azur",
    tagline: "Mediterranean Elegance Reimagined",
    description:
      "A cliffside sanctuary on the French Riviera where the azure sea meets sophisticated French art de vivre.",
    fullDescription:
      "Perched dramatically on the Côte d'Azur cliffs, Hotel Ciel Azur offers an intimate escape from the ordinary. Built in 1928 by a famed Monegasque architect, our property has been thoughtfully expanded to include 18 Seafront Suites, each with private access to the Mediterranean. Our Michelin-starred restaurant celebrates Provençal ingredients, while our private beach club provides exclusive waterfront relaxation.",
    location: {
      city: "Cannes",
      country: "France",
      address: "Boulevard Frédéric Mistral 12, 06400 Cannes",
      coordinates: { lat: 43.5528, lng: 7.0174 },
    },
    images: {
      hero: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
        "https://images.unsplash.com/photo-1571896349842-68c218a7cf3e?w=800&q=80",
      ],
      rooms: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
        "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80",
      ],
    },
    amenities: [
      "Private Beach Access",
      "Michelin-starred Restaurant",
      "Rooftop Infinity Pool",
      "Spa with Hydrotherapy",
      "Yacht Charter Service",
      "Valet Parking",
      "Personal Butler",
      "Art Gallery",
    ],
    experiences: [
      {
        id: "yacht-cruise",
        name: "Private Yacht Cruise",
        description:
          "Sunset cruise along the coast aboard our vintage wooden yacht with champagne service.",
        duration: "3 Hours",
        price: 450,
        image:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      },
      {
        id: "perfume-workshop",
        name: "Grasse Perfume Creation",
        description:
          "Private workshop in Grasse with a master perfumer to create your signature scent.",
        duration: "Full Day",
        price: 380,
        image:
          "https://images.unsplash.com/photo-1595425970339-82031e0b1d04?w=800&q=80",
      },
    ],
    rooms: [
      {
        id: "ciel-azur-suite",
        name: "Royal Azure Suite",
        description:
          "Our crown jewel featuring a wraparound terrace, private plunge pool, and unobstructed sea views.",
        size: "120 m²",
        maxGuests: 2,
        bedType: "King Size",
        price: 2400,
        amenities: [
          "Private Pool",
          "Panoramic Terrace",
          "Butler Service",
          "Jacuzzi",
        ],
        images: [
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
        ],
        available: true,
      },
      {
        id: "ciel-azur-terrasse",
        name: "Mediterranean Terrasse",
        description:
          "Bright and airy suite with floor-to-ceiling windows opening onto your private sea-view terrace.",
        size: "75 m²",
        maxGuests: 2,
        bedType: "King Size",
        price: 1450,
        amenities: [
          "Sea View Terrace",
          "Wet Bar",
          "Soaking Tub",
          "Walk-in Closet",
        ],
        images: [
          "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80",
        ],
        available: true,
      },
    ],
    pricing: {
      startingFrom: 1200,
      currency: "EUR",
    },
    awards: [
      "Two Michelin Stars 2024",
      "Forbes Travel Guide Five Star 2023",
      "Relais & Châteaux Member",
    ],
    established: 2018,
  },
  {
    id: "casa-blanca-azulejos",
    name: "Casa Blanca Azulejos",
    tagline: "The Soul of Andalusia in Every Tile",
    description:
      "A converted 16th-century palace in Granada's Albayzín district, where Moorish heritage meets contemporary luxury.",
    fullDescription:
      "In the heart of Granada's ancient Albayzín neighborhood, Casa Blanca Azulejos stands as a testament to Spain's rich multicultural heritage. This former Nasrid palace has been sensitively transformed into an 8-suite boutique hotel, where original Mudéjar tilework, carved cedar ceilings, and intricate stucco work coexist with contemporary design. Wake to the call to prayer from the nearby Alhambra, and spend evenings in our courtyard garden surrounded by centuries of history.",
    location: {
      city: "Granada",
      country: "Spain",
      address: "Calle de los Azulejos 8, 18010 Granada",
      coordinates: { lat: 37.176, lng: -3.5881 },
    },
    images: {
      hero: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
        "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      ],
      rooms: [
        "https://images.unsplash.com/photo-1591088398332-c5877d02700d?w=800&q=80",
        "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&q=80",
      ],
    },
    amenities: [
      "Courtyard Garden",
      "Rooftop Terrace with Alhambra Views",
      "Tapas Restaurant",
      "Hammam Spa",
      "Flamenco Evening Experiences",
      "Private Alhambra Tours",
      "Moroccan Tea Service",
      "Library with Historic Texts",
    ],
    experiences: [
      {
        id: "alhambra-private",
        name: "Private Alhambra Experience",
        description:
          "After-hours access to the Nasrid Palaces with our expert historian guide.",
        duration: "3 Hours",
        price: 320,
        image:
          "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80",
      },
      {
        id: "flamenco-encounter",
        name: "Flamenco in the Courtyard",
        description:
          "Intimate performance by acclaimed local artists in our historic courtyard.",
        duration: "1.5 Hours",
        price: 85,
        image:
          "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80",
      },
    ],
    rooms: [
      {
        id: "casa-nasrid",
        name: "Nasrid Royal Suite",
        description:
          "Our most luxurious accommodation featuring original 16th-century tilework and a private terrace with Alhambra views.",
        size: "90 m²",
        maxGuests: 2,
        bedType: "King Size",
        price: 680,
        amenities: [
          "Alhambra View Terrace",
          "Original Tilework",
          "Hammam-style Bath",
          "Living Room",
        ],
        images: [
          "https://images.unsplash.com/photo-1591088398332-c5877d02700d?w=800&q=80",
        ],
        available: true,
      },
      {
        id: "casa-azulejo",
        name: "Azulejo Suite",
        description:
          "Named for the exquisite tile panels that adorn its walls, blending historical artistry with modern comfort.",
        size: "55 m²",
        maxGuests: 2,
        bedType: "Queen Size",
        price: 480,
        amenities: ["Garden View", "Original Art", "Rain Shower", "Fireplace"],
        images: [
          "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&q=80",
        ],
        available: true,
      },
    ],
    pricing: {
      startingFrom: 420,
      currency: "EUR",
    },
    awards: [
      "Condé Nast Traveller Hot List 2023",
      "National Geographic Unique Lodges",
      "Heritage Hotels of Spain",
    ],
    established: 2020,
  },
  {
    id: "post-romantico",
    name: "Post Romantico",
    tagline: "Alpine Dreams in the Dolomites",
    description:
      "A former 19th-century posting house transformed into a refined mountain retreat, where adventure meets alpine sophistication.",
    fullDescription:
      "Perched at 1,400 meters in the Dolomites, Post Romantico has welcomed travelers since 1847. Originally serving as a resting point for travelers crossing the alpine passes, our hotel has evolved into a 14-suite sanctuary that celebrates mountain heritage while embracing contemporary luxury. Ski-in/ski-out access in winter and extensive hiking trails in summer frame an experience of pure alpine magic.",
    location: {
      city: "Cortina d'Ampezzo",
      country: "Italy",
      address: "Corso Italia 62, 32043 Cortina d'Ampezzo",
      coordinates: { lat: 46.5456, lng: 12.1362 },
    },
    images: {
      hero: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      ],
      rooms: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
        "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=800&q=80",
      ],
    },
    amenities: [
      "Ski-in/Ski-out Access",
      "Alpine Spa with Heated Pool",
      "Michelin-starred Mountain Cuisine",
      "Private Ski Guides",
      "Mountain Photography Walks",
      "Wine Cellar",
      "Fireplace Lounges",
      "Helicopter Transfers",
    ],
    experiences: [
      {
        id: "dolomites-sunrise",
        name: "Dolomites Sunrise Hike",
        description:
          "Guided sunrise hike to Lagazuoi with champagne breakfast at the summit.",
        duration: "4 Hours",
        price: 195,
        image:
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
      },
      {
        id: "ski-private",
        name: "Private Ski Guide Experience",
        description:
          "Full-day guided skiing with our certified instructor exploring the Dolomites' best terrain.",
        duration: "Full Day",
        price: 450,
        image:
          "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80",
      },
    ],
    rooms: [
      {
        id: "post-royal",
        name: "Royal Mountain Suite",
        description:
          "Expansive corner suite with panoramic mountain views, featuring a freestanding fireplace and private sauna.",
        size: "110 m²",
        maxGuests: 2,
        bedType: "King Size",
        price: 1850,
        amenities: [
          "Private Sauna",
          "Fireplace",
          "Mountain Views",
          "Butler Service",
        ],
        images: [
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
        ],
        available: true,
      },
      {
        id: "post-alpine",
        name: "Alpine Classic Room",
        description:
          "Cozy retreat with traditional Ladin furnishings and stunning views of the Tofane mountains.",
        size: "42 m²",
        maxGuests: 2,
        bedType: "Queen Size",
        price: 680,
        amenities: [
          "Mountain View",
          "Traditional Decor",
          "Soaking Tub",
          "Balcony",
        ],
        images: [
          "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=800&q=80",
        ],
        available: true,
      },
    ],
    pricing: {
      startingFrom: 680,
      currency: "EUR",
    },
    awards: [
      "Michelin Star 2024",
      "Condé Nast Traveller Gold List 2024",
      "Leading Hotels of the World",
    ],
    established: 2016,
  },
];

export const brandStory = {
  title: "The Art of Curated Hospitality",
  content: `Villa Serenità Collection was born from a simple yet profound belief: that true luxury lies not in grandeur, but in the art of attention to detail. Founded in 2015 by sisters Elena and Sofia Marchetti, our collection began with their grandmother's restored Tuscan villa and has since grown to include exceptional properties across Europe's most captivating destinations.

Each property in our collection is selected for its unique story, its sense of place, and its ability to offer our guests an authentic connection to destination and culture. We believe in slow travel, in taking time to savor experiences, and in creating moments that linger in memory long after the journey ends.

Our properties range from cliffside retreats on the Mediterranean to mountain sanctuaries in the Dolomites, from historic palaces in Andalusia to vineyards in the heart of Chianti. Yet they share a common thread: an unwavering commitment to excellence, a respect for heritage, and a genuine desire to make every guest feel like they are visiting a cherished friend's home.`,
};

export const testimonials = [
  {
    id: 1,
    quote:
      "Villa Serena Amaldo exceeded every expectation. The truffle hunting experience was magical, and the suite's frescoes took my breath away.",
    author: "Isabella M.",
    location: "New York",
    hotel: "Villa Serena Amaldo",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Hotel Ciel Azur is perfection. The private yacht cruise at sunset was the highlight of our anniversary celebration.",
    author: "James & Catherine S.",
    location: "London",
    hotel: "Hotel Ciel Azur",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Staying at Casa Blanca Azulejos felt like stepping back in time while enjoying every modern comfort. The rooftop terrace overlooking the Alhambra was unforgettable.",
    author: "Maria G.",
    location: "Barcelona",
    hotel: "Casa Blanca Azulejos",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Post Romantico delivered the alpine escape we needed. The skiing was exceptional, and returning to a warm fireplace and gourmet dinner was perfection.",
    author: "Thomas R.",
    location: "Munich",
    hotel: "Post Romantico",
    rating: 5,
  },
];

export const newsletter = {
  title: "Join Our Inner Circle",
  subtitle:
    "Be the first to discover new properties, exclusive experiences, and special offers curated for our most discerning travelers.",
};
