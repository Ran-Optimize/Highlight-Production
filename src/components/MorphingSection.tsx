import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const paths = [
  // Chair
  "M 30 20 L 70 20 L 70 50 L 70 80 L 70 50 L 30 50 L 30 80 L 30 20",
  // Table
  "M 10 45 L 90 45 L 75 45 L 75 80 L 75 45 L 25 45 L 25 80 L 25 45",
  // Chuppah
  "M 20 80 L 20 20 L 80 20 L 80 80 L 80 30 L 50 25 L 20 30 L 20 30"
];

const texts = ["Take a Seat", "Gather Together", "Celebrate Big"];

export default function MorphingSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full max-w-[1151px] mx-auto h-[450px] flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="relative w-64 h-64 mb-16 flex items-center justify-center z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" style={{ filter: 'drop-shadow(0 0 16px rgba(212, 175, 55, 0.4))' }}>
          <motion.path
            d={paths[index]}
            fill="transparent"
            stroke="#D4AF37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={false}
            animate={{ d: paths[index] }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }} // Smooth, organic easing
          />
        </svg>
      </div>

      <div className="h-24 flex items-center justify-center overflow-hidden z-10">
        <AnimatePresence mode="wait">
          <motion.h2
            key={index}
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl text-[#D4AF37] tracking-wide text-center"
            style={{ fontFamily: "'Assistant', sans-serif" }}
          >
            {texts[index]}
          </motion.h2>
        </AnimatePresence>
      </div>
    </section>
  );
}
