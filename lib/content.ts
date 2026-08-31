/**
 * Single source of truth for all portfolio content.
 *
 * Every section component reads from here. Never re-declare these arrays
 * inside a component — add or edit an entry in this file instead.
 */

/* ---------------------------------------------------------------- profile */

export const profile = {
  name: "Muhammad Talha Khan",
  firstName: "Muhammad",
  lastName: "Talha Khan",
  role: "Senior Full Stack Developer",
  headline: "Full Stack Web Developer",
  tagline: "WordPress | Shopify | Drupal | PHP | AI",
  location: "Lahore, Pakistan",
  timezone: "PKT (UTC+5)",
  availability: "More than 30 hrs/week",
  responseTime: "0-4 hours",
  rate: "$25.00/hr",
  email: "hello@talhakhan.dev",
  upworkUrl: "https://www.upwork.com/freelancers/aicmsexpert",
  intro:
    "Top 3% Talent on Upwork. A results-driven Senior Full Stack Developer with 8+ years of experience delivering high-performance, scalable and secure web solutions for global clients.",
  summary:
    "I specialize in Drupal (7–11), WordPress, Shopify, PHP, Laravel, React, and custom CMS/ecommerce development, with a proven track record of enhancing user experience, optimizing workflows, and boosting business growth.",
  clients:
    "Clients across the UK, UAE, Europe, and North America — delivering solutions for enterprises, startups, and government projects.",
} as const

/* --------------------------------------------------------------- sections */

export interface SectionLink {
  id: string
  label: string
}

/** Drives the navbar, the scroll-spy, and the footer link list. */
export const sections: SectionLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
]

/* ------------------------------------------------------------------ stats */

export interface Stat {
  value: number
  suffix: string
  label: string
}

export const stats: Stat[] = [
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Jobs Completed" },
  { value: 6020, suffix: "+", label: "Hours Worked" },
  { value: 100, suffix: "%", label: "Job Success" },
]

/** Small badges shown under the hero — the Upwork credentials. */
export const credentials: string[] = [
  "Top Rated Plus",
  "100% Job Success",
  "$100K+ Earned",
  "Top 3% Talent",
]

/* --------------------------------------------------------------- highlights */

export interface Highlight {
  title: string
  description: string
  icon: string
}

/** The "what I bring" grid in the About section. */
export const highlights: Highlight[] = [
  {
    title: "Enterprise CMS Delivery",
    description:
      "70+ multilingual Drupal sites for Bionorica SE and a Rulemaking Portal for Colorado Gov.",
    icon: "layers",
  },
  {
    title: "Ecommerce at Scale",
    description:
      "20+ Shopify storefronts for NZ and AU retailers, plus full platform migrations.",
    icon: "shopping-cart",
  },
  {
    title: "AI Integration",
    description:
      "Claude and OpenAI/LLM integrations for content tagging, search, and smart automation.",
    icon: "sparkles",
  },
  {
    title: "Dedicated Support",
    description:
      "Available 30+ hrs/week with a 0-4 hour average response time across time zones.",
    icon: "headphones",
  },
]

/* ----------------------------------------------------------------- skills */

export interface SkillGroup {
  title: string
  icon: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "CMS & Platforms",
    icon: "layout-grid",
    skills: ["Drupal 7–11", "WordPress", "Shopify", "Shopify Plus", "WooCommerce", "Acquia", "Pantheon", "Drupal Commerce"],
  },
  {
    title: "Languages",
    icon: "code",
    skills: ["PHP", "JavaScript", "TypeScript", "Liquid", "HTML5", "CSS3", "SQL", "Twig"],
  },
  {
    title: "Frameworks",
    icon: "boxes",
    skills: ["Laravel", "React", "Next.js", "Node.js", "Tailwind CSS", "Bootstrap", "jQuery"],
  },
  {
    title: "Ecommerce",
    icon: "shopping-bag",
    skills: ["Shopify Themes", "Shopify Apps", "Store Migration", "Checkout Flows", "Product Configurators", "Shopify SEO"],
  },
  {
    title: "AI & Automation",
    icon: "brain",
    skills: ["Anthropic Claude", "OpenAI / LLM", "AI Chatbots", "LangChain", "Prompt Engineering", "AI Personalization"],
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    skills: ["AWS", "DigitalOcean", "CI/CD", "Drush", "Git", "Composer", "Performance Tuning"],
  },
]

