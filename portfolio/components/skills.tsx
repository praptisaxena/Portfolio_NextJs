"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100, // Start from below the screen
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0, // End position (normal position)
    transition: {
      delay: 0.05 * index, // Staggered animation for each skill
      type: "spring", // Smooth spring animation
      stiffness: 150,
      damping: 20,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 mx-auto px-4"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-6 text-lg text-gray-900 dark:text-gray-300">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border-2 border-gray-300 rounded-xl px-5 py-3 dark:bg-gray-800 dark:border-gray-700"
            key={index}
            variants={fadeInAnimationVariants} // Apply the fade-in effect
            initial="initial" // Initial state (invisible and below)
            whileInView="animate" // Trigger the animation when it enters the viewport
            viewport={{ once: true }} // Make sure it animates only once when in view
            custom={index} // Pass the index for staggered delays
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
