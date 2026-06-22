import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const SVGS = [
  // Luxury Chair
  <svg key="chair" viewBox="0 0 100 100" className="w-48 h-48 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path className="icon-path" d="M30 75 L30 45 L70 45 L70 75 M30 45 L30 25 C30 15 70 15 70 25 L70 45 M20 45 L80 45" />
  </svg>,
  // Dining Table
  <svg key="table" viewBox="0 0 100 100" className="w-48 h-48 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path className="icon-path" d="M15 45 L85 45 M25 45 L25 75 M75 45 L75 75 M10 45 L90 45 M20 45 L20 50 L80 50 L80 45" />
  </svg>,
  // Wedding Canopy (Chuppah)
  <svg key="chuppah" viewBox="0 0 100 100" className="w-48 h-48 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path className="icon-path" d="M20 80 L20 25 L80 25 L80 80 M10 25 L90 25 M20 25 L50 10 L80 25 M20 35 L80 35 M30 25 L30 45 M70 25 L70 45" />
  </svg>
];

export default function MagicLensSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Initialize CSS variables to center of screen
    gsap.set(section, { "--x": window.innerWidth / 2, "--y": window.innerHeight / 2 });

    const xTo = gsap.quickTo(section, "--x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(section, "--y", { duration: 0.4, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      xTo(e.clientX - rect.left);
      yTo(e.clientY - rect.top);
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", () => setIsHovered(true));
    section.addEventListener("mouseleave", () => setIsHovered(false));

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", () => setIsHovered(true));
      section.removeEventListener("mouseleave", () => setIsHovered(false));
    };
  }, []);

  useEffect(() => {
    const icons = iconsRef.current?.children;
    if (!icons) return;

    const tl = gsap.timeline({ repeat: -1 });

    Array.from(icons as HTMLCollectionOf<HTMLElement>).forEach((icon, i) => {
      const path = icon.querySelector('.icon-path');
      if (!path) return;
      
      // Set initial state
      gsap.set(icon, { opacity: 0, scale: 0.9 });
      gsap.set(path, { strokeDasharray: 400, strokeDashoffset: 400 });

      // Draw in and fade in
      tl.to(icon, { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }, `+=${i === 0 ? 0 : 0.2}`)
        .to(path, { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" }, "<")
        // Hold
        .to({}, { duration: 1.5 })
        // Draw out and fade out
        .to(path, { strokeDashoffset: -400, duration: 1.5, ease: "power2.inOut" })
        .to(icon, { opacity: 0, scale: 1.1, duration: 0.8, ease: "power2.in" }, "-=1");
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen overflow-hidden cursor-none"
      style={{ backgroundColor: '#1a1a1a' }}
    >
      {/* Custom Cursor Dot */}
      <div 
        className="absolute w-4 h-4 rounded-full bg-[#D4AF37] pointer-events-none z-50 mix-blend-difference transition-opacity duration-300"
        style={{ 
          transform: 'translate(calc(var(--x) * 1px - 50%), calc(var(--y) * 1px - 50%))',
          opacity: isHovered ? 1 : 0
        }}
      />

      {/* Base Layer: Dark background with Gold SVGs */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0">
        <div className="text-center mb-24 z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-widest uppercase mb-4" style={{ fontFamily: "'Assistant', sans-serif" }}>
            The Blueprint
          </h2>
          <p className="text-[#D4AF37] tracking-widest text-sm uppercase">Hover to reveal the reality</p>
        </div>
        
        <div ref={iconsRef} className="relative w-64 h-64">
          {SVGS}
        </div>
      </div>

      {/* Mask Layer: High-res photo revealed by mouse */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none transition-[clip-path] duration-500 ease-out"
        style={{
          clipPath: isHovered 
            ? 'circle(250px at calc(var(--x) * 1px) calc(var(--y) * 1px))' 
            : 'circle(0px at calc(var(--x) * 1px) calc(var(--y) * 1px))'
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop" 
          alt="Luxury Event" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Text inside the lens */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-widest uppercase mb-4" style={{ fontFamily: "'Assistant', sans-serif" }}>
              The Reality
            </h2>
            <p className="text-white tracking-widest text-sm uppercase">Engineered to perfection</p>
          </div>
          <div className="w-64 h-64"></div> {/* Spacer to match SVG position */}
        </div>
      </div>
    </section>
  );
}
