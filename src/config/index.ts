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
    title: "Nguyen Hai Trinh | Senior Fullstack Engineer (Go + React)",
    description:
      "Portfolio of Nguyen Hai Trinh, Senior Fullstack Engineer (Go + React) with 4+ years of experience engineering high-impact web applications, mobile apps, and backend APIs across fintech, healthcare, IoT, and banking.",
    image: openGraphImage,
    domain: "www.ethansoftwaredeveloper.com",
    url: "https://www.ethansoftwaredeveloper.com",
    keywords:
      "Senior Fullstack Engineer, Go, React 19, Next.js 16, React Native, TypeScript, Nest.js, Fintech, AI Healthcare, Portfolio, Nguyen Hai Trinh",
    canonical: "https://www.ethansoftwaredeveloper.com",
    author: "Nguyen Hai Trinh",
    type: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Nguyen Hai Trinh",
      jobTitle: "Senior Fullstack Engineer (Go + React)",
      description:
        "Senior Fullstack Engineer (Go + React) with 4+ years delivering high-impact web applications across fintech, mortgage lending, healthcare, IoT, and banking. Specialized in Go, React ecosystem, and type-safe architectures.",
      url: "https://www.ethansoftwaredeveloper.com",
      image: "https://www.ethansoftwaredeveloper.com/img/me_2.jpg",
      email: "n.haitrinh2810@gmail.com",
      telephone: "+84384945724",
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
        "Go (Gin)",
        "React 19",
        "Next.js 16",
        "React Native",
        "TypeScript",
        "Nest.js",
        "tRPC",
        "GraphQL",
        "WebSocket",
        "TradingView",
        "Playwright",
        "PostgreSQL",
        "StarRocks OLAP",
        "Docker",
      ],
      sameAs: [
        "https://github.com/strangerdeveloper2810",
        "https://linkedin.com/in/trinhhainguyen",
      ],
    },
  },
  role: "Senior Software Engineer",
  company: "Cognisian",
  description:
    "Hi, I'm Nguyen Hai Trinh, a Senior Software Engineer with 4+ years of experience engineering high-concurrency web platforms, mobile solutions, and backend microservices. Currently building AI-powered healthcare products at Cognisian. My career spans fintech lending platforms, real-time commodity derivatives trading engines, multi-tenant SaaS platforms, and IoT systems.",
  socialLinks,
  homeSocialLinks,
  links: [
    { title: "About", url: "/about", icon: "mdi:account-circle" },
    { title: "Skills", url: "/skills", icon: "mdi:code-braces" },
    {
      title: "J.A.R.V.I.S. AI",
      url: "https://ai.ethansoftwaredeveloper.com/",
      icon: "mdi:robot",
      external: true,
    },
    {
      title: "HR-Tool Live",
      url: "https://hrtool.ethansoftwaredeveloper.com/",
      icon: "mdi:web",
      external: true,
    },
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
    title: "About | Nguyen Hai Trinh | Senior Fullstack Engineer (Go + React)",
    description:
      "About Nguyen Hai Trinh - Senior Fullstack Engineer (Go + React). 4+ years of experience across fintech lending, healthcare, derivatives trading, smart IoT platforms, and banking systems.",
    image: openGraphImage,
    domain: "www.ethansoftwaredeveloper.com",
    url: "https://www.ethansoftwaredeveloper.com/about",
    keywords:
      "About Nguyen Hai Trinh, Senior Fullstack Engineer, Go Developer, React Developer, Next.js 16, React Native, Nest.js, Fintech",
    canonical: "https://www.ethansoftwaredeveloper.com/about",
    author: "Nguyen Hai Trinh",
    type: "webpage",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Nguyen Hai Trinh",
      description:
        "Senior Fullstack Engineer (Go + React) with 4+ years delivering high-impact web & mobile applications.",
      url: "https://www.ethansoftwaredeveloper.com/about",
      mainEntity: {
        "@type": "Person",
        name: "Nguyen Hai Trinh",
        jobTitle: "Senior Fullstack Engineer (Go + React)",
        description:
          "Senior Fullstack Engineer (Go + React) with 4+ years of experience leading fullstack architectures, web/mobile development, and backend microservices.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ho Chi Minh City",
          addressCountry: "Vietnam",
        },
      },
    },
  },
  subtitle: "Specialized in Go, React ecosystem, type-safe architectures, and high-concurrency systems.",
  about: {
    description: `
      I am a Senior Fullstack Engineer (Go + React) with 4+ years of experience delivering high-impact web applications, cross-platform mobile apps, and backend APIs across fintech, healthcare, IoT, and banking.
      Currently working at Cognisian as a Senior Software Engineer, leading architecture for AI healthcare products (React 19, React Native 0.82, Next.js 16, Go/Gin).
      Holding a B.S. in Software Engineering from Van Lang University (2019–2024), my career highlights include architecting a licensed MXV derivatives trading platform from scratch (Nano Trading Platform), delivering clinical HIS & analytics engines for healthcare, building dual-app IoT smart-meter management portals (8TEN), and engineering multi-tenant AI HR/ATS SaaS platforms (HR-Tool).
      My ultimate career goal is to evolve from Senior Engineer → Tech Lead (product & engineering leadership) → Software Architect (large-scale system design).
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
      "Professional employment history & engineering roles:",
    items: [
      {
        title: "Senior Software Engineer",
        company: {
          name: "Cognisian",
          url: "https://cognisian.ai/",
          image: "/img/cognisian_logo.jpeg",
        },
        date: "Sep 2025 – Present",
      },
      {
        title: "Fullstack Engineer (Senior Frontend) — Contract",
        company: {
          name: "Bolt Technologies",
          url: "https://tornadoinvest.com.vn/",
          image: "/img/bolt_logo.jpg",
        },
        date: "Apr 2025 – Dec 2025",
      },
      {
        title: "Middle Frontend Engineer",
        company: {
          name: "WNE (Water & Environment Solutions SG)",
          url: "https://www.wnesolutions.sg/",
          image: "/img/wne_logo.jpeg",
        },
        date: "Nov 2023 – May 2025",
      },
      {
        title: "Frontend Engineer",
        company: {
          name: "ISB Vietnam Company (IVC)",
          url: "https://isb-vietnam.com.vn/",
          image: "/img/isb_logo.jpeg",
        },
        date: "Dec 2022 – Nov 2023",
      },
      {
        title: "Software Engineer (Part Time)",
        company: {
          name: "Cybersoft Technology Co., Ltd",
          url: "https://cybersoft.edu.vn/",
          image: "/img/cybersoft_logo.jpeg",
        },
        date: "Mar 2021 – Apr 2024",
      },
    ],
  },
  connect: {
    description: `Interested in technical collaboration, high-impact projects, or engineering discussions? Connect with me directly:`,
    links: socialLinks,
  },
};

export * from "./social";
export * from "./featured";
export * from "./github";