/* --------------------------------------------------------------- services */

export interface Service {
  title: string
  description: string
  icon: string
  points: string[]
}

export const services: Service[] = [
  {
    title: "Drupal Development",
    icon: "layers",
    description:
      "Custom module development, hooks, multilingual and multisite setups, and Drupal 7 → 11 migrations.",
    points: ["Custom Modules", "D7 → D11 Migration", "Headless CMS", "Multisite & Multilingual"],
  },
  {
    title: "WordPress Development",
    icon: "wordpress",
    description:
      "Theme customization, plugin development, WooCommerce builds, and API integrations that scale.",
    points: ["Custom Themes", "Plugin Development", "WooCommerce", "Speed & SEO"],
  },
  {
    title: "Shopify Development",
    icon: "shopping-cart",
    description:
      "Theme development, custom Liquid code, private and public apps, and full store migrations.",
    points: ["Theme Development", "Shopify Apps", "Store Migration", "Conversion Optimization"],
  },
  {
    title: "Full Stack Development",
    icon: "code",
    description:
      "Laravel and React applications, RESTful APIs, and cloud deployments on AWS and DigitalOcean.",
    points: ["Laravel & React", "REST APIs", "AWS / DigitalOcean", "Custom Web Apps"],
  },
  {
    title: "AI Integration",
    icon: "sparkles",
    description:
      "Claude and OpenAI integrations bringing intelligent search, tagging, and automation to your stack.",
    points: ["LLM Integration", "AI Chatbots", "Smart Search", "Workflow Automation"],
  },
  {
    title: "E-Commerce Solutions",
    icon: "trending-up",
    description:
      "Negotiation tools, product configurators, advanced checkout flows, and AI-assisted dynamic pricing.",
    points: ["Custom Checkout", "Product Configurators", "Dynamic Pricing", "Smart Analytics"],
  },
]

/* --------------------------------------------------------------- projects */

export type ProjectCategory = "Drupal" | "Shopify" | "WordPress" | "Full Stack"

export interface Project {
  title: string
  description: string
  category: ProjectCategory
  technologies: string[]
  liveUrl?: string
  /** Featured projects lead the grid. */
  featured?: boolean
}

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Drupal",
  "Shopify",
  "WordPress",
  "Full Stack",
]

