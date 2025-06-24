import type { SkillsPageContent } from "../types/config";
import { openGraphImage } from "./index";

export const skillsPageContent: SkillsPageContent = {
    seo: {
        title: "Skills | Hai Trinh (Ethan Nguyen) | Full-Stack Developer",
        description:
            "Technical skills and expertise of Hai Trinh - React.js, Next.js, TypeScript, Node.js, Angular, Vue.js, Java Spring Boot, and more. 3+ years of software development experience.",
        image: openGraphImage,
        domain: "www.ethansoftwaredeveloper.com",
        url: "https://www.ethansoftwaredeveloper.com/skills",
        keywords: "React.js, Next.js, TypeScript, Node.js, Angular, Vue.js, Java Spring Boot, Docker, GraphQL, Redux, TailwindCSS, MongoDB, PostgreSQL, Prisma",
        canonical: "https://www.ethansoftwaredeveloper.com/skills",
        author: "Hai Trinh (Ethan Nguyen)",
        type: "webpage",
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Hai Trinh",
            "alternateName": "Ethan Nguyen",
            "jobTitle": "Software Engineer",
            "knowsAbout": [
                "React.js", "Next.js", "TypeScript", "Node.js", "Angular", "Vue.js",
                "Java Spring Boot", "Docker", "GraphQL", "Redux", "TailwindCSS", "MongoDB", "PostgreSQL"
            ],
            "url": "https://www.ethansoftwaredeveloper.com/skills"
        }
    },
    title: "Technical Skills & Expertise",
    subtitle: "Technologies and tools I use to build scalable applications",
    categories: [
        {
            name: "Language",
            skills: [
                {
                    name: "HTML5",
                    icon: "logos:html-5",
                    description: "Semantic markup, accessibility, web standards"
                },
                {
                    name: "CSS3",
                    icon: "logos:css-3",
                    description: "Flexbox, Grid, animations, responsive design"
                },
                {
                    name: "Sass",
                    icon: "logos:sass",
                    description: "CSS preprocessor, variables, nesting, mixins"
                },
                {
                    name: "JavaScript",
                    icon: "logos:javascript",
                    description: "ES6+, async/await, modules, performance optimization"
                },
                {
                    name: "TypeScript",
                    icon: "logos:typescript-icon",
                    description: "Type-safe development, advanced types, generics"
                },
                {
                    name: "Java",
                    icon: "logos:java",
                    description: "Enterprise applications, object-oriented programming"
                }
            ]
        },
        {
            name: "Frontend Development",
            skills: [
                {
                    name: "Angular",
                    icon: "logos:angular-icon",
                    description: "Component-based architecture, services, RxJS"
                },
                {
                    name: "React.js",
                    icon: "logos:react",
                    description: "Component architecture, hooks, performance optimization"
                },
                {
                    name: "Next.js",
                    icon: "logos:nextjs-icon",
                    description: "SSR/SSG, API routes, performance optimization"
                },
                {
                    name: "Vue.js",
                    icon: "logos:vue",
                    description: "Composition API, Vuex, reactive programming"
                },
                {
                    name: "Nuxt.js",
                    icon: "logos:nuxt-icon",
                    description: "Vue.js framework for production applications"
                },
                {
                    name: "Astro",
                    icon: "logos:astro-icon",
                    description: "Static site generation, component islands"
                },
                {
                    name: "React Router",
                    icon: "simple-icons:reactrouter",
                    description: "Client-side routing, nested routes, navigation"
                }
            ]
        },
        {
            name: "Backend Development",
            skills: [
                {
                    name: "Express.js",
                    icon: "simple-icons:express",
                    description: "RESTful APIs, middleware, authentication"
                },
                {
                    name: "Spring Boot",
                    icon: "logos:spring-icon",
                    description: "Enterprise Java framework, microservices, REST APIs"
                }
            ]
        },
        {
            name: "Mobile Development",
            skills: [
                {
                    name: "Flutter",
                    icon: "logos:flutter",
                    description: "Cross-platform mobile apps, Dart programming"
                },
                {
                    name: "React Native",
                    icon: "logos:react",
                    description: "Mobile development with React, native modules"
                }
            ]
        },
        {
            name: "Architecture & Design Patterns",
            skills: [
                {
                    name: "Clean Architecture",
                    icon: "heroicons:building-library",
                    description: "Separation of concerns, dependency inversion, maintainable code structure"
                },
                {
                    name: "Component Architecture",
                    icon: "heroicons:puzzle-piece",
                    description: "Reusable components, composition patterns, props flow"
                },
                {
                    name: "RESTful APIs",
                    icon: "heroicons:cloud-arrow-up",
                    description: "REST principles, HTTP methods, stateless design"
                },
                {
                    name: "Microservices",
                    icon: "heroicons:server-stack",
                    description: "Service decomposition, inter-service communication"
                }
            ]
        },
        {
            name: "Database & ORM",
            skills: [
                {
                    name: "MongoDB",
                    icon: "logos:mongodb-icon",
                    description: "Document modeling, aggregation, indexing"
                },
                {
                    name: "PostgreSQL",
                    icon: "logos:postgresql",
                    description: "Relational design, complex queries, optimization"
                },
                {
                    name: "MySQL",
                    icon: "logos:mysql-icon",
                    description: "Database design, stored procedures, optimization"
                },
                {
                    name: "Prisma",
                    icon: "simple-icons:prisma",
                    description: "Type-safe database client, schema management"
                },
                {
                    name: "TypeORM",
                    icon: "simple-icons:typeorm",
                    description: "TypeScript ORM, entity management"
                },
                {
                    name: "Hibernate/JPA",
                    icon: "simple-icons:hibernate",
                    description: "Java ORM, entity mapping, database operations"
                }
            ]
        },
        {
            name: "State Management",
            skills: [
                {
                    name: "Redux Toolkit",
                    icon: "logos:redux",
                    description: "Complex state management, middleware, DevTools"
                },
                {
                    name: "Redux Saga",
                    icon: "heroicons:cog-6-tooth",
                    description: "Side effects management, async flow control"
                },
                {
                    name: "TanStack Query",
                    icon: "simple-icons:reactquery",
                    description: "Server state management, caching, synchronization"
                },
                {
                    name: "Apollo Client",
                    icon: "simple-icons:apollographql",
                    description: "GraphQL client, caching, real-time subscriptions"
                },
                {
                    name: "GraphQL",
                    icon: "logos:graphql",
                    description: "Schema design, resolvers, API optimization"
                }
            ]
        },
        {
            name: "Form Handling",
            skills: [
                {
                    name: "React Hook Form",
                    icon: "simple-icons:reacthookform",
                    description: "Performant forms, minimal re-renders, validation"
                },
                {
                    name: "Formik",
                    icon: "simple-icons:formik",
                    description: "Form state management, validation, error handling"
                },
                {
                    name: "Yup",
                    icon: "heroicons:shield-check",
                    description: "Schema validation, form validation rules"
                }
            ]
        },
        {
            name: "Performance & Optimization",
            skills: [
                {
                    name: "Code Splitting",
                    icon: "heroicons:scissors",
                    description: "Dynamic imports, bundle optimization, lazy loading"
                },
                {
                    name: "Tree Shaking",
                    icon: "heroicons:funnel",
                    description: "Dead code elimination, bundle size optimization"
                },
                {
                    name: "Bundle Analysis",
                    icon: "heroicons:chart-pie",
                    description: "Webpack bundle analyzer, performance monitoring"
                },
                {
                    name: "Web Vitals",
                    icon: "heroicons:bolt",
                    description: "Core Web Vitals optimization, performance metrics"
                }
            ]
        },
        {
            name: "UI Libraries & Design",
            skills: [
                {
                    name: "Material-UI (MUI)",
                    icon: "logos:material-ui",
                    description: "React components, theming, design systems"
                },
                {
                    name: "Ant Design",
                    icon: "simple-icons:antdesign",
                    description: "Enterprise-class UI components"
                },
                {
                    name: "TailwindCSS",
                    icon: "logos:tailwindcss-icon",
                    description: "Utility-first CSS, custom designs, responsive layouts"
                }
            ]
        },
        {
            name: "Development Workflow",
            skills: [
                {
                    name: "pnpm",
                    icon: "simple-icons:pnpm",
                    description: "Fast, disk space efficient package manager"
                },
                {
                    name: "Yarn",
                    icon: "logos:yarn",
                    description: "Package management, workspaces, dependency resolution"
                },
                {
                    name: "Biome",
                    icon: "simple-icons:biome",
                    description: "Fast formatter and linter, ESLint/Prettier alternative"
                },
                {
                    name: "ESLint",
                    icon: "simple-icons:eslint",
                    description: "Code linting, static analysis, code quality"
                }
            ]
        },
        {
            name: "Development Tools",
            skills: [
                {
                    name: "Git",
                    icon: "logos:git-icon",
                    description: "Version control, branching strategies, collaboration"
                },
                {
                    name: "Vercel",
                    icon: "logos:vercel-icon",
                    description: "Serverless platform, edge functions, static site hosting"
                },
                {
                    name: "Docker",
                    icon: "logos:docker-icon",
                    description: "Containerization, multi-stage builds, compose"
                },
                {
                    name: "Webpack",
                    icon: "logos:webpack",
                    description: "Module bundling, optimization, configuration"
                },
                {
                    name: "Vite",
                    icon: "logos:vitejs",
                    description: "Fast build tool, development server"
                },
                {
                    name: "Rsbuild",
                    icon: "logos:rust",
                    description: "Build tool for modern web applications"
                },
                {
                    name: "Jenkins",
                    icon: "logos:jenkins",
                    description: "CI/CD pipelines, automated deployment"
                },
                {
                    name: "Bitbucket Pipelines",
                    icon: "logos:bitbucket",
                    description: "CI/CD pipelines, automated deployment"
                }
            ]
        },
        {
            name: "Testing & Methodology",
            skills: [
                {
                    name: "Jest",
                    icon: "logos:jest",
                    description: "Unit testing, mocking, test coverage"
                },
                {
                    name: "React Testing Library",
                    icon: "simple-icons:testinglibrary",
                    description: "Component testing, user-centric tests"
                },
                {
                    name: "Agile/Scrum",
                    icon: "simple-icons:scrumalliance",
                    description: "Agile methodology, sprint planning, team collaboration"
                }
            ]
        }
    ]
}; 