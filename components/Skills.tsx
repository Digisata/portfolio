"use client";

import { SkillResponse, getSkills } from "@/lib/api";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const [skills, setSkills] = useState<SkillResponse[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await getSkills();
        setSkills(res);
      } catch (error) {
        console.error("Failed to fetch skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills & Tools</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
        {skills.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-md px-6 py-2 md:px-6 md:py-3  dark:bg-white/10 dark:text-white/80 font-semibold"
            key={skill._id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
            custom={index}
          >
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
