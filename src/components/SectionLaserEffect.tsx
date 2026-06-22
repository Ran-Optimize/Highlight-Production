import { motion } from 'framer-motion';

type LaserColor = 'cyan' | 'red' | 'emerald' | 'blue' | 'amber';

interface SectionLaserEffectProps {
  color1?: LaserColor;
  color2?: LaserColor;
  delayOffset?: number;
}

const colorMap = {
  cyan: 'shadow-[0_0_25px_6px_rgba(6,182,212,0.8)] bg-cyan-100',
  red: 'shadow-[0_0_25px_6px_rgba(239,68,68,0.8)] bg-red-100',
  emerald: 'shadow-[0_0_25px_6px_rgba(16,185,129,0.8)] bg-emerald-100',
  blue: 'shadow-[0_0_25px_6px_rgba(59,130,246,0.8)] bg-blue-100',
  amber: 'shadow-[0_0_25px_6px_rgba(245,158,11,0.8)] bg-amber-100',
};

export default function SectionLaserEffect({ 
  color1 = 'cyan', 
  color2 = 'red',
  delayOffset = 0 
}: SectionLaserEffectProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen opacity-40 dark:opacity-60">
      {/* Laser 1 - Top sweeping down */}
      <motion.div
        className={`absolute top-[-20%] left-[20%] w-[2px] h-[150%] blur-[1px] ${colorMap[color1]} origin-top`}
        animate={{ 
          rotate: [-35, 35, -35],
          opacity: [0, 0.8, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: delayOffset }}
      />
      
      {/* Laser 2 - Bottom sweeping up */}
      <motion.div
        className={`absolute bottom-[-20%] right-[20%] w-[2px] h-[150%] blur-[1px] ${colorMap[color2]} origin-bottom`}
        animate={{ 
          rotate: [35, -35, 35],
          opacity: [0, 0.8, 0]
        }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: delayOffset + 1.5 }}
      />

      {/* Laser 3 - Horizontal sweeping across */}
      <motion.div
        className={`absolute top-[30%] left-[-20%] w-[150%] h-[2px] blur-[1px] ${colorMap[color1]} origin-left`}
        animate={{ 
          rotate: [-15, 15, -15],
          y: [-150, 150, -150],
          opacity: [0, 0.6, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: delayOffset + 3 }}
      />
    </div>
  );
}
