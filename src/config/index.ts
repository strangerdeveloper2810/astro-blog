import type {
  NavBarLink,
  Identity,
  AboutPageContent,
  HomePageContent,
} from "../types/config";

import { socialLinks, homeSocialLinks } from "./social";

export const identity: Identity = {
  name: "Nguyen Hai Trinh",
  logo: "/img/me_2.jpg",
  email: "n.haitrinh2810@gmail.com",
};

export const openGraphImage: string = "/img/me_2.jpg";

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
  },
  {
    title: "Skills",
    url: "/skills",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title:
      "Nguyen Hai Trinh | Software Engineer | Frontend Lead | Full Stack Developer",
    description:
      "Portfolio of Nguyen Hai Trinh, a Software Engineer and Frontend Lead with 4+ years of experience building scalable web applications, mobile apps, and backend APIs using React, React Native, TypeScript, and Go.",
    image: openGraphImage,
    domain: "www.ethansoftwaredeveloper.com",
    url: "https://www.ethansoftwaredeveloper.com",
    keywords:
      "Software Engineer, Frontend Lead, Full Stack Developer, React.js, React Native, TypeScript, Go, AI Healthcare, Trading Platform, SaaS, Mobile Development, Portfolio, Nguyen Hai Trinh",
    canonical: "https://www.ethansoftwaredeveloper.com",
    author: "Nguyen Hai Trinh",
    type: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Nguyen Hai Trinh",
      jobTitle: "Software Engineer (Frontend Lead)",
      description:
        "Goal-oriented Software Engineer with 4+ years of experience leading frontend teams and building scalable web applications, mobile apps, and backend APIs. Currently leading frontend development for AI-powered healthcare products.",
      url: "https://www.ethansoftwaredeveloper.com",
      image: "https://www.ethansoftwaredeveloper.com/img/me_2.jpg",
      email: "n.haitrinh2810@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ho Chi Minh City",
        addressCountry: "Vietnam",
      },
      worksFor: {
        "@type": "Organization",
        name: "Cognisian",
      },
      knowsAbout: [
        "React.js",
        "React Native",
        "Next.js",
        "Vue.js",
        "TypeScript",
        "Go",
        "GraphQL",
        "WebSocket",
        "TradingView",
        "Playwright",
        "Figma",
        "PostgreSQL",
      ],
      sameAs: [
        "https://github.com/strangerdeveloper2810",
        "https://linkedin.com/in/trinhhainguyen",
      ],
    },
  },
  role: "Software Engineer (Frontend Lead)",
  company: "Cognisian",
  description:
    "Hi, I'm Nguyen Hai Trinh, a goal-oriented Software Engineer with 4+ years of experience building scalable web applications and leading frontend teams. Currently, I lead frontend development for AI-powered healthcare products at Cognisian, working across the full stack with React, React Native, and Go. I've delivered real-time trading platforms, SaaS booking systems, banking applications, and IoT solutions. My expertise spans modern frontend technologies, mobile development, and backend APIs. In the next 3 years, I aim to become a Senior Software Engineer, and within 5 years, I plan to take on a Tech Lead role driving product and engineering decisions.",
  socialLinks,
  homeSocialLinks,
  links: [
    { title: "About", url: "/about", icon: "mdi:account-circle" },
    { title: "Skills", url: "/skills", icon: "mdi:code-braces" },
    {
      title: "GitHub",
      url: "https://github.com/strangerdeveloper2810",
      icon: "mdi:github",
      external: true,
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Nguyen Hai Trinh | Software Engineer | Frontend Lead",
    description:
      "About Nguyen Hai Trinh - Software Engineer and Frontend Lead from Vietnam with 4+ years of experience. Currently leading frontend development for AI-powered healthcare products. Skilled in React, React Native, TypeScript, and Go.",
    image: openGraphImage,
    domain: "www.ethansoftwaredeveloper.com",
    url: "https://www.ethansoftwaredeveloper.com/about",
    keywords:
      "About Nguyen Hai Trinh, Software Engineer Vietnam, Frontend Lead, React Developer, React Native, Go Developer, AI Healthcare, Trading Platform Developer",
    canonical: "https://www.ethansoftwaredeveloper.com/about",
    author: "Nguyen Hai Trinh",
    type: "webpage",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Nguyen Hai Trinh",
      description:
        "About Nguyen Hai Trinh - Software Engineer and Frontend Lead from Vietnam with 4+ years of experience. Currently leading frontend development for AI-powered healthcare products.",
      url: "https://www.ethansoftwaredeveloper.com/about",
      mainEntity: {
        "@type": "Person",
        name: "Nguyen Hai Trinh",
        jobTitle: "Software Engineer (Frontend Lead)",
        description:
          "Goal-oriented Software Engineer with 4+ years of experience leading frontend teams and building scalable web applications, mobile apps, and backend APIs",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ho Chi Minh City",
          addressCountry: "Vietnam",
        },
      },
    },
  },
  subtitle: "Thanks for stopping by! Here's a bit about me.",
  about: {
    description: `
      Goal-oriented Software Engineer with 4+ years of experience building scalable web applications and leading frontend teams.
      Currently leading frontend development for AI-powered healthcare products, working hands-on across web (React), mobile (React Native), and backend (Go & Gin).
      I've delivered high-impact solutions including real-time trading platforms, SaaS booking systems, banking applications, and IoT platforms.
      In the next 3 years, I aim to become a Senior Software Engineer, mastering system design and leading engineering best practices.
      Within 5 years, I plan to take on the role of a Tech Lead, driving product and engineering decisions.
      My long-term vision is to grow into a Software Architect or Engineering Manager,
      designing robust, scalable, and maintainable software systems across large-scale platforms.
    `,
    image_l: {
      url: "/img/ethan_nguyen_1.jpg",
      alt: "Nguyen Hai Trinh",
    },
    image_r: {
      url: "/img/me_2.jpg",
      alt: "Nguyen Hai Trinh",
    },
  },
  work: {
    description:
      "Here are some of the companies and projects I've worked on recently:",
    items: [
      {
        title: "Software Engineer (Frontend Lead)",
        company: {
          name: "Cognisian",
          url: "https://cognisian.com/",
          image: "/img/cognisian_logo.jpeg",
        },
        date: "Sep 2025 – Present",
      },
      {
        title: "Software Engineer",
        company: {
          name: "Bolt Technologies",
          url: "https://tornadoinvest.com.vn/",
          image: "/img/bolt_logo.jpg",
        },
        date: "Apr 2025 – Dec 2025",
      },
      {
        title: "Frontend Lead",
        company: {
          name: "EDS (Eye Design Sydney)",
          url: "https://komobook.com/",
          image: "/img/komo_logo.svg",
        },
        date: "Dec 2024 – Dec 2025",
      },
      {
        title: "Software Engineer",
        company: {
          name: "WNE Solutions",
          url: "https://www.wnesolutions.sg/",
          image: "/img/wne_logo.jpeg",
        },
        date: "Nov 2023 – May 2025",
      },
      {
        title: "Software Engineer",
        company: {
          name: "ISB Vietnam Company (IVC)",
          url: "https://isb-vietnam.com.vn/",
          image: "/img/isb_logo.jpeg",
        },
        date: "Dec 2022 – Nov 2023",
      },
      {
        title: "Software Engineer | Teaching Assistant",
        company: {
          name: "CyberSoft Academy",
          url: "https://cybersoft.edu.vn/",
          image: "/img/cybersoft_logo.jpeg",
        },
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
export * from "./skills";
