import React from 'react';

export default function VideoBackground({ src, children, overlayOpacity = "opacity-60" }: { src: string, children: React.ReactNode, overlayOpacity?: string }) {
  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 bg-black ${overlayOpacity} z-0 transition-opacity duration-500 dark:bg-black/70 bg-white/40 dark:mix-blend-normal mix-blend-overlay`}></div>
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
