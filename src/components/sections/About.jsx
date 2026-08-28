"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const DETAILS = [
  { label: "Based In", value: "Bhopal MP" },
  { label: "Currently", value: "Creating visuals" },
  { label: "Specialty", value: "Carousel Post Designing" },
  { label: "Fuel", value: "Music + Tea" },
  { label: "Status", value: "Available for collaborations" },
  { label: "Experience", value: "2+ years" },
];

export default function About() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.8 });
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.8 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(relX * 8);
    y.set(relY * 8);
  };

  return (
    <section id="about" className="bg-black px-4 sm:px-6 py-20 md:px-10 md:py-40 overflow-hidden w-full max-w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:gap-16 md:grid-cols-2 md:items-center">
        <motion.div
          ref={ref}
          onMouseMove={handleMove}
          onMouseLeave={() => {
            x.set(0);
            y.set(0);
          }}
          className="relative max-w-sm sm:max-w-md mx-auto md:mx-0 w-full"
        >
          <motion.div
            style={{ x: springX, y: springY }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-charcoal grid-lines"
          >
            {/* Replace the src below with your actual image path (e.g., "/my-portrait.jpg") */}
            <img 
              src="/images/myself.jpeg" 
              alt="Shiv Vishwakarma Portrait" 
              className="absolute inset-0 h-full w-full object-cover" 
            />
          </motion.div>
          <span className="absolute -bottom-6 left-6 font-hand text-xl sm:text-2xl text-red-bright md:-bottom-8">
            that&apos;s me. ↖
          </span>
        </motion.div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase leading-[0.95] tracking-tight break-words"
          >
            The Human
            <br />
            Behind The
            <br />
            Pixels.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-lg font-body text-off/70"
          >
            I&apos;m <span className="text-red-bright">Shiv Vishwakarma</span> a graphic designer who enjoys turning ideas into bold, clean
            and memorable visual experiences. I love experimenting with
            typography, color, layouts and digital interfaces while keeping
            every design purposeful.
          </motion.p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-off/10 pt-8">
            {DETAILS.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <p className="font-body text-xs uppercase tracking-widest text-grey">
                  {d.label}
                </p>
                <p className="mt-1 font-body text-sm text-off">{d.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
