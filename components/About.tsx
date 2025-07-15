"use client";

import { CustomerResponse } from "@/lib/api";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface Props {
  profile: CustomerResponse;
}

export default function About({ profile }: Props) {
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

      <div className="text-center sm:text-start text-base lg:text-lg font-medium px-2 whitespace-pre-line">
        {profile.about}
      </div>
    </motion.section>
  );
}
