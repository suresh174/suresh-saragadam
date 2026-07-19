export const profile = {
  name: "Suresh Saragadam",
  firstName: "Suresh",
  lastName: "Saragadam",
  title: "AI Engineer",
  intro:
    "Hey — I'm Suresh. I build on both sides of the stack (React + Node.js), and for the last ~1.5 years I've been shipping a production GenAI assistant: it understands user intent and answers from our real product data.",
  tagline:
    "Intent-aware LLM assistants · grounded responses · eval-safe prompt shipping.",
  location: "Visakhapatnam, Andhra Pradesh, India",
  phone: "+91 901-030-3509",
  email: "saragadamsuresh174@gmail.com",
  linkedin: "https://www.linkedin.com/in/suresh-saragadam-11017415a",
  resumePath: "/Suresh-Saragadam-Resume.pdf",
  photoHero: "/photos/suresh-outdoor.png",
  photoPortrait: "/photos/suresh-portrait.png",
  summary:
    "Senior Software Development Engineer, currently active at NielsenIQ (since Oct 2022). I ship full-stack product work in React and Node.js. Over the last ~1.5 years I've focused on a GenAI assistant that interprets intent and returns grounded responses from our systems — simple on the surface, hard in production. Reliability, prompt-change safety, observability, and evaluation are the real challenges; I've tackled them with Azure OpenAI, Langfuse, Python, Pydantic, and automated evaluators.",
  focusAreas: [
    "Intent-aware LLM assistants",
    "Azure OpenAI · Langfuse · evals",
    "Python · Pydantic",
    "React + Node.js",
  ],
} as const;

export const experience = [
  {
    company: "NielsenIQ (NIQ)",
    role: "Senior Software Development Engineer",
    startLabel: "Oct 2022",
    startYear: 2022,
    startMonth: 10,
    present: true,
    location: "India",
    current: true,
    highlights: [
      "Currently active — shipping production retail analytics for small and medium CPG manufacturers.",
      "For ~1.5 years, building a GenAI assistant that understands user intent and responds with information available in our systems — simple in concept, demanding in production.",
      "Kept prompt iteration safe with automated evaluators, Pydantic structured outputs, and Langfuse observability on Azure OpenAI.",
      "Worked across the stack — Python for LLM services, React for product UX, Node.js where the platform needs it.",
      "Shipped reusable UI and platform components adopted across functional areas by the wider team.",
    ],
  },
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Senior Software Development Engineer",
    startLabel: "Jan 2021",
    endLabel: "Sep 2022",
    startYear: 2021,
    startMonth: 1,
    endYear: 2022,
    endMonth: 9,
    present: false,
    location: "India",
    current: false,
    highlights: [
      "Delivered React-based retail analytics experiences for CPG manufacturers.",
      "Built reusable frontend components that accelerated feature delivery across modules.",
      "Recognized with Innovista Award and client Duct Tape Award for module delivery impact.",
    ],
  },
  {
    company: "Schemax Expert Techno Crafts",
    role: "Software Development Engineer / Intern",
    startLabel: "Feb 2017",
    endLabel: "Dec 2020",
    startYear: 2017,
    startMonth: 2,
    endYear: 2020,
    endMonth: 12,
    present: false,
    location: "India",
    current: false,
    highlights: [
      "Supported BIEAP public examination paper valuation systems for Andhra Pradesh — triage and bug fixes under live constraints.",
      "Built Shop Floor Control APIs for Brandix so plants could track garment manufacturing productivity.",
      "Integrated Keycloak for centralized user management across modules.",
      "Delivered vehicle service lifecycle tracking with IoT collaboration and payment gateway integration.",
      "Worked on ERP systems and a refurbished online mobile store engagement at the client site in Hyderabad.",
    ],
  },
] as const;

export const projects = [
  {
    name: "Intent-aware analytics assistant",
    org: "NielsenIQ · ongoing",
    period: "~1.5 yrs GenAI (within NIQ tenure)",
    description:
      "A production conversational assistant for retail analytics. It interprets what the user is asking, maps that intent to data and responses in our product, and returns answers teams can trust. Behind the calm UX: Azure OpenAI, Langfuse tracing, Pydantic-structured pipelines, and evaluator suites so prompt changes do not silently break existing flows.",
    stack: [
      "Azure OpenAI",
      "Langfuse",
      "Prompt evaluation",
      "Python",
      "Pydantic",
      "React",
      "Node.js",
    ],
  },
  {
    name: "Brandix Apparel manufacturing platform (v2)",
    org: "Schemax / Brandix",
    period: "Major project",
    description:
      "Mono-repo (Nx/NRWL) platform spanning decentralized codebases across 36 plants for shop-floor visibility and productivity tracking.",
    stack: ["Nx / NRWL", "APIs", "Multi-plant architecture"],
  },
] as const;

export const skills = {
  ai: [
    "Intent understanding & grounded responses",
    "Azure OpenAI (GPT-4o / mini / o-series)",
    "Langfuse observability",
    "Prompt evaluation & regression tests",
    "Python · Pydantic structured outputs",
  ],
  frontend: ["React", "JavaScript", "TypeScript", "Bootstrap", "Analytics UI"],
  backend: [
    "Node.js",
    "Python",
    "NestJS",
    "PHP",
    "Yii2",
    "Laravel",
    "REST APIs",
  ],
  data: ["MySQL", "PostgreSQL", "MongoDB"],
  platform: [
    "Docker",
    "Nginx",
    "Apache",
    "Keycloak",
    "GitHub",
    "Jira",
    "Linux",
  ],
} as const;

export const education = {
  school: "Dr. Hima Sekhar Degree College",
  degree: "B.Sc. in Computer Science",
  period: "July 2012 — May 2015",
  location: "Vizag, India",
  gpa: "CGPA 7.00 / 10",
  coursework: [
    "Data Structures",
    "Design and Analysis of Algorithms",
    "Computer Architecture",
    "Database Systems",
    "Operating Systems",
    "Software Engineering",
  ],
} as const;

export const achievements = [
  "Excellence Award at Schemax for extraordinary quarterly performance.",
  "USA client appreciation for delivering a project in one week on a new technology stack.",
  "CTO appreciation (Schemax) for ramping on new technologies quickly.",
  "Innovista Award (TCS) for team contribution in module development.",
  "Client Duct Tape Award (TCS) for pragmatic delivery under pressure.",
  "Coordinator and problem setter for the annual college technical / coding fest.",
] as const;

export const writingPlaceholders = [
  {
    slug: "roadmap",
    title: "Learning roadmap",
    excerpt:
      "Notes on what I am studying next across LLM evaluation, observability, and production assistants. Coming soon.",
    status: "soon" as const,
  },
  {
    slug: "prompt-evals-in-production",
    title: "Keeping prompt changes safe in production",
    excerpt:
      "How evaluators, Langfuse, and structured outputs help ship intent-aware assistants without breaking existing flows. Draft in progress.",
    status: "soon" as const,
  },
] as const;
