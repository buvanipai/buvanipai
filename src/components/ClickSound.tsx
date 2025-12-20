import React, { useEffect, useRef } from 'react';

const ClickSound: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 1. Load the file
    // Make sure 'click.mp3' is in your 'public/sounds/' folder
    audioRef.current = new Audio('/sounds/click.mp3');
    audioRef.current.volume = 0.6; // Adjust volume (0.0 to 1.0)
    
    // Preload it so it's ready instantly
    audioRef.current.preload = 'auto';

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // 2. Check if we clicked something interactive
      // (Links, Buttons, or elements acting as buttons)
      const isInteractive = target.closest('a, button, input[type="submit"], [role="button"]');

      if (isInteractive && audioRef.current) {
        // Reset time to 0 to allow rapid-fire clicking
        audioRef.current.currentTime = 0.22;
        
        // Play sound
        // We use .catch() to ignore errors if the browser blocks auto-play (rare on clicks)
        audioRef.current.play().catch(() => {});
      }
    };

    window.addEventListener('click', handleGlobalClick);
    
    return () => {
      window.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return null;
};

export default ClickSound;