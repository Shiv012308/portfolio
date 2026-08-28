"use client";

function Row({ text, direction = "left", className = "" }) {
  return (
    <div className="relative flex overflow-hidden">
      <div
        className={`flex shrink-0 items-center gap-8 py-3 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } ${className}`}
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <span key={i} className="whitespace-nowrap font-heading text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            {text}
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className={`flex shrink-0 items-center gap-8 py-3 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } ${className}`}
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <span key={i} className="whitespace-nowrap font-heading text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="border-y border-off/10 bg-black py-8">
      <Row
        text="BRANDING ✦ POSTERS ✦ SOCIAL MEDIA ✦ CAROUSELS ✦ BANNERS ✦ UI DESIGN ✦ LOGOS ✦ TYPOGRAPHY ✦ CREATIVE DIRECTION ✦"
        direction="left"
        className="text-off"
      />
      <Row
        text="MAKE IT BOLD • MAKE IT CLEAN • MAKE IT MEMORABLE •"
        direction="right"
        className="text-red-bright"
      />

      <style jsx global>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 32s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 36s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left, .animate-marquee-right {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
