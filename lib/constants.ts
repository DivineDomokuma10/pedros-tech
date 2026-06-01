export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

export const MARQUEE_STATS = [
  {
    value: "100+",
    label: "promotions delivered",
    company: "BRANDS",
  },
  {
    value: "24/7",
    label: "crypto updates tracked",
    company: "HUB",
  },
  {
    value: "X",
    label: "social campaigns active",
    company: "PLATFORMS",
  },
  {
    value: "GROWTH",
    label: "focused marketing",
    company: "PEDRO'S TECH",
  },
];

export const FEATURES = [
  {
    number: "01",
    title: "Social Media Promotion",
    description:
      "We help brands and projects gain visibility through targeted campaigns on X (Twitter), Instagram, and Telegram communities. Build awareness and reach the right audience fast.",
    visual: "deploy",
  },
  {
    number: "02",
    title: "Crypto Insights Hub",
    description:
      "Stay updated with curated crypto information including airdrops, ecosystem updates, and trending Web3 opportunities—filtered for clarity and relevance.",
    visual: "ai",
  },
  {
    number: "03",
    title: "Community Growth Engine",
    description:
      "Grow active and engaged communities with structured engagement strategies, content distribution, and audience interaction across social platforms.",
    visual: "collab",
  },
  {
    number: "04",
    title: "Secure & Reliable Promotion",
    description:
      "We ensure transparent, consistent, and trustworthy promotion processes for all clients while maintaining safe handling of campaigns and data.",
    visual: "security",
  },
];

export const STEPS = [
  {
    number: "I",
    title: "Submit Your Campaign",
    description:
      "Send us your product, project, or message. We gather all required details to prepare your promotion across X, Instagram, and Telegram.",
    code: `pedrosTech.submit({
  type: 'promotion',
  platform: ['X', 'Instagram', 'Telegram'],
  goal: 'reach + engagement'
})`,
  },
  {
    number: "II",
    title: "We Design Your Strategy",
    description:
      "We craft a tailored promotion plan or crypto update distribution strategy based on your audience, niche, and growth goals.",
    code: `pedrosTech.strategy({
  campaign: 'social-growth',
  audience: 'targeted',
  content: 'optimized',
  include: ['hashtags', 'timing', 'community']
})`,
  },
  {
    number: "III",
    title: "Launch & Amplify",
    description:
      "We execute your campaign across selected platforms and distribute content to maximize visibility and engagement.",
    code: `pedrosTech.launch({
  platforms: ['X', 'Instagram', 'Telegram'],
  mode: 'amplify',
  tracking: true
})

// Campaign now live 🚀`,
  },
];
