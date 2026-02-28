/* =============================================================
   data.js  —  ALL editable site content lives here.
   To add/edit anything on the site, only touch this file.
   ============================================================= */

// ── Brand & Contact ──────────────────────────────────────────
const SITE = {
  brandName: "Meghalaya Catering",
  brandTagline: "Service \u2014 Shillong",
  phone: "+91 6909 907 184",
  phoneTel: "tel:+916909907184",
  email: "9383mishra@gmail.com",
  address: "HQ 101 Area, Shillong, Meghalaya",
  addressFull: "HQ 101 Area, Shillong,<br>Meghalaya, India",
  hours: "Mon \u2013 Sat, 9:00 AM \u2013 7:00 PM",
  whatsapp: "https://wa.me/916909907184",
  instagram: "https://www.instagram.com/adityamishra4607/",
  facebook: "https://www.facebook.com",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57441.74060025068!2d91.82399!3d25.5744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750454e19843dcb%3A0x4e5abee30db42ba!2sShillong%2C%20Meghalaya!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin",
  copyrightYear: "2026",
};

// ── Navbar links ─────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Menu',     href: '#menu' },
  { label: 'Contact',  href: '#contact', cta: true },
];

// ── Hero Section ─────────────────────────────────────────────
const HERO = {
  eyebrow:    'Premium Catering \u2014 Shillong, Meghalaya',
  titleLine1: 'Delicious Food for',
  titleLine2: 'Every Occasion',           // rendered in italic/accent font
  subItems:   ['Wedding', 'Birthday', 'Corporate Events', 'Parties'],
  slides: [
    {
      img: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=85&fit=crop',
      alt: 'Elegant catering spread',
    },
    {
      img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85&fit=crop',
      alt: 'Wedding dinner setup',
    },
    {
      img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=85&fit=crop',
      alt: 'Premium event celebration',
    },
  ],
};

// ── About Section ─────────────────────────────────────────────
const ABOUT = {
  badge:      { number: '2+', text: 'Years of\nExcellence' },
  mainImg:    {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85&fit=crop',
    alt: 'Our culinary team',
  },
  accentImg:  {
    src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=85&fit=crop',
    alt: 'Signature dish',
  },
  label:      'Our Story',
  headline:   'Rooted in <span>Meghalaya,</span><br>Crafted with Passion',
  body:       'Born in the misty hills of Shillong, Meghalaya Catering Service has been transforming gatherings into unforgettable experiences for over a decade. We blend the rich culinary heritage of the Northeast with refined modern gastronomy, creating menus that speak to the soul.',
  stats: [
    { number: '500+', label: 'Events Catered' },
    { number: '50+',  label: 'Expert Chefs' },
    { number: '100%', label: 'Satisfaction' },
  ],
  features: [
    {
      icon: 'fa-solid fa-leaf',
      title: 'Fresh, Locally Sourced Ingredients',
      desc:  'We partner with local farmers to bring authentic, seasonal flavours to your table.',
    },
    {
      icon: 'fa-solid fa-sliders',
      title: 'Fully Customisable Menus',
      desc:  'From intimate gatherings of 20 to grand celebrations of 2000+, we tailor every detail.',
    },
  ],
};

// ── Services Section ──────────────────────────────────────────
const SERVICES = {
  label:    'What We Offer',
  headline: 'Premium <span>Services</span>',
  subtitle: 'From grandeur weddings to intimate corporate gatherings, we deliver culinary perfection tailored to every occasion.',
  items: [
    {
      icon:  'fa-solid fa-rings-wedding',
      title: 'Wedding Catering',
      desc:  'Make your special day extraordinary with our bespoke wedding menus, elegant presentation, and seamless service for every ceremony and reception.',
      img:   'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=85&fit=crop',
      alt:   'Wedding Catering',
    },
    {
      icon:  'fa-solid fa-champagne-glasses',
      title: 'Birthday Parties',
      desc:  'Celebrate life\'s milestones with vibrant, joyful menus and impeccable service \u2014 from children\'s parties to milestone adult celebrations.',
      img:   'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=85&fit=crop',
      alt:   'Birthday Parties',
    },
    {
      icon:  'fa-solid fa-briefcase',
      title: 'Corporate Events',
      desc:  'Elevate your business events with professional catering \u2014 boardroom lunches, product launches, team retreats, and large-scale conferences.',
      img:   'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=85&fit=crop',
      alt:   'Corporate Events',
    },
    {
      icon:  'fa-solid fa-wand-magic-sparkles',
      title: 'Event Management & Decor',
      desc:  'End-to-end event management with stunning d\u00e9cor, thematic setups, floral arrangements, and lighting design to create truly breathtaking spaces.',
      img:   'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=85&fit=crop',
      alt:   'Event Management & Decor',
    },
  ],
};