export const projects: Project[] = [
  {
    title: "Bionorica SE — 70+ Multilingual Sites",
    description:
      "Built 70+ multilingual Drupal brand sites from a single custom template for Bionorica's global digital transformation, covering Germany, Ukraine, Belarus, Poland and Turkey.",
    category: "Drupal",
    technologies: ["Drupal", "Multilingual", "Twig", "Custom Modules"],
    featured: true,
  },
  {
    title: "Colorado Gov Rulemaking Portal",
    description:
      "Developed a public rulemaking portal for the State of Colorado on Drupal 9, delivering accessible, government-grade workflows for rule submission and review.",
    category: "Drupal",
    technologies: ["Drupal 9", "Government", "Accessibility", "Workflows"],
    featured: true,
  },
  {
    title: "Tea Total NZ — Platform Migration",
    description:
      "Migrated Tea Total NZ from Drupal Commerce to Shopify with a full catalogue, customer and order migration plus a bespoke storefront theme.",
    category: "Shopify",
    technologies: ["Shopify", "Migration", "Liquid", "Drupal Commerce"],
    liveUrl: "https://teatotal.co.nz",
    featured: true,
  },
  {
    title: "Laravel + React Negotiation Tool",
    description:
      "Created an innovative price negotiation tool for e-commerce stores, letting shoppers and merchants settle on a price in real time through a Laravel API and React front end.",
    category: "Full Stack",
    technologies: ["Laravel", "React", "REST API", "Ecommerce"],
    featured: true,
  },
  {
    title: "Shopify 3rd Party Carrier Rate Apps",
    description:
      "Built and published Shopify apps delivering real-time FedEx and UPS LTL/Small parcel carrier rates at checkout via third-party REST API integrations.",
    category: "Shopify",
    technologies: ["Shopify App", "REST API", "FedEx", "UPS"],
    liveUrl: "https://apps.shopify.com/partners/developer-3873bf1f6423c796",
    featured: true,
  },
  {
    title: "Bionorica Health Care Portal",
    description:
      "Developed a shared Health Care Portal acting as an LMS for health care professionals linked with Bionorica, alongside the English and German corporate websites.",
    category: "Drupal",
    technologies: ["Drupal", "LMS", "Corporate", "Multilingual"],
  },
  {
    title: "Acquia CMS Infrastructure & CI/CD",
    description:
      "Set up Acquia CMS infrastructure with a complete CI/CD implementation, giving the client repeatable deployments and a hardened Drupal hosting pipeline.",
    category: "Drupal",
    technologies: ["Acquia", "Drupal", "CI/CD", "DevOps"],
  },
  {
    title: "Batenburgs Gift Hampers",
    description:
      "Shopify storefront development and ongoing feature work for a leading New Zealand gift hamper retailer, focused on merchandising and checkout experience.",
    category: "Shopify",
    technologies: ["Shopify", "Liquid", "Theme Development"],
    liveUrl: "https://www.batenburgs.co.nz/",
  },
  {
    title: "Further Faster NZ",
    description:
      "Outdoor and adventure gear storefront on Shopify with a large technical catalogue, faceted navigation and performance tuning for a fast browsing experience.",
    category: "Shopify",
    technologies: ["Shopify", "Liquid", "Performance", "Catalogue"],
    liveUrl: "https://www.furtherfaster.co.nz/",
  },
  {
    title: "Hans Herzog Estate",
    description:
      "Premium winery storefront built on Shopify with age verification, subscription-ready ordering and an editorial design befitting the brand.",
    category: "Shopify",
    technologies: ["Shopify", "Liquid", "Ecommerce"],
    liveUrl: "https://www.herzog.co.nz/",
  },
  {
    title: "Mr Ralph Lighting",
    description:
      "Designer lighting storefront on Shopify with a richly configured product catalogue, custom collection templates and merchandising tooling.",
    category: "Shopify",
    technologies: ["Shopify", "Liquid", "Custom Sections"],
    liveUrl: "https://www.mrralph.co.nz/",
  },
  {
    title: "Tech Warehouse NZ",
    description:
      "High-volume electronics retail store on Shopify with bulk catalogue management, custom product templates and conversion-focused UX work.",
    category: "Shopify",
    technologies: ["Shopify", "Liquid", "Ecommerce", "UX"],
    liveUrl: "https://techwarehouse.co.nz/",
  },
]

/* ------------------------------------------------------------- experience */

