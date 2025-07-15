"use client";

import { ExperienceResponse, getExperiences } from "@/lib/api";
import { useSectionInView } from "@/lib/hooks";
import { useEffect, useState } from "react";
import Experience from "./Experience";
import SectionHeading from "./SectionHeading";

export default function Experiences() {
  const { ref } = useSectionInView("Experiences", 0);
  const [experiences, setExperiences] = useState<ExperienceResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await getExperiences();
        setExperiences(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <section ref={ref} id="experiences" className="scroll-mt-28 mb-28">
      <SectionHeading>Work Experiences</SectionHeading>
      {loading ? (
        <p className="text-center mt-8">Loading...</p>
      ) : (
        <div>
          {experiences.map((exp) => (
            <Experience
              key={exp._id}
              company={exp.company}
              location={exp.location}
              position={exp.position}
              period={`${formatDateRange(exp.start_date, exp.end_date, exp.is_present)}`}
              type={exp.work_type}
              bullets={exp.description}
            />
          ))}
        </div>
      )}
    </section>
  );
}

// Helper to format date range
function formatDateRange(
  start: string,
  end: string,
  isPresent: boolean,
): string {
  const startDate = new Date(start);
  const endDate = isPresent ? new Date() : new Date(end);

  const format = (d: Date) =>
    `${d.toLocaleString("default", { month: "short" })} ${d.getFullYear()}`;

  return `${format(startDate)} - ${isPresent ? "Present" : format(endDate)}`;
}
