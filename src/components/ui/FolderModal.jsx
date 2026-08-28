"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Layers, Eye } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function FolderModal({ category, isOpen, onClose }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const scrollRef = useRef(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => setSelectedItem(null), 300); // Clear selected item after animation
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!category) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-x-2 inset-y-4 sm:inset-x-6 sm:inset-y-8 md:inset-x-10 md:inset-y-10 z-[101] bg-charcoal rounded-xl sm:rounded-2xl border border-off/20 overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div 
              className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-off/10"
              style={{ backgroundColor: `${category.accent}20` }} // 20% opacity accent
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div 
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full shadow-lg" 
                  style={{ backgroundColor: category.accent }}
                />
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-off">
                  {category.name}
                </h2>
                <span className="font-body text-xs sm:text-sm text-off/50 mt-1 hidden md:block">
                  {category.count} items in folder
                </span>
              </div>
              <button 
                onClick={onClose}
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black/50 text-off hover:bg-black transition-colors border border-off/10 hover:border-off/30"
                aria-label="Close folder"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-10 scrollbar-hide">
              <div className={`grid gap-6 md:gap-8 ${
                category.slug === "certificates"
                  ? "grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto"
                  : category.slug === "presentations"
                  ? "grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }`}>
                {category.items && category.items.length > 0 ? (
                  category.items.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => {
                        if (item.isCarousel) {
                          setSelectedItem(item);
                        }
                      }}
                      style={
                        category.slug === "certificates"
                          ? { aspectRatio: "29.7 / 21" }
                          : category.slug === "presentations"
                          ? { aspectRatio: "16 / 9" }
                          : undefined
                      }
                      className={`group relative w-full ${
                        category.slug === "certificates"
                          ? "aspect-[29.7/21]"
                          : category.slug === "presentations"
                          ? "aspect-video"
                          : "aspect-[4/5]"
                      } bg-black rounded-xl overflow-hidden shadow-lg border border-off/10 hover:border-off/40 transition-all ${item.isCarousel ? 'cursor-pointer ring-1 ring-white/10 hover:ring-amber-400/50 hover:shadow-2xl' : ''}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className={`w-full h-full ${category.slug === "certificates" ? "object-contain bg-black/60 p-1" : "object-cover"} transition-transform duration-700 group-hover:scale-105`}
                      />

                      {/* Prominent Always-Visible Badge for Carousel Items */}
                      {item.isCarousel && (
                        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-black/80 backdrop-blur-md border border-white/20 text-amber-300 px-3 py-1.5 rounded-full shadow-lg text-xs font-semibold tracking-wide uppercase transition-all duration-300 group-hover:bg-amber-400 group-hover:text-black group-hover:border-amber-400">
                          <Layers size={13} className="shrink-0 animate-pulse" />
                          <span>{category.slug === "presentations" ? "View Slides" : "View Carousel"}</span>
                          {item.carouselImages?.length && (
                            <span className="opacity-80 text-[11px]">({item.carouselImages.length})</span>
                          )}
                        </div>
                      )}

                      {/* Hover / Touch Bottom Info Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-95 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 md:p-6 pointer-events-none">
                        <div className="flex items-end justify-between gap-3 w-full">
                          <div>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-off/60 block mb-1">
                              {category.name}
                            </span>
                            <h4 className="font-heading text-lg md:text-xl font-bold text-off uppercase leading-tight">
                              {item.title}
                            </h4>
                          </div>

                          {item.isCarousel && (
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-300 bg-amber-400/20 border border-amber-400/40 px-2.5 py-1 rounded-md backdrop-blur-sm shrink-0">
                              <Eye size={12} />
                              Touch to View
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full flex flex-col items-center justify-center py-20 text-off/40">
                    <p className="font-body">This folder is currently empty.</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Inner Carousel / Presentation Viewer Modal */}
          <AnimatePresence>
            {selectedItem && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed inset-x-0 inset-y-0 md:inset-x-6 md:inset-y-6 lg:inset-x-10 lg:inset-y-10 z-[102] bg-charcoal rounded-none md:rounded-2xl border-none md:border border-off/20 overflow-hidden flex flex-col shadow-2xl"
              >
                {/* Header for Inner Modal */}
                <div 
                  className="flex items-center justify-between px-6 py-4 border-b border-off/10 bg-black/60 backdrop-blur-md z-10"
                >
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-off">
                      {selectedItem.title}
                    </h3>
                    <span className="text-xs font-body text-off/70 border border-off/20 px-2.5 py-0.5 rounded-full bg-white/5">
                      {selectedItem.carouselImages?.length || 0} Pages / Slides
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block text-xs font-body text-off/50">
                      Swipe or use arrows to navigate
                    </span>
                    <button 
                      onClick={() => setSelectedItem(null)}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-off hover:bg-black transition-colors border border-off/10 hover:border-off/30"
                      aria-label="Close carousel viewer"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* Horizontal Scroll Area for Slides/Images */}
                <div className="relative flex-1 flex items-center overflow-hidden">
                  {/* Left Scroll Arrow */}
                  <button
                    onClick={() => handleScroll("left")}
                    className="absolute left-3 md:left-6 z-20 w-11 h-11 rounded-full bg-black/75 hover:bg-black text-off border border-white/20 hover:border-white/40 flex items-center justify-center shadow-2xl backdrop-blur-md transition-all active:scale-95"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <div 
                    ref={scrollRef}
                    className="w-full h-full overflow-x-auto overflow-y-hidden flex items-center px-12 md:px-20 py-6 md:py-10 gap-6 md:gap-8 snap-x snap-mandatory scrollbar-hide"
                  >
                    {selectedItem.carouselImages?.map((imgUrl, idx) => (
                      <div 
                        key={idx} 
                        style={category.slug === "presentations" ? { aspectRatio: "16 / 9" } : undefined}
                        className={`shrink-0 ${
                          category.slug === "presentations"
                            ? "w-[88vw] md:w-[75vw] lg:w-[68vw] max-w-5xl aspect-video max-h-[75vh]"
                            : "w-[85vw] md:w-[60vw] max-w-2xl h-full max-h-[70vh]"
                        } bg-black rounded-xl overflow-hidden shadow-2xl border border-off/15 snap-center flex items-center justify-center relative group`}
                      >
                        {/* Slide number pill */}
                        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-off/80 text-[11px] font-mono px-2.5 py-1 rounded border border-white/10 z-10">
                          {idx + 1} / {selectedItem.carouselImages.length}
                        </div>

                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={imgUrl} 
                          alt={`${selectedItem.title} slide ${idx + 1}`} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Right Scroll Arrow */}
                  <button
                    onClick={() => handleScroll("right")}
                    className="absolute right-3 md:right-6 z-20 w-11 h-11 rounded-full bg-black/75 hover:bg-black text-off border border-white/20 hover:border-white/40 flex items-center justify-center shadow-2xl backdrop-blur-md transition-all active:scale-95"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Footer Navigation Tip for Mobile & Touch */}
                <div className="px-6 py-3 bg-black/40 border-t border-off/10 flex items-center justify-between text-xs text-off/60">
                  <span className="flex items-center gap-2">
                    <Layers size={14} className="text-amber-300" />
                    Touch / drag horizontally or click arrows to view other pages
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleScroll("left")}
                      className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-off text-xs border border-white/10 flex items-center gap-1"
                    >
                      <ChevronLeft size={14} /> Prev
                    </button>
                    <button
                      onClick={() => handleScroll("right")}
                      className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-off text-xs border border-white/10 flex items-center gap-1"
                    >
                      Next <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
