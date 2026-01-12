import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Workshops from './components/Workshops';
import Artists from './components/Artists';
import Ticket from './components/Ticket';
import Invitation from './components/Invitation';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

export default function App() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  // Custom cursor logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-hidden text-slate-50 selection:bg-pink-500 selection:text-white">
      {/* Dynamic Background */}
      <ParticleBackground />
      
      {/* Custom Cursor Glow */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(219, 39, 119, 0.1), transparent 40%)`
        }}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        
        <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col gap-24">
          <Schedule />
          <Workshops />
          <Artists />
          <Ticket />
          <Invitation />
        </div>
      </main>

      <Footer />
    </div>
  );
}