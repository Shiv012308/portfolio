"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/ui/MagneticButton";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const scrollProgress = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          scrollProgress.current = self.progress;
        },
      });

      gsap.to(textRef.current, {
        yPercent: -30,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={sectionRef} className="relative h-screen w-full max-w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <HeroScene scrollProgress={scrollProgress} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      <div
        ref={textRef}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-3 sm:mb-4 font-body text-xs sm:text-sm uppercase tracking-[0.35em] text-off/60"
        >
          Hello, I&apos;m Shiv
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-[13vw] sm:text-[14vw] md:text-[9vw] font-extrabold leading-[0.9] tracking-tighter break-words"
        >
          GRAPHIC
          <br />
          <span className="font-outline">DESIGNER.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-md font-body text-base text-off/70 md:text-lg"
        >
          I create visual identities, posters, social media designs, branding and
          digital experiences built to make ideas impossible to ignore.
        </motion.p>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-3 font-hand text-2xl text-red-bright"
        >
          I make boring things look expensive.
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#archive">
            <MagneticButton
              cursorLabel="GO"
              className="rounded-full bg-off px-7 py-3 font-body text-sm font-semibold uppercase tracking-wider text-black"
            >
              View My Work ↓
            </MagneticButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
