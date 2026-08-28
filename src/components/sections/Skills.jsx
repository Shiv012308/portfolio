"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 md:px-10 md:py-40">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-16 max-w-7xl font-heading text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl"
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
            className="group flex cursor-default items-center justify-between py-6 transition-colors duration-300"
          >
            <span
              className={`font-heading text-3xl font-extrabold uppercase tracking-tight transition-all duration-500 ease-premium md:text-5xl ${
                hovered === i ? "translate-x-3 text-red-bright" : "text-off"
              } ${hovered !== null && hovered !== i ? "opacity-30" : "opacity-100"}`}
            >
              {skill}
            </span>
            <span className="font-body text-sm text-grey">{`0${i + 1}`}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
