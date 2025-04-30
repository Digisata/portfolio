import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaHtml5, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { HiHome } from "react-icons/hi";
// import { IoPersonOutline } from "react-icons/io";

import sso from "@/public/sso.png";
import k31 from "@/public/k3i.png";
import kideco from "@/public/kideco.png";
import jmo from "@/public/jmo.png";
import smart from "@/public/smart.png";
import micro from "@/public/micro.png";

import { GoHome } from "react-icons/go";
import { RxPerson } from "react-icons/rx";
import { MdOutlineWorkOutline, MdOutlineEmail } from "react-icons/md";
import { SiPolywork } from "react-icons/si";
import { MdLocalFireDepartment } from "react-icons/md";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: <GoHome />,
  },
  {
    name: "About",
    hash: "#about",
    icon: <RxPerson />,
  },
  {
    name: "Experiences",
    hash: "#experiences",
    icon: <MdOutlineWorkOutline />,
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: <SiPolywork />,
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: <MdLocalFireDepartment />,
  },

  {
    name: "Contact",
    hash: "#contact",
    icon: <MdOutlineEmail />,
  },
] as const;

export const projectsData = [
  {
    title: "Imigrasi SSO System",
    description:
      "Designed and developed a centralized SSO platform for Direktorat Jenderal Imigrasi, integrating over 10 internal systems securely via OIDC and SAML. Customized open-source authentication services and optimized authentication pipelines.",
    tags: ["Golang", "PostgreSQL", "OIDC", "SAML", "REST API"],
    imageUrl: sso,
    live: "https://sso.imigrasi.go.id",
  },
  {
    title: "Smart POS Platform",
    description:
      "Contributed to the development of a multi-tenant POS backend for merchants and cashiers, implementing RBAC, inventory management, product handling, and transactional operations with RESTful APIs.",
    tags: ["Golang", "PostgreSQL", "RBAC", "REST API"],
    imageUrl: smart,
    live: "http://ec2-108-137-50-105.ap-southeast-3.compute.amazonaws.com/login",
  },
  {
    title: "K3I Microservices Migration",
    description:
      "Revamped a monolithic system into microservices for Korlantas Polri's communication and event management platform. Implemented real-time tracking features using goroutines, channels, and mutex synchronization.",
    tags: ["Golang", "PostgreSQL", "Redis", "RabbitMQ", "Microservices"],
    imageUrl: k31,
    live: "https://k3i.korlantas.polri.go.id/login",
  },
  {
    title: "BPJS Notification System",
    description:
      "Built a centralized notification system supporting SMS, email, and push notifications with CQRS pattern, Kafka message brokers, and gRPC microservices architecture for BPJS Ketenagakerjaan.",
    tags: [
      "Golang",
      "MariaDB",
      "Kafka",
      "gRPC",
      "Opentelemetry",
      "Prometheus",
      "Jaeger",
    ],
    imageUrl: jmo,
    live: "",
  },
  {
    title: "BPJS Microservices Migration",
    description:
      "Migrated monolithic legacy systems to microservices by implementing new database schemas and isolated business domain services with gRPC and REST APIs, maintaining data synchronization and consistency.",
    tags: ["Golang", "OracleDB", "gRPC", "REST API", "Docker"],
    imageUrl: micro,
    live: "",
  },
  {
    title: "One Kideco Dashboard",
    description:
      "Developed features for an internal mining dashboard, including report generation, database schema migrations, and API endpoints, helping manage and monitor mining operations effectively.",
    tags: ["Golang", "PostgreSQL", "REST API"],
    imageUrl: kideco,
    live: "https://one.kideco.co.id/login",
  },
] as const;

