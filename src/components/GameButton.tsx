
import React from 'react';
import { Play, Menu, Store } from 'lucide-react';

interface GameButtonProps {
  children: React.ReactNode;
  variant: 'play' | 'menu' | 'store';
  onClick?: () => void;
}

const GameButton: React.FC<GameButtonProps> = ({ children, variant, onClick }) => {
  const getIcon = () => {
    switch (variant) {
      case 'play':
        return <Play className="w-6 h-6 mr-3" fill="currentColor" />;
      case 'menu':
        return <Menu className="w-6 h-6 mr-3" />;
      case 'store':
        return <Store className="w-6 h-6 mr-3" />;
      default:
        return null;
    }
  };

  const getGradient = () => {
    switch (variant) {
      case 'play':
        return 'from-forest-emerald via-forest-sage to-forest-emerald';
      case 'menu':
        return 'from-forest-blue-midnight via-forest-blue-deep to-forest-blue-midnight';
      case 'store':
        return 'from-forest-mystical via-forest-midnight to-forest-mystical';
      default:
        return 'from-forest-emerald to-forest-sage';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`mystical-button bg-gradient-to-r ${getGradient()} text-lg md:text-xl min-w-[200px] md:min-w-[250px] group overflow-hidden relative`}
    >
      <span className="relative z-10 flex items-center justify-center font-['Cormorant_Garamond'] font-semibold tracking-wider">
        {getIcon()}
        {children}
      </span>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-px overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-forest-shimmer"></div>
      </div>
      
      {/* Particle effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-2 left-4 w-1 h-1 bg-forest-glow/60 rounded-full animate-ping delay-100"></div>
        <div className="absolute bottom-3 right-6 w-0.5 h-0.5 bg-forest-glow/40 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-forest-glow/50 rounded-full animate-ping delay-500"></div>
      </div>
    </button>
  );
};

export default GameButton;
