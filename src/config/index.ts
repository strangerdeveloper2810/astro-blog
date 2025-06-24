import type {
  NavBarLink,
  Identity,
  AboutPageContent,
  HomePageContent
} from "../types/config";

import { socialLinks, homeSocialLinks } from "./social";

export const identity: Identity = {
  name: "Hai Trinh (Ethan Nguyen)",
  logo: "/ethan.png",
  email: "n.haitrinh@gmail.com",
};

export const openGraphImage: string = "/ethan.png";

// Google Analytics Configuration
export const googleAnalytics = {
  measurementId: import.meta.env.PUBLIC_GA_MEASUREMENT_ID || "G-7C63WGJJ5Y",
  gtmId: import.meta.env.PUBLIC_GTM_ID || "", // Optional Google Tag Manager ID
  enabled: true, // Always enabled for production tracking
  consentMode: false, // Disabled: Auto-grant consent for portfolio
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  }
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Hai Trinh (Ethan Nguyen) | Software Engineer | Frontend Engineer | Backend Engineer",
    description:
      "Portfolio of Hai Trinh (Ethan Nguyen), a software engineer specializing in React.js, Next.js, and scalable UI systems.",
    image: openGraphImage,
    domain: "www.ethansoftwaredeveloper.com",
    url: "https://www.ethansoftwaredeveloper.com",
    keywords: "Software Engineer, Frontend Developer, React.js, Next.js, TypeScript, Vue.js, Full-stack Developer, Web Development, Portfolio, Hai Trinh, Ethan Nguyen",
    canonical: "https://www.ethansoftwaredeveloper.com",
    author: "Hai Trinh (Ethan Nguyen)",
    type: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Hai Trinh",
      "alternateName": "Ethan Nguyen",
      "jobTitle": "Software Engineer",
      "description": "Software Engineer with 3+ years of experience building scalable web applications using React.js, Next.js, TypeScript, and Redux.",
      "url": "https://www.ethansoftwaredeveloper.com",
      "image": "https://www.ethansoftwaredeveloper.com/ethan.png",
      "email": "n.haitrinh@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ho Chi Minh City",
        "addressCountry": "Vietnam"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "EDS/Bolt Technologies"
      },
      "knowsAbout": ["React.js", "Next.js", "TypeScript", "Redux", "Vue.js", "Node.js", "GraphQL", "Socket.io", "Docker", "Flutter"],
      "sameAs": [
        "https://github.com/strangerdeveloper2810",
        "https://linkedin.com/in/trinhhainguyen"
      ]
    }
  },
  role: "Software Engineer",
  company: "EDS/Bolt Technologies",
  description:
    "Hi, I'm Hai Trinh (Ethan Nguyen), a software engineer with 3+ years of experience building scalable web applications using React.js, Next.js, TypeScript, and Redux. I've worked on trading platforms, beauty platforms, banking systems, and IoT systems.",
  socialLinks,
  homeSocialLinks,
  links: [
    { title: "About", url: "/about", icon: "mdi:account-circle" },
    { title: "GitHub", url: "https://github.com/strangerdeveloper2810", icon: "mdi:github", external: true },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Hai Trinh (Ethan Nguyen) | Software Engineer | Frontend Engineer | Backend Engineer",
    description:
      "About Hai Trinh - Software Engineer from Vietnam. Skilled in React.js, Next.js, TypeScript, and scalable UI architecture. Strong in mentorship and cross-team collaboration.",
    image: openGraphImage,
    domain: "www.ethansoftwaredeveloper.com",
    url: "https://www.ethansoftwaredeveloper.com/about",
    keywords: "About Hai Trinh, Ethan Nguyen, Software Engineer Vietnam, React Developer, Frontend Engineer, Full-stack Developer, UI Architecture, Mentorship",
    canonical: "https://www.ethansoftwaredeveloper.com/about",
    author: "Hai Trinh (Ethan Nguyen)",
    type: "webpage",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Hai Trinh (Ethan Nguyen)",
      "description": "About Hai Trinh - Software Engineer from Vietnam. Skilled in React.js, Next.js, TypeScript, and scalable UI architecture.",
      "url": "https://www.ethansoftwaredeveloper.com/about",
      "mainEntity": {
        "@type": "Person",
        "name": "Hai Trinh",
        "alternateName": "Ethan Nguyen",
        "jobTitle": "Software Engineer",
        "description": "Software Engineer with 3+ years of experience building scalable web applications",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ho Chi Minh City",
          "addressCountry": "Vietnam"
        }
      }
    }
  },
  subtitle: "Thanks for stopping by! Here's a bit about me.",
  about: {
    description: `
      Software Engineer at EDS/Bolt Technologies | 
    `,
    image_l: {
      url: "/img/ethan_nguyen_1.jpg",
      alt: "Ethan Nguyen",
    },
    image_r: {
      url: "/img/Ethan_Nguyen_2.jpg",
      alt: "Ethan Nguyen",
    },
  },
  work: {
    description: "Here are some of the companies and projects I've worked on recently:",
    items: [
      {
        title: "Software Engineer",
        company: { name: "Bolt Technologies ", url: "https://tornadoinvest.com.vn/", image: "/img/bolt_logo.jpg" },
        date: "May 2025 - Present",
      },
      {
        title: "Software Engineer",
        company: { name: "EDS ", url: "https://komobook.com/", image: "/img/komo_logo.svg" },
        date: "Jan 2025 - Present",
      },
      {
        title: "Software Engineer",
        company: { name: "WNE", url: "https://www.wnesolutions.sg/", image: "/img/wne_logo.jpeg" },
        date: "Nov 2023 – May 2025",
      },
      {
        title: "Software Engineer",
        company: { name: "ISB Vietnam (IVC)", url: "https://isb-vietnam.com.vn/", image: "/img/isb_logo.jpeg" },
        date: "Dec 2022 – Nov 2023",
      },
      {
        title: "Software Engineer & Mentor",
        company: { name: "Cybersoft Technology", url: "https://cybersoft.edu.vn/", image: "/img/cybersoft_logo.jpeg" },
        date: "Mar 2021 – Apr 2024",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`,
    links: socialLinks,
  },
};

export * from "./social";
export * from "./featured";
export * from "./github";
