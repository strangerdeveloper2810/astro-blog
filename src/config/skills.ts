import type { SkillsPageContent } from "../types/config";
import { openGraphImage } from "./index";

export const skillsPageContent: SkillsPageContent = {
  seo: {
    title: "Technical Skills & Arsenal | Nguyen Hai Trinh | Senior Fullstack Engineer",
    description:
      "Technical skill arsenal of Nguyen Hai Trinh matching professional resume: Languages, Frontend, Styling, UI Libraries, State Management, Form State Management, Backend, Testing, Tooling, and AI-Assisted Development.",
    image: openGraphImage,
    domain: "www.ethansoftwaredeveloper.com",
    url: "https://www.ethansoftwaredeveloper.com/skills",
    keywords:
      "HTML5, CSS3, SCSS, JavaScript, TypeScript, React.js, Next.js, React Native, Tailwind CSS, Styled Components, MUI, AntD, Shadcn/UI, Redux, Zustand, TanStack Query, Apollo Client, Formik, React-Hook-Form, Yup, Zod, Node.js, Nest.js, Go, Gin, Spring Boot 3, PostgreSQL, MySQL, Redis, Jest, React Testing Library, Playwright, Webpack, Vite, Rsbuild, Docker, Git, Jenkins, ESLint, Prettier, Biome, Cursor Pro, Claude Code Max, Gemini CLI",
    canonical: "https://www.ethansoftwaredeveloper.com/skills",
    author: "Nguyen Hai Trinh",
    type: "webpage",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Nguyen Hai Trinh",
      jobTitle: "Senior Fullstack Engineer (Go + React)",
      knowsAbout: [
        "TypeScript",
        "React.js",
        "Next.js",
        "React Native",
        "Go (Gin)",
        "Nest.js",
        "Tailwind CSS",
        "Shadcn/UI",
        "MUI",
        "TanStack Query",
        "PostgreSQL",
        "Docker",
        "Playwright",
      ],
      url: "https://www.ethansoftwaredeveloper.com/skills",
    },
  },
  title: "Technical Skills & Arsenal",
  subtitle: "Full-stack technologies, frameworks, and AI tools mapped directly from my resume",
  categories: [
    {
      name: "Languages",
      skills: [
        {
          name: "HTML5",
          icon: "logos:html-5",
          description: "Semantic markup, SEO optimization, accessibility (a11y)",
        },
        {
          name: "CSS3",
          icon: "logos:css-3",
          description: "Modern layout positioning, Flexbox, Grid, keyframe animations",
        },
        {
          name: "SCSS",
          icon: "logos:sass",
          description: "CSS preprocessor, mixins, variables, nested style structures",
        },
        {
          name: "JavaScript (ES6+)",
          icon: "logos:javascript",
          description: "Async/await, ES modules, Web Workers, DOM API, Event Loop",
        },
        {
          name: "TypeScript",
          icon: "logos:typescript-icon",
          description: "Strict type safety, generics, utility types, schema validation",
        },
      ],
    },
    {
      name: "Frontend",
      skills: [
        {
          name: "React.js",
          icon: "logos:react",
          description: "Component architecture, Hooks, React 19, Fiber, Concurrent Mode",
        },
        {
          name: "Next.js (Pages Router & App Router)",
          icon: "logos:nextjs-icon",
          description: "Pages Router & App Router, SSR/SSG, Server Components, next-intl",
        },
        {
          name: "React Native (RN CLI)",
          icon: "logos:react",
          description: "Fabric renderer, NativeWind v4, mobile EMR viewer, vitals tracking",
        },
        {
          name: "Vue 3",
          icon: "logos:vue",
          description: "Composition API, Pinia, PrimeVue, eKYC admin dashboards",
        },
        {
          name: "Astro.js",
          icon: "logos:astro-icon",
          description: "Content-driven web framework, island architecture, zero JS by default, SSG & SSR",
        },
      ],
    },
    {
      name: "Styling",
      skills: [
        {
          name: "Tailwind CSS",
          icon: "logos:tailwindcss-icon",
          description: "Utility-first CSS, custom design systems, responsive design",
        },
        {
          name: "SCSS (CSS Preprocessor)",
          icon: "logos:sass",
          description: "Modular styling, mixins, variable tokens, nesting",
        },
        {
          name: "Styled Components",
          icon: "simple-icons:styledcomponents",
          description: "CSS-in-JS, dynamic prop styling, themed component systems",
        },
      ],
    },
    {
      name: "UI Library",
      skills: [
        {
          name: "MUI",
          icon: "logos:material-ui",
          description: "Enterprise admin portals, customizable themes, dark mode",
        },
        {
          name: "AntD",
          icon: "logos:ant-design",
          description: "Internal admin systems, complex data tables, form controls",
        },
        {
          name: "Shadcn/UI",
          icon: "simple-icons:shadcnui",
          description: "Radix UI primitives, accessible dialogs, popovers, data tables",
        },
      ],
    },
    {
      name: "State Management",
      skills: [
        {
          name: "Redux (Toolkit, Thunk, Saga)",
          icon: "logos:redux",
          description: "Global state slices, Redux Saga side-effects, immutable state",
        },
        {
          name: "Zustand",
          icon: "heroicons:cube",
          description: "Lightweight atomic state management, store subscriptions",
        },
        {
          name: "TanStack Query",
          icon: "logos:react-query-icon",
          description: "Server state caching, optimistic updates, background refetching",
        },
        {
          name: "Apollo Client (GraphQL)",
          icon: "logos:graphql",
          description: "Multi-endpoint GraphQL client, dynamic service routing, subscriptions",
        },
      ],
    },
    {
      name: "Form State Management",
      skills: [
        {
          name: "Formik",
          icon: "simple-icons:formik",
          description: "Form state handling, submission flow, error handling",
        },
        {
          name: "React-Hook-Form",
          icon: "simple-icons:reacthookform",
          description: "Performant form state, minimal re-renders, uncontrolled inputs",
        },
        {
          name: "Yup",
          icon: "heroicons:shield-check",
          description: "Object schema validation, custom validation rules",
        },
        {
          name: "Zod",
          icon: "simple-icons:zod",
          description: "TypeScript-first schema declaration and validation",
        },
      ],
    },
    {
      name: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: "logos:nodejs-icon",
          description: "Asynchronous I/O, server-side JavaScript runtime",
        },
        {
          name: "Nest.js",
          icon: "logos:nestjs",
          description: "TypeORM microservices, JWT auth, SSE streaming metrics",
        },
        {
          name: "Go / Gin",
          icon: "logos:go",
          description: "High-concurrency REST APIs, backend hooks pattern, DB migrations",
        },
        {
          name: "Spring Boot 3",
          icon: "logos:spring-icon",
          description: "Java microservices, enterprise REST backend services",
        },
        {
          name: "PostgreSQL",
          icon: "logos:postgresql",
          description: "Transactional CRUD, indexed queries, ON DELETE CASCADE, TypeORM",
        },
        {
          name: "MySQL",
          icon: "logos:mysql-icon",
          description: "Relational database, query optimization, database indexing",
        },
        {
          name: "Redis",
          icon: "logos:redis",
          description: "Redis BullMQ background queue, in-memory caching, rate-limiting",
        },
      ],
    },
    {
      name: "Testing",
      skills: [
        {
          name: "Jest",
          icon: "logos:jest",
          description: "JavaScript unit testing framework, test runners, assertion mocks",
        },
        {
          name: "React Testing Library",
          icon: "simple-icons:testinglibrary",
          description: "Component DOM testing, user event simulations",
        },
        {
          name: "Playwright",
          icon: "logos:playwright",
          description: "Automated E2E insurance claim & billing flows, cross-browser testing",
        },
      ],
    },
    {
      name: "Tooling",
      skills: [
        {
          name: "Webpack",
          icon: "logos:webpack",
          description: "Module bundling, code splitting, loader configurations",
        },
        {
          name: "Vite",
          icon: "logos:vitejs",
          description: "Next-gen frontend tooling, lightning-fast HMR",
        },
        {
          name: "Rsbuild",
          icon: "/img/rsbuild_logo.svg",
          description: "Rspack-powered build engine, cutting CI build time 5–10x",
        },
        {
          name: "Docker",
          icon: "logos:docker-icon",
          description: "Multi-arch Docker images, standalone clinic bundles, containerization",
        },
        {
          name: "Git",
          icon: "logos:git-icon",
          description: "Branching strategies, commit history, rebase, PR workflows",
        },
        {
          name: "Jenkins",
          icon: "logos:jenkins",
          description: "Automated CI/CD pipelines, staging and production deployments",
        },
        {
          name: "ESLint",
          icon: "logos:eslint",
          description: "Code linting and static code analysis",
        },
        {
          name: "Prettier",
          icon: "logos:prettier",
          description: "Automated code formatting and style enforcement",
        },
        {
          name: "Biome",
          icon: "heroicons:sparkles",
          description: "Ultra-fast JavaScript/TypeScript linter and formatter",
        },
      ],
    },
    {
      name: "AI-Assisted Development",
      skills: [
        {
          name: "Cursor Pro",
          icon: "/img/cursor_logo.svg",
          description: "AI-powered IDE, rapid feature prototyping, codebase context search",
        },
        {
          name: "Claude Code Max",
          icon: "/img/claude_code_logo.svg",
          description: "Anthropic Claude agentic coding, automated refactoring, complex logic",
        },
        {
          name: "Gemini CLI",
          icon: "logos:google-gemini",
          description: "Google DeepMind AI assistant for developer workflows",
        },
      ],
    },
  ],
};
