"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { experienceData } from "@/lib/data";
import Experience from "./Experience";

import { useSectionInView } from "@/lib/hooks";

export default function Experiences() {
  const { ref } = useSectionInView("Experiences", 0);

  return (
    <section ref={ref} id="experiences" className="scroll-mt-28 mb-28">
      <SectionHeading>Work Experiences</SectionHeading>
      <div>
        {experienceData.map((experience, index) => (
          <React.Fragment key={index}>
            <Experience {...experience} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
