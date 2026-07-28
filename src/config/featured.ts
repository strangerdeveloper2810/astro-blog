import type { FeaturedPost } from "../types/config";

export const featuredPosts: FeaturedPost[] = [
  {
    title: "HR-Tool | Multi-Tenant HR/ATS SaaS",
    description:
      "Solo-engineered multi-tenant HR/ATS SaaS supporting enterprise HR & headhunt agencies with RBAC, full audit logging, recruitment pipeline, real-time Docker metrics, and an AI candidate-job matching engine (Anthropic Claude 4.8 Opus + Gemini 3.6 Flash fallback).",
    date: "2025-01-01",
    url: "https://hrtool.ethansoftwaredeveloper.com/",
    author: "Nguyen Hai Trinh",
    image: {
      url: "/img/hrtool_logo.svg",
      alt: "HR-Tool Multi-Tenant SaaS",
    },
    publisher: "Personal Project (Live v1.1.0-beta)",
  },
  {
    title: "Caresa HIS & Chanakya Analytics Dashboard",
    description:
      "Leading frontend for AI healthcare platform across Web (React 19), Mobile (React Native 0.82 Fabric), Next.js 16 App Router analytics dashboard (~150 charts), Go/Gin backend, and StarRocks OLAP reducing query latency from ~1.5s to ~250ms.",
    date: "2025-09-01",
    url: "https://cognisian.com/",
    author: "Nguyen Hai Trinh",
    image: {
      url: "/img/cognisian_logo.jpeg",
      alt: "Cognisian Caresa HIS & Analytics",
    },
    publisher: "Cognisian",
  },
  {
    title: "Nano Trading Platform — MXV Commodities Derivatives",
    description:
      "Architected frontend from scratch for Vietnam Commodity Exchange (MXV) licensed trading platform using React 19, Apollo GraphQL, Socket.io, Web Workers for 20K+ OHLC records, and custom TradingView Advanced Charts datafeed.",
    date: "2025-04-01",
    url: "https://tornadoinvest.com.vn/",
    author: "Nguyen Hai Trinh",
    image: {
      url: "/img/bolt_logo.jpg",
      alt: "Nano Derivatives Trading Platform",
    },
    publisher: "Bolt Technologies",
  },
  {
    title: "F1 Commodities Ecosystem & Admin CMS",
    description:
      "Built Vue 3 eKYC admin dashboard, trading portal, and optimized backend account loading API with Caffeine caching (cutting latency from 5s+ to ~0.2s). Integrated MXV GraphQL balance sync and Telegram notifications.",
    date: "2025-01-01",
    url: "https://tornadoinvest.com.vn/",
    author: "Nguyen Hai Trinh",
    image: {
      url: "/img/bolt_logo.jpg",
      alt: "F1 Trading Ecosystem",
    },
    publisher: "Bolt Technologies",
  },
  {
    title: "8TEN Smart Building IoT Platform",
    description:
      "Dual-application IoT platform (Customer Portal + Management Portal) for smart water/electricity meter tracking, Sankey leakage detection diagrams, usage prediction charts, abnormal consumption alerts, and Redux Saga.",
    date: "2023-11-01",
    url: "https://www.wnesolutions.sg/",
    author: "Nguyen Hai Trinh",
    image: {
      url: "/img/wne_logo.jpeg",
      alt: "8TEN IoT Platform",
    },
    publisher: "WNE Solutions Singapore",
  },
  {
    title: "Japanese Banking System Monorepo",
    description:
      "Engineered & maintained micro-frontend monorepo covering 50+ pages across 3 independently deployable portals (Client, Banker, Corporate) for a major Japanese financial conglomerate using Next.js, Redux Saga, and Storybook.",
    date: "2022-12-01",
    url: "https://isb-vietnam.com.vn/",
    author: "Nguyen Hai Trinh",
    image: {
      url: "/img/isb_logo.jpeg",
      alt: "Japanese Banking System",
    },
    publisher: "ISB Vietnam",
  },
];

