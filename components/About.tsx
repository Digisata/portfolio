"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>

      <div className="text-center sm:text-start text-base lg:text-lg font-medium px-2">
        <p className="mb-4">
          <span className="font-bold text-4xl leading-10">I</span> began my
          journey in software development as a mobile app developer, but quickly
          discovered my passion for{" "}
          <span className="font-bold underline">backend engineering</span>. Over
          the years, I’ve built systems that impact millions—implementing SSO
          platforms with OIDC & SAML, designing microservices architectures, and
          optimizing APIs and databases for mission-critical platforms.
        </p>

        <p className="mb-4">
          Whether I’m developing notification systems at BPJS, revamping legacy
          monoliths into microservices for Korlantas Polri, or integrating RBAC
          into multi-tenant POS systems, I approach each challenge with a
          <span className="font-bold underline">
            {" "}
            mindset of continuous learning and cross-team collaboration
          </span>
          . My toolbox includes Go, PostgreSQL, Docker, Kafka, gRPC, Redis, and
          more. Beyond just writing code, I believe in writing code that
          lasts—maintainable, testable, and built for scale. on a transformative
          journey as a{" "}
        </p>

        {/* <p>
          <span className="font-bold"></span> Aside from building for the web, I
          deeply enjoy playing volleyball and video games.
        </p> */}
      </div>
    </motion.section>
  );
}
