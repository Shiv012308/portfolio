"use client";

import { motion } from "framer-motion";

export default function FolderCard({ category, onClick }) {
  // Demo images for the category items
  const items = category.items || [];
  
  // Create rotation and translation values for the fanned out items
  const fanVariants = {
    hover: (i) => {
      const isEven = i % 2 === 0;
      const angle = isEven ? -10 - (i * 5) : 10 + (i * 5);
      const xOffset = isEven ? -20 - (i * 10) : 20 + (i * 10);
      return {
        rotate: angle,
        x: xOffset,
        y: -40 - (i * 5),
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        }
      };
    },
    initial: {
      rotate: 0,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      }
    }
  };

  return (
    <motion.div
      onClick={onClick}
      className="group relative cursor-pointer w-full aspect-[4/3] max-w-[320px] mx-auto perspective-[1200px]"
      whileHover="hover"
      initial="initial"
    >
      {/* Folder Back */}
      <div 
        className="absolute inset-0 top-8 rounded-b-xl rounded-tr-xl backdrop-blur-md border border-off/20 shadow-xl overflow-hidden flex items-end justify-center pb-4 z-0"
        style={{ backgroundColor: `${category.accent}15` }}
      >
        <span className="font-heading text-5xl font-black text-off/5 tracking-tighter uppercase select-none">
          {category.name}
        </span>
      </div>
      
      {/* Folder Tab */}
      <div 
        className="absolute top-2 left-0 w-1/3 h-6 rounded-t-xl backdrop-blur-md border-t border-l border-r border-off/20 z-0 flex items-center px-4"
        style={{ backgroundColor: `${category.accent}15` }}
      >
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: category.accent }} />
      </div>

      {/* Contents (Items inside the folder) */}
      <div className="absolute inset-0 top-8 bottom-4 left-4 right-4 z-10 flex items-end justify-center pointer-events-none">
        {items.slice(0, 4).map((item, i) => (
          <motion.div
            key={item.id}
            custom={i}
            variants={fanVariants}
            className="absolute bottom-0 w-[60%] aspect-[3/4] bg-charcoal rounded-md shadow-2xl border border-off/20 overflow-hidden origin-bottom"
            style={{ zIndex: 10 + i }}
          >
            <div className="relative w-full h-full bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-80" 
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Folder Front Flap */}
      <motion.div 
        className="absolute inset-0 top-8 rounded-b-xl rounded-tr-xl backdrop-blur-xl border border-off/30 z-20 origin-bottom shadow-2xl flex flex-col justify-end p-5"
        style={{ transformStyle: "preserve-3d", backgroundColor: `${category.accent}20` }}
        variants={{
          hover: {
            rotateX: -35,
            y: 10,
            transition: { type: "spring", stiffness: 200, damping: 20 }
          },
          initial: {
            rotateX: 0,
            y: 0,
            transition: { type: "spring", stiffness: 200, damping: 20 }
          }
        }}
      >
        {/* Label on the front */}
        <div className="flex justify-between items-end w-full [transform:translateZ(10px)]">
          <div>
            <h3 className="font-heading text-2xl font-bold text-off uppercase tracking-tight">{category.name}</h3>
            <p className="font-body text-sm text-off/60">{category.count} Projects</p>
          </div>
          <motion.div 
            className="w-10 h-10 rounded-full flex items-center justify-center bg-black/40 text-off border border-off/20"
            variants={{
              hover: { scale: 1.1, backgroundColor: category.accent, borderColor: category.accent },
              initial: { scale: 1, backgroundColor: "rgba(0,0,0,0.4)" }
            }}
          >
            <span className="text-sm font-bold">↗</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
