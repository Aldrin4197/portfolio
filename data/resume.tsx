import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aldrin Jay",
  initials: "AJ",
  url: "https://www.linkedin.com/in/aldrin-jay-delos-reyes-559817267/",
  location: "Catbalogan City, Philippines",
  locationLink: "https://www.google.com/maps/place/catbalogan",
  description:
    "ECE turned Developer. I love building things.",
  summary:
    "At the end of 2022, transitioned to focus full-time on building and scaling SaaS businesses. A self-taught developer with a background in [Electronics and Communications Engineering](/#education). I am also passionate about prototyping, tinkering, and competing in local and regional product and research competitions to explore creative and technical challenges.",
  avatarUrl: "/jjk.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    ".NET Core",
    "LinQ",
    "MongoDB",
    "Docker",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aldrinjay.delosreyes@ssu.edu.ph",
    tel: "+639103236014",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Aldrin4197",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aldrin-jay-delos-reyes-559817267/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Samar State University",
      href: "https://ssu.edu.ph",
      badges: [],
      location: "On-site",
      title: "Information Systems Analyst I",
      logoUrl: "/ssu.png",
      start: "January 2024",
      end: "Present",
      description:
        "Developed software to improve university processes, managed and organized data for smoother operations, and handled website updates to keep them user-friendly and engaging. Focused on boosting performance and keeping data secure while supporting the university’s goals.",
    },
    {
      company: "CreatorBox Products and Solution",
      badges: [],
      href: "https://shopify.com",
      location: "Hybrid",
      title: "Embedded Systems Developer",
      logoUrl: "/crb.jpg",
      start: "November 2022",
      end: "November 2023",
      description:
        "Developed eSense Motes, a prototype for offline file transfer without internet or cellular networks, focusing on creating innovative and practical embedded systems solutions.",
    },
    {
      company: "Department of Education - SDO of Catbalogan City",
      href: "https://nvidia.com/",
      badges: [],
      location: "On-site",
      title: "IT Teacher",
      logoUrl: "/sns.jpg",
      start: "Sept 2020",
      end: "July 2022",
      description:
        "Responsible for teaching science and technology subjects, integrating IT into the curriculum, managing the institution’s IT infrastructure, troubleshooting hardware and software issues, and providing technical support.",
    },

  ],
  education: [
    {
      school: "CS50x 2023",
      href: "https://cs50.harvard.edu/x/2024/",
      degree: "Introductory Computer Science Course",
      logoUrl: "/harvard.png",
      start: "2024",
      end: "Present",
    },
    {
      school: "FreeCodeCamp",
      href: "https://www.freecodecamp.org/",
      degree: "FrontEnd Web Developer",
      logoUrl: "/fcc.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Samar State University",
      href: "https://ssu.edu.ph",
      degree: "Bachelor's Degree in Electronics Engineering",
      logoUrl: "/ssu.png",
      start: "2014",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "2023 Hackathon: Co-creating Solutions for Catbalogan City",
      dates: "December 21st - 22nd, 2023",
      location: "Catbalogan City, Samar",
      description:
        "Developed and designed an E-commerce application for local businesses.",
      image:
        "/hackathon.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Catbalogan City Bootcamp 2021",
      dates: "September 13th - 17th, 2021",
      location: "Catbalogan City, Samar",
      description:
        "Attended multiple workshops related to tech and development",
      icon: "public",
      image:
        "/bootcamp.png",
      links: [],
    },
    {
      title: "PCCI AMY IP Awards 2019",
      dates: "October 10th, 2019",
      location: "BGC Taguig, Metro Manila",
      description:
        "Showcased a project prototype of an Electric Utility Meter with IOT.",
      image:
        "/amy.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "DOST VIII Regional Invention Contests and Exhibits 2019",
      dates: "August 9th - 11th, 2018",
      location: "Tacloban City, Leyte",
      description:
        "Showcased an project prototype of Pork Quality Assessment System.",
      icon: "public",
      image:
        "/dost8.png",
      links: [],
    },
    
  ],
} as const;
