"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative overflow-hidden bg-black px-4 sm:px-6 py-20 md:px-10 md:py-40 w-full max-w-full">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-12 md:mb-16 max-w-7xl font-heading text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase leading-[0.95] tracking-tight break-words"
      >
        What I
        <br />
        Create.
      </motion.h2>

      <div className="mx-auto max-w-7xl divide-y divide-off/10 border-t border-off/10">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="group flex cursor-default items-center justify-between py-4 sm:py-6 transition-colors duration-300 gap-4"
          >
            <span
              className={`font-heading text-xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight transition-all duration-500 ease-premium ${
                hovered === i ? "translate-x-2 sm:translate-x-3 text-red-bright" : "text-off"
              } ${hovered !== null && hovered !== i ? "opacity-30" : "opacity-100"}`}
            >
              {skill}
            </span>
            <span className="font-body text-xs sm:text-sm text-grey shrink-0">{`0${i + 1}`}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
