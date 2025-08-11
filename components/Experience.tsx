"use client";

import { ExperienceResponse } from "@/lib/api";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { GoLocation } from "react-icons/go";
import { MdOutlineDateRange } from "react-icons/md";

interface Props {
  data: ExperienceResponse;
}

export default function Experience({ data }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.65, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.65, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      transition={{
        duration: 0.3,
        ease: easeInOut,
      }}
      className="bg-gray-100 mb-12 p-8 rounded-lg hover:bg-gray-200 dark:bg-[#121212] dark:hover:bg-white/10 dark:text-white shadow-md"
    >
      <div className="mb-2">
        <h3 className="text-xl font-semibold">
          {data.company}
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {" "}
            | {data.work_type}
          </span>
        </h3>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 dark:text-white/70">
          <span className="flex items-center gap-1">
            <GoLocation className="text-base" />
            {data.location}
          </span>
          <span className="flex items-center gap-1">
            <MdOutlineDateRange className="text-base" />
            {`${formatDateRange(data.start_date, data.end_date)}`}
          </span>
        </div>

        <p className="mt-1 text-sm font-medium">{data.position}</p>
      </div>

      {data.description && (
        <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-white/80 text-sm">
          {data.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

// Helper to format date range
function formatDateRange(start: string, end: string): string {
  const startDate = new Date(start);
  const endDate = !end ? new Date() : new Date(end);

  const format = (d: Date) =>
    `${d.toLocaleString("default", { month: "short" })} ${d.getFullYear()}`;

  return `${format(startDate)} - ${!end ? "Present" : format(endDate)}`;
}
