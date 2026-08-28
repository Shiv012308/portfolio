"use client";

import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section className="bg-black px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 font-body text-sm uppercase tracking-[0.3em] text-grey"
        >
          01 / Intro
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-heading text-5xl font-extrabold leading-[0.95] tracking-tight md:text-8xl"
        >
          I TURN IDEAS INTO PREMIUM VISUALS.
        </motion.h2>

        <div className="mt-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg font-body text-lg text-off/70"
          >
            I&apos;m a graphic designer focused on turning simple ideas into
            memorable visual experiences through typography, color, composition
            and storytelling.
          </motion.p>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-hand text-2xl text-grey"
          >
            with an unreasonable number of layers.
          </motion.span>
        </div>
      </div>
    </section>
  );
}
