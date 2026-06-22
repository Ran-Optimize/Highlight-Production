import { useEffect, useRef, useState } from 'react';

export default function InteractiveLights() {
  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <LightFixture x="20%" y={-50} mousePos={mousePos} />
      <LightFixture x="80%" y={-50} mousePos={mousePos} />
    </div>
  );
}

function LightFixture({ x, y, mousePos }: { x: string | number; y: number; mousePos: { x: number; y: number } }) {
  const fixtureRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (fixtureRef.current) {
      const rect = fixtureRef.current.getBoundingClientRect();
      const fixtureX = rect.left + rect.width / 2;
      const fixtureY = rect.top + rect.height / 2;
      const dx = mousePos.x - fixtureX;
      const dy = mousePos.y - fixtureY;
      const theta = Math.atan2(dy, dx) * (180 / Math.PI);
      setAngle(theta - 90); // Adjust based on initial orientation
    }
  }, [mousePos]);

  return (
    <div
      ref={fixtureRef}
      className="absolute top-0 origin-top transition-transform duration-200 ease-out"
      style={{ left: x, transform: `translateY(${y}px) rotate(${angle}deg)` }}
    >
      {/* Fixture Body */}
      <div className="w-12 h-16 bg-zinc-900 rounded-none border-b-4 border-zinc-700 relative z-10 mx-auto shadow-2xl"></div>
      {/* Light Beam */}
      <div
        className="w-[400px] h-[150vh] origin-top opacity-30 dark:opacity-50 mix-blend-screen"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)',
          clipPath: 'polygon(40% 0, 60% 0, 100% 100%, 0 100%)',
          transform: 'translateX(-50%)',
          marginLeft: '50%'
        }}
      ></div>
    </div>
  );
}
