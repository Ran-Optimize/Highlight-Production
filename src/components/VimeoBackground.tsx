import React, { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import { Volume2, VolumeX } from 'lucide-react';

interface VimeoBackgroundProps {
  videoId?: string; // Legacy support
  desktopVideoId?: string;
  mobileVideoId?: string;
  desktopRatio?: number; // e.g., 4/3 or 16/9
  mobileRatio?: number; // e.g., 9/16
  children: React.ReactNode;
  overlayOpacity?: string;
  className?: string;
  showGradients?: boolean;
  startTime?: number;
}

export default function VimeoBackground({ 
  videoId, 
  desktopVideoId,
  mobileVideoId,
  desktopRatio = 16 / 9,
  mobileRatio = 9 / 16,
  children, 
  overlayOpacity = 'opacity-0',
  className = "relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black",
  showGradients = true,
  startTime = 0
}: VimeoBackgroundProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [player, setPlayer] = useState<Player | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Determine which video ID to use
  const activeVideoId = isMobile && mobileVideoId ? mobileVideoId : (desktopVideoId || videoId);
  const activeRatio = isMobile && mobileVideoId ? mobileRatio : desktopRatio;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !activeVideoId) return;

    let isMounted = true;
    const currentContainer = containerRef.current;

    // Create a dedicated wrapper for this player instance to avoid DOM conflicts
    const playerWrapper = document.createElement('div');
    playerWrapper.style.width = '100%';
    playerWrapper.style.height = '100%';
    currentContainer.appendChild(playerWrapper);

    const vimeoPlayer = new Player(playerWrapper, {
      id: parseInt(activeVideoId, 10),
      background: true, // Hides controls, autoplays, loops, mutes
      muted: true,
      loop: true,
      autoplay: true,
      autopause: false,
      dnt: true,
    });

    vimeoPlayer.ready().then(() => {
      if (isMounted) {
        if (startTime > 0) {
          vimeoPlayer.setCurrentTime(startTime).catch(err => console.warn('Vimeo setCurrentTime error:', err));
        }
        setPlayer(vimeoPlayer);
      }
    }).catch(err => {
      console.warn('Vimeo player ready error:', err);
    });

    return () => {
      isMounted = false;
      setPlayer(null);
      
      vimeoPlayer.destroy().then(() => {
        if (currentContainer.contains(playerWrapper)) {
          currentContainer.removeChild(playerWrapper);
        }
      }).catch(error => {
        // Ignore "Unknown player" errors during destruction
        console.warn('Vimeo destroy error:', error);
        if (currentContainer.contains(playerWrapper)) {
          currentContainer.removeChild(playerWrapper);
        }
      });
    };
  }, [activeVideoId, startTime]);

  // ResizeObserver to ensure the iframe perfectly covers the section (object-fit: cover equivalent)
  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;
    
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      
      const { width, height } = entry.contentRect;
      const containerRatio = width / height;

      // Add a slight overscan (zoom) to ensure the video bleeds past the edges,
      // hiding any potential black bars from the video encoding or player.
      const overscan = isMobile ? 1.25 : 1.15; // Increased overscan to 25% mobile, 15% desktop

      let w = width;
      let h = height;

      if (containerRatio > activeRatio) {
        // Container is wider than video -> match width, scale height
        w = width * overscan;
        h = (width / activeRatio) * overscan;
      } else {
        // Container is taller than video -> match height, scale width
        h = height * overscan;
        w = (height * activeRatio) * overscan;
      }

      if (containerRef.current) {
        containerRef.current.style.width = `${w}px`;
        containerRef.current.style.height = `${h}px`;
      }
    });

    resizeObserver.observe(sectionRef.current);
    return () => resizeObserver.disconnect();
  }, [activeRatio, isMobile]);

  const toggleMute = () => {
    if (!player) return;
    if (isMuted) {
      player.setVolume(1).catch(e => console.warn('Vimeo volume error:', e));
      player.setMuted(false).catch(e => console.warn('Vimeo mute error:', e));
      setIsMuted(false);
    } else {
      player.setVolume(0).catch(e => console.warn('Vimeo volume error:', e));
      player.setMuted(true).catch(e => console.warn('Vimeo mute error:', e));
      setIsMuted(true);
    }
  };

  return (
    <section ref={sectionRef} className={className}>
      {/* Vimeo Iframe Container */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div 
          ref={containerRef}
          className="vimeo-container relative"
        />
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 bg-black ${overlayOpacity} z-10 pointer-events-none transition-opacity duration-300`}></div>

      {/* Top and Bottom Gradient Fades */}
      {showGradients && (
        <>
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        </>
      )}

      {/* Content */}
      <div className="relative z-20 w-full pointer-events-auto">
        {children}
      </div>

      {/* Mute/Unmute Button */}
      <button 
        onClick={toggleMute}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-30 p-4 bg-black/60 hover:bg-black/90 text-white rounded-none backdrop-blur-md transition-all border border-white/20 pointer-events-auto cursor-pointer shadow-xl flex items-center justify-center group"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX size={24} className="group-hover:scale-110 transition-transform" />
        ) : (
          <Volume2 size={24} className="group-hover:scale-110 transition-transform" />
        )}
      </button>
    </section>
  );
}
