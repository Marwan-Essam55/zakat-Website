import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-emerald-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-center">
        
        <div className="flex items-center gap-4 group cursor-pointer text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-200 blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
            
            <img 
              src="/icon1.png" 
              alt="طهر مالك" 
              className="relative w-16 h-16 md:w-20 md:h-20 object-contain transform group-hover:scale-110 transition-transform duration-300" 
            />
          </div>
          
          <div className="flex flex-col items-start">
            <span className="text-2xl md:text-3xl font-black text-emerald-900 tracking-tighter leading-none">
              طَهّر <span className="text-emerald-600">مالك</span>
            </span>
            <span className="text-[10px] md:text-xs font-bold text-emerald-700/60 tracking-[0.2em] uppercase mt-1">
               احسب زكاتك صح
            </span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;