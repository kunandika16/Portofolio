import React, { useEffect, useState } from 'react';
import { personalInfo } from '../data/mockData';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F10] via-[#1A1A1D] to-[#2D2D30]">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(232, 180, 200, 0.15), transparent 50%)`
          }}
        />
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        {/* Hexagon pattern */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#E8B4C8]/20 rotate-12 animate-spin" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)', animationDuration: '20s'}} />
        <div className="absolute top-40 right-32 w-24 h-24 border border-[#FF6B9D]/30 -rotate-45 animate-spin" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)', animationDuration: '15s', animationDirection: 'reverse'}} />
        
        {/* Triangles */}
        <div className="absolute top-60 left-1/4 w-16 h-16 border-2 border-[#00D9FF]/25 rotate-45 animate-pulse" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}} />
        <div className="absolute bottom-40 right-1/4 w-20 h-20 border border-[#E8B4C8]/20 -rotate-12 animate-bounce" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDuration: '3s'}} />
        
        {/* Circles with gradients */}
        <div className="absolute top-32 right-20 w-40 h-40 rounded-full border border-[#FF6B9D]/30 animate-ping" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-32 left-32 w-28 h-28 rounded-full border-2 border-[#00D9FF]/25 animate-pulse" />
        
        {/* Floating lines */}
        <div className="absolute top-1/3 left-10 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#E8B4C8]/40 to-transparent rotate-45 animate-pulse" />
        <div className="absolute bottom-1/3 right-10 w-40 h-0.5 bg-gradient-to-r from-transparent via-[#FF6B9D]/30 to-transparent -rotate-12 animate-pulse" style={{animationDelay: '1s'}} />
        
        {/* Dots pattern */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#E8B4C8] rounded-full animate-ping" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-[#FF6B9D] rounded-full animate-ping" style={{animationDelay: '1.5s'}} />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-[#00D9FF] rounded-full animate-ping" style={{animationDelay: '2s'}} />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#E8B4C8] rounded-full animate-ping" style={{animationDelay: '2.5s'}} />
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#E8B4C8]/30 to-transparent rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob" />
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-bl from-[#FF6B9D]/25 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-tr from-[#00D9FF]/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-blob animation-delay-4000" />
        
        {/* Animated squares */}
        <div className="absolute top-1/4 right-1/4 w-8 h-8 border border-[#E8B4C8]/30 rotate-45 animate-spin" style={{animationDuration: '8s'}} />
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 border border-[#FF6B9D]/25 rotate-12 animate-spin" style={{animationDuration: '12s', animationDirection: 'reverse'}} />
        
        {/* Glowing particles */}
        <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-[#E8B4C8] rounded-full shadow-lg shadow-[#E8B4C8]/50 animate-pulse" />
        <div className="absolute bottom-1/2 right-1/2 w-0.5 h-0.5 bg-[#FF6B9D] rounded-full shadow-md shadow-[#FF6B9D]/60 animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-2/3 left-1/4 w-1.5 h-1.5 bg-[#00D9FF] rounded-full shadow-lg shadow-[#00D9FF]/40 animate-pulse" style={{animationDelay: '0.5s'}} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="inline-block mb-6">
            <div className="px-6 py-3 rounded-full border border-[#E8B4C8]/30 bg-[#E8B4C8]/10">
              <p className="text-[#E8B4C8] text-sm font-medium tracking-wide">👋 Hello, I'm</p>
            </div>
          </div>

          {/* Name with gradient */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#E8B4C8] via-[#FF6B9D] to-[#D89BB5] bg-clip-text text-transparent animate-gradient">
              {personalInfo.name}
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90 mb-6">
            {personalInfo.title}
          </h2>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={scrollToProjects}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] text-white font-semibold hover:opacity-90 transition-all duration-300"
            >
              🚀 View My Work
            </button>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="px-8 py-4 rounded-lg border-2 border-[#E8B4C8]/50 bg-[#1A1A1D]/50 text-[#E8B4C8] font-semibold hover:bg-[#E8B4C8]/10 hover:border-[#E8B4C8] transition-all duration-300"
            >
              💬 Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10]/80 to-transparent z-20" />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-12 h-12 rounded-full border-2 border-[#E8B4C8]/30 bg-[#1A1A1D]/50 flex items-center justify-center animate-bounce">
          <ChevronDown className="w-6 h-6 text-[#E8B4C8]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
