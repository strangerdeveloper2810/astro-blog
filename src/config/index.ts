import type {
  NavBarLink,
  Identity,
  AboutPageContent,
  HomePageContent,
} from "../types/config";

import { socialLinks, homeSocialLinks } from "./social";

export const identity: Identity = {
  name: "Nguyen Hai Trinh",
  logo: "/ethan.png",
  email: "n.haitrinh2810@gmail.com",
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
  },
  {
    title: "Skills",
    url: "/skills",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Nguyen Hai Trinh | Software Engineer | Frontend Specialist | Backend Developer",
    description:
      "Portfolio of Nguyen Hai Trinh, a Software Engineer specializing in React.js, Vue.js, TypeScript, Go, and Node.js with 3+ years of experience building scalable web applications.",
    image: openGraphImage,
    domain: "www.ethansoftwaredeveloper.com",
    url: "https://www.ethansoftwaredeveloper.com",
    keywords:
      "Software Engineer, Frontend Specialist, Backend Developer, React.js, Next.js, Vue.js, TypeScript, Go, Node.js, Trading Platform, Banking System, IoT Platform, Portfolio, Nguyen Hai Trinh",
    canonical: "https://www.ethansoftwaredeveloper.com",
    author: "Nguyen Hai Trinh",
    type: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Nguyen Hai Trinh",
      jobTitle: "Software Engineer",
      description:
        "Goal-oriented Software Engineer with strong experience in building scalable web applications using modern technologies. Specializes in frontend development and expanding into backend with Go and Node.js.",
      url: "https://www.ethansoftwaredeveloper.com",
      image: "https://www.ethansoftwaredeveloper.com/ethan.png",
      email: "n.haitrinh2810@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ho Chi Minh City",
        addressCountry: "Vietnam",
      },
      worksFor: {
        "@type": "Organization",
        name: "Bolt Technologies",
      },
      knowsAbout: [
        "React.js",
        "Next.js",
        "Vue.js",
        "TypeScript",
        "Redux",
        "GraphQL",
        "TradingView",
        "WebSocket",
        "Go",
        "Node.js",
        "Docker",
        "Spring Boot",
      ],
      sameAs: [
        "https://github.com/strangerdeveloper2810",
        "https://linkedin.com/in/trinhhainguyen",
      ],
    },
  },
  role: "Software Engineer",
  company: "Bolt Technologies",
  description:
    "Hi, I'm Nguyen Hai Trinh, a goal-oriented Software Engineer with strong experience in building scalable web applications using modern technologies. I specialize in frontend development and am expanding into backend with Go and Node.js. I've worked on trading platforms, banking systems, IoT platforms, and beauty booking systems. In the next 3 years, I aim to become a Senior Software Engineer, and within 5 years, I plan to take on the role of a Tech Lead.",
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
    title: "About | Nguyen Hai Trinh | Frontend Developer | Software Engineer",
    description:
      "About Nguyen Hai Trinh - Frontend Developer from Vietnam. Skilled in React.js, Next.js, Vue.js, TypeScript, and scalable web applications. Strong experience in trading platforms, banking systems, and IoT solutions.",
    image: openGraphImage,
    domain: "www.ethansoftwaredeveloper.com",
    url: "https://www.ethansoftwaredeveloper.com/about",
    keywords:
      "About Nguyen Hai Trinh, Frontend Developer Vietnam, React Developer, Vue.js Developer, Trading Platform Developer, Banking System Developer, IoT Platform Developer",
    canonical: "https://www.ethansoftwaredeveloper.com/about",
    author: "Nguyen Hai Trinh",
    type: "webpage",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Nguyen Hai Trinh",
      description:
        "About Nguyen Hai Trinh - Frontend Developer from Vietnam. Skilled in React.js, Next.js, Vue.js, TypeScript, and scalable web applications.",
      url: "https://www.ethansoftwaredeveloper.com/about",
      mainEntity: {
        "@type": "Person",
        name: "Nguyen Hai Trinh",
        jobTitle: "Frontend Developer",
        description:
          "Goal-oriented Frontend Developer with strong experience in building scalable web applications",
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
      Goal-oriented Frontend Developer with strong experience in building scalable web applications using modern technologies. 
      In the next 3 years, I aim to become a Senior Frontend Developer, mastering system design and leading frontend best practices. 
      Within 5 years, I plan to take on the role of a Tech Lead, driving product and engineering decisions. 
      My long-term vision, in the next 7–10 years, is to grow into a Software Architect or Engineering Manager, 
      designing robust, scalable, and maintainable software systems across large-scale platforms.
    `,
    image_l: {
      url: "/img/ethan_nguyen_1.jpg",
      alt: "Nguyen Hai Trinh",
    },
    image_r: {
      url: "/img/Ethan_Nguyen_2.jpg",
      alt: "Nguyen Hai Trinh",
    },
  },
  work: {
    description:
      "Here are some of the companies and projects I've worked on recently:",
    items: [
      {
        title: "Fullstack Engineer",
        company: {
          name: "Bolt Technologies",
          url: "https://tornadoinvest.com.vn/",
          image: "/img/bolt_logo.jpg",
        },
        date: "April 2025 – Now",
      },
      {
        title: "Software Engineer (Frontend Lead)",
        company: {
          name: "Eye Design Sydney",
          url: "https://komobook.com/",
          image: "/img/komo_logo.svg",
        },
        date: "Dec 2024 – Now",
      },
      {
        title: "Frontend Developer (IoT Platform)",
        company: {
          name: "WATER AND ENVIRONMENT SOLUTIONS SINGAPORE (WNE)",
          url: "https://www.wnesolutions.sg/",
          image: "/img/wne_logo.jpeg",
        },
        date: "Nov 2023 – May 2025",
      },
      {
        title: "Frontend Developer (Banking Platform)",
        company: {
          name: "ISB Vietnam",
          url: "https://isb-vietnam.com.vn/",
          image: "/img/isb_logo.jpeg",
        },
        date: "Dec 2022 – Nov 2023",
      },
      {
        title: "Software Engineer",
        company: {
          name: "Cybersoft Academy",
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
