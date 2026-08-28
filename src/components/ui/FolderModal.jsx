"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function FolderModal({ category, isOpen, onClose }) {
  const [selectedItem, setSelectedItem] = useState(null);

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
            className="fixed inset-x-4 inset-y-10 md:inset-x-10 md:inset-y-10 z-[101] bg-charcoal rounded-2xl border border-off/20 overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div 
              className="flex items-center justify-between px-6 py-4 border-b border-off/10"
              style={{ backgroundColor: `${category.accent}20` }} // 20% opacity accent
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-4 h-4 rounded-full shadow-lg" 
                  style={{ backgroundColor: category.accent }}
                />
                <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight text-off">
                  {category.name}
                </h2>
                <span className="font-body text-sm text-off/50 mt-1 hidden md:block">
                  {category.count} items in folder
                </span>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-off hover:bg-black transition-colors border border-off/10 hover:border-off/30"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 scrollbar-hide">
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
                      } bg-black rounded-xl overflow-hidden shadow-lg border border-off/10 hover:border-off/40 transition-colors ${item.isCarousel ? 'cursor-pointer' : ''}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className={`w-full h-full ${category.slug === "certificates" ? "object-contain bg-black/60 p-1" : "object-cover"} transition-transform duration-700 group-hover:scale-105`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <h4 className="font-heading text-xl font-bold text-off uppercase flex items-center justify-between w-full">
                          {item.title}
                          {item.isCarousel && (
                            <span className="text-xs font-body bg-white/20 px-2 py-1 rounded backdrop-blur-sm">
                              {category.slug === "presentations" ? "View Slides" : "View Carousel"}
                            </span>
                          )}
                        </h4>
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
                  className="flex items-center justify-between px-6 py-4 border-b border-off/10 bg-black/40 backdrop-blur-sm z-10"
                >
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-off">
                      {selectedItem.title}
                    </h3>
                    <span className="text-xs font-body text-off/50 border border-off/20 px-2 py-0.5 rounded">
                      {category.slug === "presentations" ? "1920 × 1080 HD Deck" : "Slides"}
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-off hover:bg-black transition-colors border border-off/10 hover:border-off/30"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Horizontal Scroll Area for Slides/Images */}
                <div className="flex-1 overflow-x-auto overflow-y-hidden flex items-center p-6 md:p-10 gap-6 md:gap-8 snap-x snap-mandatory scrollbar-hide">
                  {selectedItem.carouselImages?.map((imgUrl, idx) => (
                    <div 
                      key={idx} 
                      style={category.slug === "presentations" ? { aspectRatio: "16 / 9" } : undefined}
                      className={`shrink-0 ${
                        category.slug === "presentations"
                          ? "w-[88vw] md:w-[75vw] lg:w-[68vw] max-w-5xl aspect-video max-h-[75vh]"
                          : "w-[85vw] md:w-[60vw] max-w-2xl h-full max-h-[70vh]"
                      } bg-black rounded-xl overflow-hidden shadow-2xl border border-off/15 snap-center flex items-center justify-center`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={imgUrl} 
                        alt={`${selectedItem.title} slide ${idx + 1}`} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
