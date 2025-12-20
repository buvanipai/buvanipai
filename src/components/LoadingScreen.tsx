import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-50 text-ink">
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-6 animate-pulse">
        {/* Cute Logo Animation */}
        <div className="flex items-center gap-1">
            <span className="text-4xl font-heading font-bold text-ink">b</span>
            <span className="h-8 w-[3px] bg-ink rotate-12 mx-1 rounded-full"></span>
            <span className="text-4xl font-heading font-bold text-ink">p</span>
        </div>

        {/* Bouncing Dots */}
        <div className="flex gap-2">
            <div className="w-2 h-2 bg-ink rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-ink rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-ink rounded-full animate-bounce"></div>
        </div>
        
        <p className="font-mono text-xs uppercase tracking-widest text-subtle mt-2">
            Loading Portfolio...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;