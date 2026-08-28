"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-red px-6 py-28 text-off md:px-10 md:py-40">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-off/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl"
        >
          Got An Idea?
          <br />
          Let&apos;s Make It Impossible To Ignore.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <MagneticButton
            cursorLabel="GO"
            className="rounded-full bg-black px-8 py-4 font-body text-sm font-semibold uppercase tracking-wider text-off"
          >
            Start A Project ↗
          </MagneticButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 font-body text-sm uppercase tracking-widest text-off/70"
        >
          Branding • Posters • Social Media • UI • Creative Direction
        </motion.p>
      </div>
    </section>
  );
}
