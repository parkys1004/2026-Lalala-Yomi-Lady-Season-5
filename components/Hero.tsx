import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <header className="hero-bg h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
        {/* Animated Background Icons */}
        <motion.div 
          className="absolute top-10 left-10 opacity-20 hidden md:block"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
            <i className="fas fa-music text-9xl text-white"></i>
        </motion.div>

        <motion.div 
          className="absolute bottom-20 right-10 opacity-10 hidden md:block"
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
            <i className="fas fa-compact-disc text-8xl text-white"></i>
        </motion.div>

        {/* Content */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-light mb-2 tracking-widest text-pink-400"
        >
          SEASON 5
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter Playfair"
        >
            <span className="gradient-text drop-shadow-lg">LALALA YOMI LADY</span>
        </motion.h1 >

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl font-medium mb-8 text-white/90"
        >
          라라라 요미 레이디 시즌5 파티에 여러분을 초대합니다
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col md:flex-row gap-4"
        >
            <div className="glass-card px-8 py-4 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-pointer">
                <i className="far fa-calendar-check text-pink-500 text-2xl animate-pulse"></i>
                <span className="text-lg">2026. 01. 31 (Sat)</span>
            </div>
            <div className="glass-card px-8 py-4 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-pointer">
                <i className="fas fa-map-marker-alt text-yellow-500 text-2xl animate-bounce"></i>
                <span className="text-lg">부산 서면 맘보빠</span>
            </div>
        </motion.div>

        <motion.a 
          href="#register" 
          className="mt-12 flex flex-col items-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
            <span className="mb-2 text-sm opacity-60 text-white">Scroll Down</span>
            <i className="fas fa-chevron-down text-white"></i>
        </motion.a>
    </header>
  );
};

export default Hero;