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
            <Experience key={exp._id} data={exp} />
          ))}
        </div>
      )}
    </section>
  );
}
