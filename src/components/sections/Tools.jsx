"use client";

import { motion } from "framer-motion";
import { tools } from "@/data/skills";

export default function Tools() {
  return (
    <section className="bg-black-secondary px-4 sm:px-6 py-20 md:px-10 md:py-40 overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16 font-heading text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase leading-[0.95] tracking-tight break-words"
        >
          Tools Of
          <br />
          The Trade.
        </motion.h2>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-off/10 sm:grid-cols-2 md:grid-cols-3">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-black p-6 sm:p-8 transition-colors duration-300 hover:bg-charcoal"
            >
              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight">
                {tool.name}
              </h3>
              <p className="mt-2 font-hand text-lg sm:text-xl text-grey">{tool.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
