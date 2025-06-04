
import React from 'react';
import GameLogo from '../components/GameLogo';
import GameButton from '../components/GameButton';
import ForestBackground from '../components/ForestBackground';

const Index = () => {
  const handlePlayClick = () => {
    console.log('Iniciar jogo');
    // Aqui você pode adicionar a lógica para iniciar o jogo
  };

  const handleMenuClick = () => {
    console.log('Abrir menu');
    // Aqui você pode adicionar a lógica para abrir o menu
  };

  const handleStoreClick = () => {
    console.log('Abrir loja');
    // Aqui você pode adicionar a lógica para abrir a loja
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background */}
      <ForestBackground />
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 w-full max-w-2xl">
        {/* Logo */}
        <GameLogo />
        
        {/* Navigation buttons */}
        <div className="space-y-6 md:space-y-8">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <GameButton variant="play" onClick={handlePlayClick}>
              Jogar
            </GameButton>
          </div>
          
          <div className="transform hover:scale-105 transition-transform duration-300">
            <GameButton variant="menu" onClick={handleMenuClick}>
              Menu
            </GameButton>
          </div>
          
          <div className="transform hover:scale-105 transition-transform duration-300">
            <GameButton variant="store" onClick={handleStoreClick}>
              Loja
            </GameButton>
          </div>
        </div>
        
        {/* Mystical footer text */}
        <div className="mt-16 opacity-60">
          <p className="font-['Cormorant_Garamond'] text-forest-glow/60 italic text-sm md:text-base tracking-wide">
            "Onde as sombras dançam e os espíritos sussurram..."
          </p>
        </div>
      </div>
      
      {/* Ambient glow overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 pointer-events-none"></div>
    </div>
  );
};

export default Index;
