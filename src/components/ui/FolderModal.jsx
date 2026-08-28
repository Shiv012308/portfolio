"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

export default function FolderModal({ category, isOpen, onClose }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {category.items && category.items.length > 0 ? (
                  category.items.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="group relative w-full aspect-[4/5] bg-black rounded-xl overflow-hidden shadow-lg border border-off/10 hover:border-off/40 transition-colors"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <h4 className="font-heading text-xl font-bold text-off uppercase">
                          {item.title}
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
        </>
      )}
    </AnimatePresence>
  );
}
