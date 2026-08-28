"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const [label, setLabel] = useState("");
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    const touch = window.matchMedia("(hover: none)").matches;
    setIsTouch(touch);
    if (touch) return;

    const xTo = gsap.quickTo(dotRef.current, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(dotRef.current, "y", { duration: 0.5, ease: "power3.out" });

    const move = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const overHandler = (e) => {
      const target = e.target.closest("[data-cursor]");
      setLabel(target ? target.dataset.cursor : "");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", overHandler);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", overHandler);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className={`flex items-center justify-center rounded-full border border-off/40 bg-off/10 backdrop-blur-sm transition-all duration-300 ease-premium ${
          label ? "h-16 w-16" : "h-3 w-3 bg-off"
        }`}
      >
        {label && (
          <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-off">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