export interface Experience {
  role: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    role: "Senior Full Stack Developer",
    company: "Freelance — Upwork (Top Rated Plus)",
    period: "March 2022 - Present",
    description:
      "Delivering full stack web solutions for enterprises, startups and government clients across the UK, UAE, Europe and North America.",
    achievements: [
      "Maintained a 100% Job Success Score across 15 jobs and 6,020+ hours",
      "Earned $100K+ in total contract value with long-running client relationships",
      "Built a production Shopify app spanning 1,400+ hours of development",
      "Delivered Drupal, WordPress, Shopify and Laravel projects end to end",
    ],
    technologies: ["Drupal", "Shopify", "WordPress", "Laravel", "React", "AI Integration"],
  },
  {
    role: "Senior Software Engineer",
    company: "OutsourceNZ",
    period: "September 2021 - March 2022",
    description:
      "Full stack software engineer developing e-commerce sites on Shopify for industrial and retail clients across New Zealand and Australia.",
    achievements: [
      "Built and maintained 20+ Shopify storefronts for NZ and AU retailers",
      "Delivered stores including Tea Total, Batenburgs, Further Faster and Tech Warehouse",
      "Handled theme development, custom Liquid work and third-party integrations",
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "Ecommerce"],
  },
  {
    role: "Web Developer",
    company: "April&June GmbH",
    period: "June 2020 - September 2021",
    description:
      "Worked on Drupal projects for Bionorica DE as part of their global digital transformation plan.",
    achievements: [
      "Developed 70+ sites from a single custom-built Drupal template",
      "Built brand sites for Ukraine, Belarus, Germany, Poland and Turkey",
      "Developed the Bionorica corporate website in English and German",
      "Built a shared Health Care Portal as an LMS for health care professionals",
    ],
    technologies: ["Drupal", "Twig", "PHP", "Multilingual"],
  },
  {
    role: "Backend Developer",
    company: "AlignPX",
    period: "April 2019 - June 2020",
    description:
      "Developed APIs for third-party carrier rates and built the Shopify apps that consumed them.",
    achievements: [
      "Built FedEx LTL/Small and UPS LTL/Small carrier rate apps",
      "Published apps to the Shopify App Store as a Shopify Partner",
      "Designed REST integrations for real-time rate calculation at checkout",
    ],
    technologies: ["Shopify Apps", "REST API", "PHP", "Carrier Integration"],
  },
  {
    role: "Software Engineer",
    company: "Cognitive Axis",
    period: "February 2018 - July 2018",
    description:
      "Software engineer working mainly in Drupal, WordPress and other PHP frameworks such as Laravel.",
    achievements: [
      "Delivered client projects across Drupal and WordPress",
      "Built custom features in Laravel and core PHP",
    ],
    technologies: ["Drupal", "WordPress", "Laravel", "PHP"],
  },
  {
    role: "Software Engineer",
    company: "E-Tracking Solutions",
    period: "March 2016 - January 2018",
    description:
      "Full stack developer working across a range of tools and technologies for tracking and logistics products.",
    achievements: [
      "Developed and maintained full stack features across the product suite",
      "Worked across the front end, back end and database layers",
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "Full Stack"],
  },
]

/* ----------------------------------------------------------- testimonials */

export interface Testimonial {
  quote: string
  project: string
  rating: number
  endorsements: string[]
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "A pleasure to work with Muhammad! He was knowledgeable and competent and friendly. Highly recommend!",
    project: "Hybrid Frontend Developer for Design and Coding",
    rating: 5,
    endorsements: ["Solution Oriented", "Clear Communicator", "Detail Oriented"],
  },
  {
    quote:
      "Highly knowledgeable and professional, this developer surpassed my expectations. They have an impressive command over Drupal Acquia, delivering exceptional results. Their communication was top-notch, keeping me informed throughout.",
    project: "Acquia CMS Developer for Infrastructure and CI/CD",
    rating: 5,
    endorsements: ["Professional", "Clear Communicator", "Committed to Quality", "Detail Oriented"],
  },
  {
    quote:
      "I will rehire Talha for the next job soon. He is knowledgeable and performs tasks quickly. I would highly recommend him for Drupal related services.",
    project: "Drupal 7 Expert Assistance",
    rating: 5,
    endorsements: ["Reliable"],
  },
  {
    quote:
      "Talha is an amazing freelancer. He is reliable and knows Drupal. I am rehiring him for assistance in another Drupal project. Highly Recommended!!!",
    project: "Drupal Expert Assistance",
    rating: 5,
    endorsements: ["Reliable"],
  },
  {
    quote: "Talha is an amazing freelancer to work with. Great communication skills!",
    project: "Drupal Expert Assistance",
    rating: 5,
    endorsements: ["Collaborative", "Clear Communicator"],
  },
  {
    quote: "Will work with Talha in the future.",
    project: "Senior Shopify App Developer with REST API Integration",
    rating: 5,
    endorsements: ["Collaborative"],
  },
]

/* ------------------------------------------------------------- education */

export interface Education {
  degree: string
  institution: string
  period: string
}

export const education: Education[] = [
  {
    degree: "Bachelor of Science (BS), Computer Science",
    institution: "University of Central Punjab",
    period: "2013 - 2017",
  },
]

export const languages = [
  { name: "English", level: "Conversational" },
  { name: "Urdu", level: "Native" },
  { name: "Arabic", level: "Basic" },
]

/** Fed to the infinite marquee strip under the hero. */
export const marqueeItems: string[] = [
  "Drupal",
  "WordPress",
  "Shopify",
  "Laravel",
  "React",
  "PHP",
  "WooCommerce",
  "Liquid",
  "AI Integration",
  "REST APIs",
  "Next.js",
  "AWS",
]
