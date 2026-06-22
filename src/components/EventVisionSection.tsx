import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

export default function EventVisionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth trailing for the mask and cursor
  const maskX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const maskY = useSpring(mouseY, { stiffness: 150, damping: 25 });
  
  // Animate the radius of the lens
  const radius = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    radius.set(isHovered ? 280 : 0);
  }, [isHovered, radius]);

  // Create dynamic clip-path and transform-origin strings
  const clipPath = useMotionTemplate`circle(${radius}px at ${maskX}px ${maskY}px)`;
  const transformOrigin = useMotionTemplate`${maskX}px ${maskY}px`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    const section = sectionRef.current;
    if (section) {
      // Initialize center position
      const rect = section.getBoundingClientRect();
      mouseX.set(rect.width / 2);
      mouseY.set(rect.height / 2);

      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseenter', () => setIsHovered(true));
      section.addEventListener('mouseleave', () => setIsHovered(false));
    }
    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseenter', () => setIsHovered(true));
        section.removeEventListener('mouseleave', () => setIsHovered(false));
      }
    };
  }, [mouseX, mouseY]);

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-[#fafafa] overflow-hidden cursor-none border-y border-zinc-200" style={{ fontFamily: "'Assistant', sans-serif" }}>
      {/* Background Layer: Clean Architectural Blueprint */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#d4d4d8" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Room Outline */}
          <rect x="10%" y="10%" width="80%" height="80%" fill="none" stroke="#a1a1aa" strokeWidth="1" />
          
          {/* Dance Floor */}
          <rect x="40%" y="35%" width="20%" height="30%" fill="none" stroke="#a1a1aa" strokeWidth="0.5" strokeDasharray="4,4" />
          <text x="50%" y="50%" textAnchor="middle" fill="#71717a" fontSize="10" letterSpacing="0.3em" fontFamily="'Assistant', sans-serif">DANCE FLOOR</text>

          {/* Tables (Circles) */}
          {[25, 75].map(cx => 
            [30, 50, 70].map(cy => (
              <g key={`${cx}-${cy}`}>
                <circle cx={`${cx}%`} cy={`${cy}%`} r="3%" fill="none" stroke="#a1a1aa" strokeWidth="0.5" />
                <circle cx={`${cx}%`} cy={`${cy}%`} r="0.5%" fill="#a1a1aa" />
              </g>
            ))
          )}

          {/* Stage */}
          <rect x="35%" y="10%" width="30%" height="12%" fill="none" stroke="#a1a1aa" strokeWidth="0.5" />
          <text x="50%" y="17%" textAnchor="middle" fill="#71717a" fontSize="10" letterSpacing="0.3em" fontFamily="'Assistant', sans-serif">STAGE</text>
        </svg>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <h2 className="text-4xl md:text-6xl font-light text-zinc-900 tracking-[0.15em] uppercase mb-6" style={{ fontFamily: "'Assistant', sans-serif" }}>
          The Vision
        </h2>
        <p className="text-zinc-500 tracking-[0.3em] text-xs uppercase">Explore the blueprint</p>
      </div>

      {/* Foreground Layer: Masked Image */}
      <motion.div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ clipPath }}
      >
        <motion.img 
          src="https://i.postimg.cc/pXvkhrPB/DSC-7594-Enhanced-NR.jpg" 
          alt="Luxury Wedding" 
          className="w-full h-full object-cover"
          style={{
            scale: 1.08, // Magnifying effect
            transformOrigin
          }}
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-[0.15em] uppercase mb-6" style={{ fontFamily: "'Assistant', sans-serif" }}>
            The Reality
          </h2>
          <p className="text-white tracking-[0.3em] text-xs uppercase">Engineered to perfection</p>
        </div>
      </motion.div>

      {/* Custom Cursor Ring (Vogue/Tiffany style) */}
      <motion.div 
        className="absolute top-0 left-0 w-16 h-16 rounded-full border-[0.5px] border-zinc-400 pointer-events-none z-30 mix-blend-difference flex items-center justify-center"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isHovered ? 1 : 0
        }}
      >
        <div className="w-1 h-1 bg-white rounded-full"></div>
      </motion.div>
    </section>
  );
}
