import {
  bank,
  hutech,
  icon,
  kd,
  tang,
  logo_don,
  OCBC,
  Cer
} from "../assets";

import {
  AiFillGithub,
  AiFillHtml5,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineGitlab
} from "react-icons/ai";

import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker, FaRobot, FaServer, FaCode, FaCogs, FaProjectDiagram, FaDatabase, FaShieldAlt, FaTachometerAlt, FaFire, FaVial, FaListAlt, FaBrain, FaUsers, FaComments, FaClock } from "react-icons/fa";
import {
  SiBootstrap,
  SiCsharp,
  SiDotnet,
  SiGit,
  SiJavascript,
  SiJquery,
  SiMysql,
  SiNestjs,
  SiPostman,
  SiReact,
  SiSwagger,
  SiTailwindcss,
  SiNodedotjs,
  SiJsonwebtokens,
  SiRedis,
  SiSonarqube,
  SiOpenai
} from "react-icons/si";

import { DiCss3, DiJava, DiMsqlServer } from "react-icons/di";

export const resumeLink = "https://canva.link/vxm3i5s810ekf1b";
export const repoLink = "https://github.com/Trung0401Kien/Trung0401Kien.github.io";

export const callToAction = "https://github.com/Trung0401Kien";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: hutech,
    title: "HUTECH University",
    degree: "Bachelor's Degree",
    duration: "2020 - 2024",
    content1: "Major: Software Technology",
    content2: "Information Technology",
  },
  // {
  //   id: "education-2",
  //   icon: pba,
  //   title: "Polkadot Blockchain Academy",
  //   degree: "",
  //   duration: "May 2024 - June 2024",
  //   content1: "Graduated with a distinction in the fifth cohort of the Polkadot Blockchain Academy at the National University of Singapore.",
  // },
];

export const achievements = [
  {
    id: "a-1",
    icon: Cer,
    event: "English Level B1 (CEFR)",
    position: "Certification",
    content1: "Achieved B1 proficiency level in English according to the Common European Framework of Reference for Languages.",
    content2: "Date: 07/06/2024",
    content3: "",
    project: "",
    youtube: "",
  },
];


