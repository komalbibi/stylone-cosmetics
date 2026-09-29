export const products = [
  {
    id: "stylone-hero-shampoo",
    name: "Stylone 'Strong Apple' Anti-Hair Fall Shampoo",
    subtitle: "Herbal blend with Amla, Reetha, Shikakai & Fresh Apple Extract",
    category: "Anti-Hair Fall",
    badge: "Bestseller",
    isHero: true,
    price: 750,
    originalPrice: 950,
    rating: 4.9,
    reviewCount: 1420,
    image: "/images/hero_shampoo.jpg",
    sizes: [
      { size: "1 Bottle (200ml)", price: 750, isDefault: true },
      { size: "Pack of 2 (Save Rs. 200)", price: 1300 },
      { size: "Pack of 2 + Surprise Gift 🎁", price: 1500 },
      { size: "Pack of 3 (Mega Value Deal)", price: 1900 }
    ],
    shortDesc: "Formulated with the power of Pyrus Malus (Green Apple) extract combined with ancient Ayurvedic herbs Amla, Reetha, and Shikakai. Single 200ml volume bottle. Halts shedding & nourishes roots.",
    description: "Meet our new 'Strong Apple' Anti-Hair Fall formula (200ml bottle). A pharmaceutical-grade herbal blend featuring organic Amla, Reetha, Shikakai, and the refreshing power of crisp green apple polyphenols. Engineered for all hair types to combat hair thinning and promote lush, resilient growth.",
    keyBenefits: [
      "200ml Pure Cosmeceutical Herbal Shampoo Bottle",
      "Reduces hair fall by up to 94% in 3 weeks",
      "Restores scalp pH 5.5 natural balance",
      "100% Free from Sulfates, Parabens, & Phthalates",
      "Enriched with Natural Cleansing Saponins from Reetha"
    ],
    ingredients: [
      "Fresh Green Apple Extract (Pyrus Malus)",
      "Amla Extract (Emblica Officinalis)",
      "Reetha / Soapnut (Sapindus Mukorossi)",
      "Shikakai Extract (Acacia Concinna)",
      "Menthol & Spearmint Oil",
      "Biotin (Vitamin B7)",
      "Hydrolyzed Wheat Protein",
      "Purified Scalp Water"
    ],
    howToUse: [
      "1. Thoroughly wet hair and scalp with lukewarm water.",
      "2. Dispense a coin-sized amount of Stylone Strong Apple Shampoo into palm.",
      "3. Gently massage into scalp for 2-3 minutes to allow active botanical nutrients to penetrate.",
      "4. Rinse thoroughly. For best results, use 2-3 times a week."
    ],
    clinicalResults: [
      { stat: "94%", label: "Noticeably less hair shedding after 21 days" },
      { stat: "98%", label: "Scalp feels deeply cleansed & refreshed" },
      { stat: "91%", label: "Stronger hair shaft elasticity & shine" }
    ],
    tags: ["#StyloneCosmocceuticals", "#HerbalHairCare", "#AntiHairFall", "#StrongApple", "#200ml", "#Pakistan"]
  },
  {
    id: "stylone-scalp-serum",
    name: "Stylone Intensive Scalp Revitalizing Serum",
    subtitle: "Concentrated Apple Polyphenol & Biotin Hair Drops",
    category: "Serums & Tonics",
    badge: "New Formula",
    isHero: false,
    price: 950,
    originalPrice: 1250,
    rating: 4.8,
    reviewCount: 530,
    image: "/images/serum.jpg",
    sizes: [
      { size: "Single Bottle (50ml)", price: 950, isDefault: true },
      { size: "Pack of 2 Duo", price: 1650 }
    ],
    shortDesc: "Leave-in concentrated micro-dropper formula that stimulates dormant hair follicles, blocks localized DHT, and soothes dry, itchy scalp.",
    description: "A lightweight, non-greasy bioactive hair root serum. Packed with apple stem cell culture, pure biotin, rosemary extract, and amla concentrate to boost follicle longevity and hair density.",
    keyBenefits: [
      "Stimulates micro-circulation at root level",
      "Non-sticky, rapid absorbing leave-in treatment",
      "Formulated for daily morning or night application",
      "Reduces scalp inflammation and dryness"
    ],
    ingredients: ["Apple Cell Extract", "Biotin", "Amla Berry Concentrate", "Rosemary Leaf Extract", "Niacinamide"],
    howToUse: [
      "Apply 1-2 full droppers directly to clean scalp sections daily.",
      "Massage in circular motions until completely absorbed. Do not rinse."
    ],
    clinicalResults: [
      { stat: "89%", label: "Increase in visible hair strand thickness" },
      { stat: "96%", label: "Reduced scalp irritation within 7 days" }
    ],
    tags: ["#ScalpSerum", "#BiotinBoost", "#StyloneCare"]
  },
  {
    id: "stylone-hair-mask",
    name: "Stylone Amla & Shikakai Deep Hair Mask",
    subtitle: "Nutrient-Dense Botanical Conditioning Treatment",
    category: "Conditioners & Masks",
    badge: "Top Rated",
    isHero: false,
    price: 850,
    originalPrice: 1100,
    rating: 4.9,
    reviewCount: 890,
    image: "/images/mask.jpg",
    sizes: [
      { size: "Single Jar (250g)", price: 850, isDefault: true },
      { size: "Pack of 2 Jars", price: 1450 }
    ],
    shortDesc: "Deeply restorative botanical mask that repairs damaged hair cuticles, seals split ends, and leaves hair silky smooth without weighing it down.",
    description: "An intensive weekly deep-conditioning mask enriched with pure Shikakai butter, Amla oil, and cold-pressed Green Apple seed lipids. Perfect for reviving brittle, over-processed, or dry hair.",
    keyBenefits: [
      "Deeply hydrates dried strands in 5 minutes",
      "Smooths frizz and prevents split ends",
      "Restores natural gloss and color vibrancy"
    ],
    ingredients: ["Shikakai Oil", "Amla Butter", "Cold-Pressed Apple Seed Lipids", "Keratin Amino Acids", "Shea Butter"],
    howToUse: [
      "After shampooing with Stylone Strong Apple Shampoo, apply generously from mid-lengths to tips.",
      "Leave on for 5 to 10 minutes, then rinse thoroughly with cool water."
    ],
    clinicalResults: [
      { stat: "99%", label: "Smoother detangling & softness" },
      { stat: "92%", label: "Cuticle damage repair verified" }
    ],
    tags: ["#DeepConditioner", "#ShikakaiPower", "#HairRepair"]
  },
  {
    id: "stylone-anti-dandruff-tonic",
    name: "Stylone Fresh Apple & Menthol Scalp Tonic",
    subtitle: "Soothing Anti-Flake Refreshing Spray",
    category: "Serums & Tonics",
    badge: "Dermatologist Pick",
    isHero: false,
    price: 650,
    originalPrice: 850,
    rating: 4.7,
    reviewCount: 340,
    image: "/images/serum.jpg",
    sizes: [
      { size: "Single Spray (150ml)", price: 650, isDefault: true }
    ],
    shortDesc: "Instant cooling spray that calms scalp itching, combats dandruff-causing yeast, and leaves a crisp herbal apple scent.",
    description: "Formulated with 2% Salicylic Acid, Green Apple Polyphenols, and Menthol extract. Provides instant relief from scalp tightness, flakiness, and excess sebum production.",
    keyBenefits: [
      "Instant cooling relief upon contact",
      "Cleanses scalp pores and eliminates visible flakes",
      "Ideal for post-workout or daily refreshing"
    ],
    ingredients: ["Salicylic Acid 2%", "Green Apple Extract", "Menthol", "Tea Tree Oil", "Reetha Water"],
    howToUse: [
      "Spray directly onto damp or dry scalp whenever cooling relief or flake control is needed.",
      "Lightly massage with finger pads."
    ],
    clinicalResults: [
      { stat: "95%", label: "Immediate relief from scalp itchiness" },
      { stat: "90%", label: "Visible reduction in flakes after 2 applications" }
    ],
    tags: ["#ScalpTonic", "#FreshApple", "#FlakeFree"]
  }
];
