export const profile = {
  name: "Darko Vasiljkov",
  descriptor: "Software Engineer",
  introduction: {
    before: "I'm a software engineer from ",
    country: "Macedonia",
    after:
      ", currently building telecom software at MCA.mk. I work across the stack, solving complex problems and turning them into software people can rely on. I spend a lot of my free time building too, from polished websites to side projects and ideas I simply want to see exist.",
  },
  signature: {
    src: "/signature-logo-final.png",
  },
  portrait: {
    src: "/Darko_Photo_Winter1.jpeg",
    alt: "Darko Vasiljkov outdoors in winter",
  },
} as const;


export const musicChannelUrl = "https://www.youtube.com/@sincerelydarko";

export const currentActivities = [
  {
    before:
    "Building telecom software with Angular (.ts) and .NET, making old systems feel a little less old.",
    link: null,
    after: "",
  },
  {
    before:
      "Turning ideas into side projects and exploring where AI is actually useful.",
    link: null,
    after: "",
  },
  {
    before: "Playing piano and keyboards. I also used to produce music and ",
    link: {
      label: "beats",
      href: musicChannelUrl,
    },
    after: ".",
  },
] as const;

export type Project = {
  name: string;
  summary: string;
  period: string;
  description: string;
  contribution: string;
  technologies: readonly string[];
  /** Paste the ID from youtube.com/watch?v=VIDEO_ID, or leave null. */
  youtubeVideoId: string | null;
  youtubeVideoTitle: string;
  currentPage?: boolean;
};

export const selectedProjects = [
  {
    name: "Darko Portfolio",
    summary: "Personal portfolio and digital home",
    period: "You’re here",
    description:
      "Focused personal portfolio designed to introduce my work, experience, interests, and the things I am currently building.",
    contribution:
      "Designed and built the complete experience, including the responsive interface, content system, theme support, project interactions, metadata, and visual identity.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
    youtubeVideoId: null,
    youtubeVideoTitle: "Darko Portfolio walkthrough",
    currentPage: true,
  },
  {
    name: "Convertly",
    summary: "AI lead magnet platform",
    period: "Project",
    description:
      "A subscription product for creating business-specific lead-generation chat assistants and sharing them with prospective customers.",
    contribution:
      "Built the product across its web experience, application services, data layer, and AI integration.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "OpenAI API",
    ],
    youtubeVideoId: null,
    youtubeVideoTitle: "Convertly project walkthrough",
  },
  {
    name: "BeMatched",
    summary: "Full-stack dating application",
    period: "Project",
    description:
      "A deployed application with profile management, matching, REST APIs, and real-time messaging.",
    contribution:
      "Built the full-stack application, including the Angular interface, ASP.NET Core API, persistence, and real-time features.",
    technologies: [
      "ASP.NET Core",
      "Angular",
      "Entity Framework Core",
      "SQLite",
      "Azure",
    ],
    youtubeVideoId: null,
    youtubeVideoTitle: "BeMatched project walkthrough",
  },
  {
    name: "Gomatic.mk",
    summary: "Manufacturing business website",
    period: "Project",
    description:
      "A business website for GOMATIC that presents the company, its manufacturing capabilities, and its services to prospective customers.",
    contribution:
      "Designed and built a responsive website with clear navigation and a professional presentation of the business.",
    technologies: ["React", "TypeScript", "Next.js", "Cloudflare", "SEO"],
    youtubeVideoId: null,
    youtubeVideoTitle: "Gomatic.mk project walkthrough",
  },
  {
    name: "Location-Aware Chat Room",
    summary: "Faculty ticketing system project",
    period: "Project",
    description:
      "A Wi-Fi-aware student chat room with real-time communication and interactive surveys.",
    contribution:
      "Implemented the application flow and real-time communication used by students in the room.",
    technologies: ["Java", "Spring", "JavaScript", "WebSockets"],
    youtubeVideoId: null,
    youtubeVideoTitle: "Location-Aware Chat Room project walkthrough",
  },
] satisfies readonly Project[];

export const readingIntroduction =
  "Books I've read and find valuable";

export type ReadingItem = {
  title: string;
  detail: string;
  rating: number | null;
  /** Set to a short label such as "Reading now", or leave null. */
  badge: string | null;
};

export const reading = [
  {
    title: "Clean Code",
    detail: "Robert C. Martin",
    rating: 4,
    badge: null,
  },
  {
    title: "The Pragmatic Programmer",
    detail: "Andy Hunt, Dave Thomas",
    rating: 5,
    badge: null,
  },
  {
    title: "Meditations",
    detail: "Marcus Aurelius",
    rating: 5,
    badge: null,
  },
  {
    title:"The Almanack of Naval Ravikant",
    detail: "Eric Jorgenson",
    rating: 5,
    badge: null,
  },
  {
    title: "The Daily Stoic",
    detail: "Ryan Holiday",
    rating: null,
    badge: "reading"
  },
] satisfies readonly ReadingItem[];

export const timeline = [
  {
    year: "Now",
    event:
      "Software Engineer at MCA.mk, building and modernizing the GlobalConnect B/OSS platform",
  },
  {
    year: "2025",
    event:
      "Joined MCA.mk as a Software Engineering Intern, graduated from FCSE-UKIM, and was promoted to Software Engineer",
  },
  {
    year: "2022–2024",
    event:
      "Worked at Elucidat (acq by Confirm) as a Data Researcher, later taking on responsibility for coordinating external research work",
  },
  {
    year: "2021",
    event:
      "Started studying Software Engineering at FCSE-UKIM and began freelancing on Upwork",
  },
] as const;

export const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/darkovasiljkov",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/darkovasiljkov/",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:vasiljkovdarko@gmail.com",
    external: true,
  },
] as const;

export const primaryContactLinks = [
  contactLinks[0],
  contactLinks[1],
  {
    label: "X",
    // Replace this with your X profile URL when you are ready.
    href: "https://x.com/",
    external: true,
  },
] as const;