export const skills = [
  {
    title: "Programming Languages",
    items: [
      { id: "pl-1", icon: SiCsharp, name: "C#" },
      { id: "pl-2", icon: DiJava, name: "Java" },
      { id: "pl-3", icon: SiJavascript, name: "JavaScript/TypeScript" },
      { id: "pl-4", icon: SiReact, name: "ReactJS (basic)" },
    ],
  },
  {
    title: "Backend",
    items: [
      { id: "be-1", icon: SiDotnet, name: ".NET Core" },
      { id: "be-2", icon: SiNestjs, name: "NestJS" },
      { id: "be-3", icon: SiNodedotjs, name: "Node js" },
      { id: "be-4", icon: FaServer, name: "Restful API" },
      { id: "be-5", icon: FaCode, name: "DTO" },
      { id: "be-6", icon: FaCogs, name: "Clean Architecture" },
      { id: "be-7", icon: FaProjectDiagram, name: "Middleware" },
      { id: "be-8", icon: FaCogs, name: "CQRS" },
    ],
  },
  {
    title: "Database",
    items: [
      { id: "db-1", icon: BiLogoPostgresql, name: "PostgreSQL" },
      { id: "db-2", icon: SiMysql, name: "MySQL" },
      { id: "db-3", icon: DiMsqlServer, name: "MS SQL Server" },
      { id: "db-4", icon: FaDatabase, name: "Database Design" },
      { id: "db-5", icon: FaCode, name: "Stored Procedures" },
    ],
  },
  {
    title: "AI & Tools",
    items: [
      { id: "ai-1", icon: FaRobot, name: "ChatGPT" },
      { id: "ai-2", icon: FaRobot, name: "Google Gemini" },
      { id: "ai-3", icon: FaRobot, name: "AI Stitch" },
      { id: "ai-4", icon: FaRobot, name: "Antigravity" },
      { id: "ai-5", icon: SiGit, name: "Git" },
      { id: "ai-6", icon: AiFillGithub, name: "GitHub" },
      { id: "ai-7", icon: AiOutlineGitlab, name: "GitLab" },
      { id: "ai-8", icon: FaDocker, name: "Docker" },
      { id: "ai-9", icon: FaServer, name: "SCP Deployment" },
      { id: "ai-10", icon: SiPostman, name: "Postman" },
      { id: "ai-11", icon: SiSwagger, name: "Swagger" },
    ],
  },
  {
    title: "Security & Performance",
    items: [
      { id: "sp-1", icon: FaShieldAlt, name: "Authentication & Authorization" },
      { id: "sp-2", icon: SiJsonwebtokens, name: "JWT" },
      { id: "sp-3", icon: FaShieldAlt, name: "CORS" },
      { id: "sp-4", icon: FaCogs, name: "Retry" },
      { id: "sp-5", icon: FaTachometerAlt, name: "Rate Limiting" },
      { id: "sp-6", icon: FaFire, name: "Hangfire" },
      { id: "sp-7", icon: SiRedis, name: "Redis Cache" },
    ],
  },
  {
    title: "Testing",
    items: [
      { id: "t-1", icon: FaVial, name: "Unit Testing" },
      { id: "t-2", icon: SiSonarqube, name: "SonarQube" },
      { id: "t-3", icon: FaListAlt, name: "Logs/Logging" },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      { id: "ss-1", icon: FaBrain, name: "Requirement Analysis" },
      { id: "ss-2", icon: FaBrain, name: "Logical thinking" },
      { id: "ss-3", icon: FaUsers, name: "Teamwork" },
      { id: "ss-4", icon: FaBrain, name: "Problem-solving" },
      { id: "ss-5", icon: FaBrain, name: "Quick adaptability" },
      { id: "ss-6", icon: FaComments, name: "Communication" },
      { id: "ss-7", icon: FaClock, name: "Effective time management" },
    ],
  },
];

