
import React from 'react';

const GameLogo = () => {
  return (
    <div className="text-center mb-16 animate-floating">
      <h1 className="font-['Cinzel'] text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-forest-glow via-forest-sage to-forest-emerald mb-4 tracking-wide">
        Elaren
      </h1>
      <div className="relative">
        <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl lg:text-3xl text-forest-glow/80 italic tracking-wider">
          o Espírito da Floresta
        </p>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-forest-glow to-transparent animate-mystical-glow"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
        <div className="w-2 h-2 bg-forest-glow rounded-full animate-pulse"></div>
      </div>
      <div className="absolute top-8 left-1/4 transform -translate-x-1/2">
        <div className="w-1 h-1 bg-forest-sage/60 rounded-full animate-pulse delay-500"></div>
      </div>
      <div className="absolute top-12 right-1/4 transform translate-x-1/2">
        <div className="w-1.5 h-1.5 bg-forest-glow/40 rounded-full animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default GameLogo;
