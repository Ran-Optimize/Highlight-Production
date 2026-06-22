import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface YouTubeBackgroundProps {
  desktopVideoId: string;
  mobileVideoId: string;
  desktopRatio?: number;
  mobileRatio?: number;
  children: React.ReactNode;
  overlayOpacity?: string;
  className?: string;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

export default function YouTubeBackground({
  desktopVideoId,
  mobileVideoId,
  desktopRatio = 16 / 9,
  mobileRatio = 9 / 16,
  children,
  overlayOpacity = 'opacity-0',
  className = "relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
}: YouTubeBackgroundProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [player, setPlayer] = useState<any>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const activeVideoId = isMobile ? mobileVideoId : desktopVideoId;
  const activeRatio = isMobile ? mobileRatio : desktopRatio;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!activeVideoId || !containerRef.current) return;

    let isMounted = true;
    const currentContainer = containerRef.current;

    // Clean up previous player if it exists
    if (player) {
      player.destroy();
      setPlayer(null);
    }

    // Create a new div for the player
    const playerDiv = document.createElement('div');
    playerDiv.id = `youtube-player-${activeVideoId}`;
    playerDiv.style.width = '100%';
    playerDiv.style.height = '100%';
    playerDiv.style.position = 'absolute';
    playerDiv.style.top = '0';
    playerDiv.style.left = '0';
    playerDiv.style.pointerEvents = 'none'; // Prevent interaction with the video
    
    // Clear container and append new div
    currentContainer.innerHTML = '';
    currentContainer.appendChild(playerDiv);

    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) return;
      
      const newPlayer = new window.YT.Player(playerDiv.id, {
        videoId: activeVideoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          loop: 1,
          playlist: activeVideoId,
          playsinline: 1,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3
        },
        events: {
          onReady: (event: any) => {
            if (isMounted) {
              event.target.mute();
              event.target.playVideo();
              setPlayer(event.target);
            }
          },
          onStateChange: (event: any) => {
            // Ensure loop works seamlessly
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          }
        }
      });
    };

    const loadYouTubeAPI = () => {
      if (window.YT && window.YT.Player) {
        initPlayer();
        return;
      }

      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        if (firstScriptTag && firstScriptTag.parentNode) {
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        } else {
          document.head.appendChild(tag);
        }
      }

      // If the API is already loading, we need to wait for it
      const existingCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (existingCallback) existingCallback();
        initPlayer();
      };
    };

    loadYouTubeAPI();

    return () => {
      isMounted = false;
      if (player && typeof player.destroy === 'function') {
        player.destroy();
      }
    };
  }, [activeVideoId]);

  // ResizeObserver to ensure the iframe perfectly covers the section
  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;
    
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      
      const { width, height } = entry.contentRect;
      const containerRatio = width / height;

      // Add a slight overscan (zoom) to ensure the video bleeds past the edges
      const overscan = isMobile ? 1.3 : 1.2;

      let w = width;
      let h = height;

      if (containerRatio > activeRatio) {
        w = width * overscan;
        h = (width / activeRatio) * overscan;
      } else {
        h = height * overscan;
        w = (height * activeRatio) * overscan;
      }

      if (containerRef.current) {
        containerRef.current.style.width = `${w}px`;
        containerRef.current.style.height = `${h}px`;
        
        // Center the container
        containerRef.current.style.position = 'absolute';
        containerRef.current.style.left = '50%';
        containerRef.current.style.top = '50%';
        containerRef.current.style.transform = 'translate(-50%, -50%)';
      }
    });

    resizeObserver.observe(sectionRef.current);
    return () => resizeObserver.disconnect();
  }, [activeRatio, isMobile]);

  const toggleMute = () => {
    if (!player) return;
    if (isMuted) {
      player.unMute();
      player.setVolume(100);
      setIsMuted(false);
    } else {
      player.mute();
      setIsMuted(true);
    }
  };

  return (
    <section ref={sectionRef} className={className}>
      {/* YouTube Iframe Container */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div 
          ref={containerRef}
          className="youtube-container relative"
        />
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 bg-black ${overlayOpacity} z-10 pointer-events-none transition-opacity duration-300`}></div>

      {/* Top Gradient Fade */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-20 w-full pointer-events-auto">
        {children}
      </div>

      {/* Mute/Unmute Button */}
      <button 
        onClick={toggleMute}
        className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-30 p-4 bg-black/60 hover:bg-black/90 text-white rounded-none backdrop-blur-md transition-all border border-white/20 pointer-events-auto cursor-pointer shadow-xl flex items-center justify-center group"
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
