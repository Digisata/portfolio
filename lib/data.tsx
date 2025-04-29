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
    name: "Projects",
    hash: "#projects",
    icon: <SiPolywork />,
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: <MdOutlineWorkOutline />,
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

export const skillsData = [
  "Go",
  "Rust",
  "Linux",
  "PostgreSQL",
  "MySQL",
  "MariaDB",
  "MongoDB",
  "OracleDB",
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
