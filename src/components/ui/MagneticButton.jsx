"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({ children, className = "", cursorLabel = "GO", ...props }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-cursor={cursorLabel}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.8 }}
      className={`transition-transform duration-300 ease-premium ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