export const experiences = [
  {
    organisation: "Healthcare Solution Vietnam",
    logo: logo_don,
    link: "",
    positions: [
      {
        title: "Software Engineer (Full-Stack)",
        duration: "11/2024 - Present",
        content: [
          {
            text: "Independently perform requirement analysis to propose logical business flows and design robust database schemas for various healthcare modules.",
            link: ""
          },
          {
            text: "Demonstrate strong adaptability by expanding technical scope beyond .NET, contributing to full-stack feature development and front-end integration using Java, ReactJS, and NestJS.",
            link: ""
          },
          {
            text: "Design and implement system architectures tailored to specific project needs. Focus heavily on high scalability, modularity, and long-term maintainability.",
            link: ""
          },
          {
            text: "Enhance data retrieval performance and system efficiency by authoring and managing complex Stored Procedures.",
            link: ""
          },
          {
            text: "Leverage AI tools (ChatGPT, Google Gemini) to read documentation, analyze databases, and reference solutions, boosting overall code quality and productivity by 50%.",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "Kyanon Digital",
    logo: kd,
    link: "https://kyanon.digital/",
    positions: [
      {
        title: "Software Engineer (.NET)",
        duration: "05/2024 - 03/2025",
        content: [
          {
            text: "Successfully transitioned from an internship and probationary role by consistently delivering high-quality work, earning management trust to take ownership of critical project tasks.",
            link: ""
          },
          {
            text: "Maintained and enhanced the OCBC point redemption application for OCBC Singapore Bank. Improved feature set and system reliability.",
            link: ""
          },
          {
            text: "Developed Discount Bites, a discount food ordering application, using Strapi and Node.js. Successfully delivered key functionalities outside core team expertise.",
            link: ""
          },
          {
            text: "Optimized and extended the Tangs e-commerce platform. Refactored event-handling logic and implemented new features to improve user experience and system performance.",
            link: ""
          }
        ],
      },
    ],
  },
];

export const openSourceContributions = [
  // {
  //   id: "os-1",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "pull-request",
  //   status: "merged",
  //   title:
  //     "Move _wiki to old table look, common template for email and settings digest only",
  //   link: "https://github.com/publiclab/plots2/pull/10731",
  //   number: "#10731",
  //   date: "Feb 24 2022",
  //   linesAdded: "101",
  //   linesDeleted: "48",
  // },
  // {
  //   id: "os-2",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "Combine templates for email digest and settings digest",
  //   link: "https://github.com/publiclab/plots2/pull/10681",
  //   number: "#10681",
  //   date: "Feb 9 2022",
  //   linesAdded: "86",
  //   linesDeleted: "106",
  // },
  // {
  //   id: "os-3",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "Fix reverse chronological sorting on inline grids",
  //   link: "https://github.com/publiclab/plots2/pull/11114",
  //   number: "#11114",
  //   date: "May 4 2022",
  //   linesAdded: "1",
  //   linesDeleted: "1",
  // },
  // {
  //   id: "os-4",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "style: Make post page footer responsive",
  //   link: "https://github.com/publiclab/plots2/pull/10634",
  //   number: "#10634",
  //   date: "Feb 24 2022",
  //   linesAdded: "64",
  //   linesDeleted: "8",
  // },
  // {
  //   id: "os-5",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "issue",
  //   status: "closed",
  //   title: "Typos in Translation_System.md",
  //   link: "https://github.com/publiclab/plots2/issues/11120",
  //   number: "#11120",
  //   date: "May 6 2022",
  //   linesAdded: "",
  //   linesDeleted: "",
  // },
  // {
  //   id: "os-6",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "issue",
  //   status: "closed",
  //   title: "Missing translations on layouts/_header.html.erb",
  //   link: "https://github.com/publiclab/plots2/issues/11115",
  //   number: "#11115",
  //   date: "May 4 2022",
  //   linesAdded: "",
  //   linesDeleted: "",
  // },
  // {
  //   id: "os-7",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "issue",
  //   status: "closed",
  //   title: "Missing translation of 'This is part of' on _tagging.html.erb",
  //   link: "https://github.com/publiclab/plots2/issues/10986",
  //   number: "#10986",
  //   date: "Apr 8 2022",
  //   linesAdded: "",
  //   linesDeleted: "",
  // },
  // {
  //   id: "os-8",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "issue",
  //   status: "closed",
  //   title: "Wrong closing heading tag in _digest.html.erb",
  //   link: "https://github.com/publiclab/plots2/issues/10985",
  //   number: "#10985",
  //   date: "Apr 8 2022",
  //   linesAdded: "",
  //   linesDeleted: "",
  // },
  // {
  //   id: "os-9",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "issue",
  //   status: "closed",
  //   title: "Add class to center wiki.scraped_image in wikis template",
  //   link: "https://github.com/publiclab/plots2/issues/10797",
  //   number: "#10797",
  //   date: "Mar 18 2022",
  //   linesAdded: "",
  //   linesDeleted: "",
  // },
  // {
  //   id: "os-10",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "issue",
  //   status: "closed",
  //   title: "Images on /wiki are not center aligned",
  //   link: "https://github.com/publiclab/plots2/issues/10755",
  //   number: "#10755",
  //   date: "Mar 4 2022",
  //   linesAdded: "",
  //   linesDeleted: "",
  // },
  // {
  //   id: "os-11",
  //   organisation: "Zulip",
  //   logo: zulip,
  //   repo: "zulip",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "invitations: Check invitation from a now-deactivated user.",
  //   link: "https://github.com/zulip/zulip/pull/20206",
  //   number: "#20206",
  //   date: "Dec 30 2021",
  //   linesAdded: "31",
  //   linesDeleted: "1",
  // },
  // {
  //   id: "os-12",
  //   organisation: "Zulip",
  //   logo: zulip,
  //   repo: "zulip",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "invitations: Check invitation from a now-deactivated user.",
  //   link: "https://github.com/zulip/zulip/pull/20206",
  //   number: "#20206",
  //   date: "Dec 30 2021",
  //   linesAdded: "31",
  //   linesDeleted: "1",
  // },
  // {
  //   id: "os-13",
  //   organisation: "Zulip",
  //   logo: zulip,
  //   repo: "zulip",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "authentication: Fix placeholder realms for redirects.",
  //   link: "https://github.com/zulip/zulip/pull/19689",
  //   number: "#19689",
  //   date: "Sep 9 2021",
  //   linesAdded: "1",
  //   linesDeleted: "1",
  // },
  // {
  //   id: "os-14",
  //   organisation: "Zulip",
  //   logo: zulip,
  //   repo: "zulip",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "message_editing : Fix topic edit propagate option cut-off",
  //   link: "https://github.com/zulip/zulip/pull/19760",
  //   number: "#19760",
  //   date: "Feb 10 2022",
  //   linesAdded: "9",
  //   linesDeleted: "8",
  // },
];

export const projects = [
  {
    id: "project-1",
    title: "DiscountBites",
    github: "",
    link: "",
    image: icon,
    content:
      "A discount food ordering application for Singapore clients. Developed merchant product recommendations based on distance using GeoHash, and built custom APIs for Search, Favourite Merchant, and Product categories.",
    stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "Node.js"
      },
      {
        id: "icon-2",
        icon: BiLogoPostgresql,
        name: "PostgreSQL"
      }
    ],
  },
  {
    id: "project-2",
    title: "OCBC",
    github: "",
    link: "https://marketplace.stackreward.com",
    image: OCBC,
    content:
      "A loyalty point redemption application for OCBC Bank Singapore. Developed Concurrent Login Detection using Redis and implemented a Special Discount feature to provide personalized promotions.",
    stack: [
      {
        id: "icon-1",
        icon: SiDotnet,
        name: ".NET Core"
      },
      {
        id: "icon-2",
        icon: BiLogoPostgresql,
        name: "PostgreSQL"
      },
      {
        id: "icon-3",
        icon: SiCsharp,
        name: "Redis/SignalR"
      }
    ],
  },
  {
    id: "project-3",
    title: "Tangs",
    github: "",
    link: "https://tangs.com",
    image: tang,
    content:
      "Large-scale e-commerce platform for Tangs Singapore. Refactored event-handling logic for Unbxd and wrote comprehensive unit tests to ensure code reliability.",
    stack: [
      {
        id: "icon-1",
        icon: SiDotnet,
        name: ".NET Core"
      },
      {
        id: "icon-2",
        icon: BiLogoPostgresql,
        name: "PostgreSQL"
      }
    ],
  },
];

export const blogPosts = [
  // {
  //   id: "post-1",
  //   title: "Blog Post 01 - Title",
  //   link: "#",
  //   date: new Date().toLocaleDateString(), // Can be edited to any string format
  //   image: "https://via.placeholder.com/600/92c952",
  //   tags: [
  //     {
  //       id: "tag-1",
  //       name: "tag 01"
  //     },
  //     {
  //       id: "tag-2",
  //       name: "tag 03"
  //     },
  //     {
  //       id: "tag-3",
  //       name: "tag 03"
  //     },
  //   ],
  // },
  // {
  //   id: "post-2",
  //   title: "Blog Post 02 - Title",
  //   link: "#",
  //   date: new Date().toLocaleDateString(),
  //   image: "https://via.placeholder.com/600/d32776",
  //   tags: [
  //     {
  //       id: "tag-1",
  //       name: "tag 01"
  //     },
  //     {
  //       id: "tag-2",
  //       name: "tag 03"
  //     },
  //     {
  //       id: "tag-3",
  //       name: "tag 03"
  //     },
  //   ],
  // },
  // {
  //   id: "post-3",
  //   title: "Blog Post 03 - Title",
  //   link: "#",
  //   date: new Date().toLocaleDateString(),
  //   image: "https://via.placeholder.com/600/771796",
  //   tags: [
  //     {
  //       id: "tag-1",
  //       name: "tag 01"
  //     },
  //     {
  //       id: "tag-2",
  //       name: "tag 03"
  //     },
  //     {
  //       id: "tag-3",
  //       name: "tag 03"
  //     },
  //   ],
  // },
];

export const stats = [
  // {
  //   id: "stats-1",
  //   title: "Organisations",
  //   value: "2+",
  // },
  // {
  //   id: "stats-2",
  //   title: "Issues Opened",
  //   value: "6+",
  // },
  // {
  //   id: "stats-3",
  //   title: "Pull Requests",
  //   value: "6+",
  // },
];

export const extraCurricular = [
  // {
  //   organisation: "Devfolio",
  //   title: "UniDAO Lead",
  //   duration: "December 2021 - Present",
  //   content: [
  //     {
  //       text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
  //       link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
  //     },
  //     {
  //       text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
  //       link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
  //     },
  //   ],
  //   logo: devfolio,
  // },
  // {
  //   organisation: "Google Developer Student Club, NITK",
  //   title: "Co-Chair",
  //   duration: "December 2021 - Present",
  //   content: [
  //     {
  //       text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
  //       link: "",
  //     },
  //     {
  //       text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
  //       link: "https://incident.nitk.ac.in/",
  //     },
  //   ],
  //   logo: gdsc,
  // },
  // {
  //   organisation: "Genesis, NITK",
  //   title: "Competitions Head",
  //   duration: "Sep 2021 - Present",
  //   content: [
  //     {
  //       text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
  //       link: "",
  //     },
  //     {
  //       text: "Won 7 inter-college solo dance competitions",
  //       link: "",
  //     },
  //   ],
  //   logo: genesis,
  // },
  // {
  //   organisation: "IRIS, NITK",
  //   title: "Tutor",
  //   duration: "Jan 2022 - Jan 2022",
  //   content: [
  //     {
  //       text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
  //       link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
  //     },
  //   ],
  //   logo: iris,
  // },
  // {
  //   organisation: "E-Cell, NITK",
  //   title: "Executive Member",
  //   duration: "Sep 2021 - Apr 2022",
  //   content: [
  //     {
  //       text: "Organised the season 3 of the E-Cell NITK Podcast",
  //       link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
  //     },
  //     {
  //       text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
  //       link: "",
  //     },
  //   ],
  //   logo: ecell,
  // },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/nguyen-do-trung-kien-6a17a125b/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/Trung0401Kien",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:trungkiennguyen040102@gmail.com",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/trunkienn_0401/",
  },
];

export const aboutMe = {
    name: "Trung Kien",
    tagLine: "Software Engineer · .NET · ReactJS · NestJS",
    intro: "Software Engineer with expertise in the .NET ecosystem and a strong focus on System Design and Database Architecture. Proven track record in performing Requirement Analysis and building scalable, high-performance systems for the healthcare, banking, and e-commerce sectors. Highly adaptable and actively expanding into full-stack development, utilizing Java, ReactJS, and NestJS. Proficient in optimizing data retrieval through Stored Procedures. Adept at integrating AI tools (ChatGPT, Google Gemini, AI Stitch, Antigravity) to independently analyze business flows, automate database processing, and accelerate UI/UX development, resulting in a 50% improvement in coding efficiency and rapid mastery of new technologies.",
}

export const contactInfo = {
    location: "Binh Thanh district, HCM city",
    email: "trungkiennguyen040102@gmail.com",
    phone: "+84 974821498",
    dob: "04/01/2002"
}