// ── Menu Section ──────────────────────────────────────────────
const MENU = {
  label:    'Culinary Excellence',
  headline: 'Our <span>Specialties</span>',
  categories: [
    {
      id:    'khasi',
      label: 'Traditional Khasi',
      items: [
        {
          tag:  'Rice Specialty',
          name: 'Jadoh',
          desc: 'Authentic Khasi rice cooked with pork and fragrant spices \u2014 a cherished delicacy of the Hills.',
          img:  'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=85&fit=crop',
          alt:  'Jadoh',
        },
        {
          tag:  'Pork Dish',
          name: 'Dohneiiong',
          desc: 'Slow-cooked pork in rich black sesame gravy \u2014 a bold, earthy flavour unique to Meghalaya.',
          img:  'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=85&fit=crop',
          alt:  'Dohneiiong',
        },
        {
          tag:  'Fermented Soya',
          name: 'Tungrymbai & Pork',
          desc: 'Traditional fermented soybean cooked with pork, a strong-flavoured favourite at tribal feasts.',
          img:  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=85&fit=crop',
          alt:  'Tungrymbai',
        },
      ],
    },
    {
      id:    'northindian',
      label: 'North Indian',
      items: [
        {
          tag:  'Chicken Specialty',
          name: 'Butter Chicken',
          desc: 'Tender chicken in a velvety tomato-cream sauce, slow-simmered with aromatic whole spices.',
          img:  'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=85&fit=crop',
          alt:  'Butter Chicken',
        },
        {
          tag:  'Lentil Classic',
          name: 'Dal Makhani',
          desc: 'Overnight slow-cooked black lentils finished with butter and cream \u2014 a North Indian classic.',
          img:  'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=85&fit=crop',
          alt:  'Dal Makhani',
        },
        {
          tag:  'Rice Specialty',
          name: 'Dum Biryani',
          desc: 'Fragrant basmati rice layered with marinated meat or vegetables, sealed and slow-cooked to perfection.',
          img:  'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=85&fit=crop',
          alt:  'Biryani',
        },
      ],
    },
    {
      id:    'continental',
      label: 'Continental',
      items: [
        {
          tag:  'Seafood',
          name: 'Herb-Grilled Salmon',
          desc: 'Pan-seared Atlantic salmon with lemon-herb butter, asparagus, and roasted baby potatoes.',
          img:  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85&fit=crop',
          alt:  'Grilled Salmon',
        },
        {
          tag:  'Pasta',
          name: 'Pasta Primavera',
          desc: 'Al dente pasta tossed with seasonal vegetables in a light white wine and garlic cream sauce.',
          img:  'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=85&fit=crop',
          alt:  'Pasta Primavera',
        },
        {
          tag:  'Dessert',
          name: 'Classic Tiramisu',
          desc: 'Espresso-soaked ladyfingers layered with mascarpone cream and dusted with finest cocoa.',
          img:  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=85&fit=crop',
          alt:  'Tiramisu',
        },
      ],
    },
  ],
};

// ── Contact section form options ──────────────────────────────
const CONTACT = {
  label:    'Get In Touch',
  headline: 'Let\'s Plan Your <span>Perfect Event</span>',
  subtitle: 'Ready to create something extraordinary? Reach out and our event specialists will craft a bespoke catering experience just for you.',
  eventTypes: ['Wedding', 'Birthday Party', 'Corporate Event', 'Social Gathering', 'Other'],
};

// ── Footer ────────────────────────────────────────────────────
const FOOTER = {
  desc: 'Bringing the authentic flavours of Meghalaya to your most cherished celebrations. Premium catering, impeccable service, and lasting memories.',
  navLinks: [
    { label: 'Home',        href: '#hero' },
    { label: 'About Us',    href: '#about' },
    { label: 'Our Services',href: '#services' },
    { label: 'Sample Menu', href: '#menu' },
    { label: 'Contact',     href: '#contact' },
  ],
  serviceLinks: [
    { label: 'Wedding Catering',  href: '#services' },
    { label: 'Birthday Parties',  href: '#services' },
    { label: 'Corporate Events',  href: '#services' },
    { label: 'Event Management',  href: '#services' },
    { label: 'Decor & Setup',     href: '#services' },
  ],
};