export const experienceData = [
  {
    company: "PT.Sinergi Rajawali Mataram",
    location: "South Jakarta, DKI",
    position: "Backend Engineer",
    period: "November 2024 – Present",
    type: "Contract",
    bullets: [
      "Placement at Direktorat Jenderal Imigrasi.",
      "Responsible for full development lifecycle, designing, developing, testing, deploying, maintaining, monitoring, and improving the SSO project.",
      "SSO (single sign-on) is a customized app from an open source project used to solve challenges related to authentication, authorization, security, and monitoring.",
      "Integrated with new and existing applications to support SSO implementation.",
    ],
  },
  {
    company: "PT Transnovasi Bangun Persada",
    location: "South Jakarta, DKI",
    position: "Backend Engineer",
    period: "April 2024 – July 2024",
    type: "Contract",
    bullets: [
      "Worked on K3I platform supporting the operations of the National Police Traffic Corps (Korlantas Polri).",
      "Implemented real-time police tracking using Google Maps and developed communication and duty management systems.",
      "Supported critical national operations such as Ketupat, Nataru, and international escorts.",
    ],
  },
  {
    company: "BPJS Ketenagakerjaan",
    location: "South Jakarta, DKI",
    position: "Backend Engineer",
    period: "April 2023 – April 2024",
    type: "Contract",
    bullets: [
      "Assigned to the PTI department in the PMK squad.",
      "Developed and maintained the CNS project, a centralized system for managing various notification types.",
      "Implemented CQRS pattern, wrote testable code, performed debugging and bug fixing.",
      "Built microservices architecture for scalable, modular, and resilient applications.",
    ],
  },
  {
    company: "PT. Bixbox Teknologi Perkasa (Refactory)",
    location: "Sleman, DIY",
    position: "Software Engineer",
    period: "September 2021 – September 2022",
    type: "Contract",
    bullets: [
      "Part of the Engineering division, worked on various client projects.",
      "Involved in Android, frontend, and backend development using Kotlin, Java, PHP, Laravel, Go, and more.",
      "Implemented design patterns including Microservices, Monolithic, MVC, MVVM.",
      "Collaborated with cross-functional teams using tools like Jira, Slack, and Microsoft Teams.",
    ],
  },
  {
    company: "PT. Prima Mandiri Komunikasi",
    location: "Yogyakarta, DIY",
    position: "Mobile App Developer",
    period: "January 2021 – October 2021",
    type: "Contract",
    bullets: [
      "Handled full development lifecycle of cross-platform apps using Flutter for Android and iOS.",
    ],
  },
  {
    company: "PT. Oninyon Revolusi Kreatif Indonesia",
    location: "Yogyakarta, DIY",
    position: "Mobile App Developer",
    period: "October 2020 – January 2021",
    type: "Internship",
    bullets: [
      "Developed and maintained cross-platform mobile apps using Flutter for Android.",
    ],
  },
] as const;

export const skillsData = [
  "Go",
  "Rust",
  "Linux",
  "PostgreSQL",
  "MySQL",
  "MariaDB",
  "OracleDB",
  "MongoDB",
  "Redis",
  "RESTFUL API",
  "gRPC",
  "Apache Kafka",
  "RabbitMQ",
  "Prometheus",
  "Jaeger",
  "Git",
  "Docker",
  "VIM",
] as const;

// export const skillsData = [
//   { skillName: "HTML", skillUrl: HTML },
//   { skillName: "CSS", skillUrl: CSS },
//   { skillName: "Tailwind CSS", skillUrl: tailwind },
//   { skillName: "Sass", skillUrl: sass },
//   { skillName: "JavaScript", skillUrl: javascript },
//   { skillName: "React", skillUrl: react },
//   { skillName: "Redux", skillUrl: redux },
//   { skillName: "TypeScript", skillUrl: typescript },
//   { skillName: "Next.js", skillUrl: nextjs },
//   { skillName: "Node.js", skillUrl: node },
//   { skillName: "Express.js", skillUrl: expressjs },
//   { skillName: "MongoDB", skillUrl: mongodb },
//   { skillName: "MySQL", skillUrl: mysql },
//   { skillName: "Docker", skillUrl: docker },
//   { skillName: "Java", skillUrl: java },
//   { skillName: "Git", skillUrl: git },
//   { skillName: "GitHub", skillUrl: github },
//   { skillName: "VsCode", skillUrl: vscode },
//   { skillName: "Figma", skillUrl: figma },
//   { skillName: "Postman", skillUrl: postman },
// ] as const;
