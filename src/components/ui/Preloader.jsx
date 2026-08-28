"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2200;

    let raf;
    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setDone(true);
          onDone?.();
        }, 400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-black"
        >
          <div className="absolute left-8 top-8 h-6 w-6 border-l border-t border-off/30" />
          <div className="absolute right-8 top-8 h-6 w-6 border-r border-t border-off/30" />
          <div className="absolute bottom-8 left-8 h-6 w-6 border-b border-l border-off/30" />
          <div className="absolute bottom-8 right-8 h-6 w-6 border-b border-r border-off/30" />

          <motion.div
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mb-6 h-2 w-2 rounded-full bg-red"
          />

          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-off/80">
            Creative System
          </p>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-off/40">
            Loading
          </p>

          <div className="mt-8 font-heading text-6xl font-extrabold tabular-nums text-off md:text-8xl">
            {progress < 100 ? String(progress).padStart(2, "0") : "100"}%
          </div>

          {progress >= 100 && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 font-hand text-2xl text-red-bright"
            >
              Creative chaos ready.
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
