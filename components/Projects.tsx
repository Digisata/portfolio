"use client";

import { ProjectResponse, getProjects } from "@/lib/api";
import { useSectionInView } from "@/lib/hooks";
import React, { useEffect, useState } from "react";
import Project from "./Project";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0);
  const [projects, setProjects] = useState<ProjectResponse[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        setProjects(res);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project data={project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
