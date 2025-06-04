
import React from 'react';

const ForestBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main background gradient */}
      <div className="forest-bg absolute inset-0"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-forest-glow/20 rounded-full animate-floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Mystical forest silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3">
        <svg viewBox="0 0 1200 400" className="w-full h-full opacity-20">
          <path
            d="M0,400 L0,300 Q50,250 100,280 T200,300 Q250,250 300,280 T400,300 Q450,200 500,250 T600,280 Q650,230 700,260 T800,280 Q850,220 900,250 T1000,270 Q1050,240 1100,260 T1200,280 L1200,400 Z"
            fill="url(#forestGradient)"
          />
          <defs>
            <linearGradient id="forestGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(45, 90, 61, 0.8)" />
              <stop offset="100%" stopColor="rgba(10, 15, 10, 0.9)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-forest-glow/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-forest-sage/10 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-forest-blue-deep/8 rounded-full blur-md animate-pulse delay-2000"></div>
    </div>
  );
};

export default ForestBackground;
