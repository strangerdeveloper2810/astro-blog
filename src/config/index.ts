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
    domain: "trinhdev.vercel.app",
    url: "https://trinhdev.vercel.app",
  },
  role: "Software Engineer",
  company: "EDS/Bolt Technologies",
  description:
    "Hi, I’m Hai Trinh (Ethan Nguyen), a software engineer with 3+ years of experience building scalable web applications using React.js, Next.js, TypeScript, and Redux. I’ve worked on trading platforms, beauty platforms, banking systems, and IoT systems.",
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
    domain: "trinhdev.vercel.app",
    url: "https://trinhdev.vercel.app/about",
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
    description: "Here are some of the companies and projects I’ve worked on recently:",
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
        date: "Jan 2022 – Apr 2024",
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
