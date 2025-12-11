import React from 'react';
import { experience } from '../data/mockData';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-[#0F0F10] via-[#1A1A1D] to-[#2D2D30] relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 right-1/3 w-28 h-28 border border-[#FF6B9D]/20 rounded-full animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border border-[#E8B4C8]/15 rotate-12" />
      </div>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] mx-auto rounded-full" />
        </div>

        <div className="flex justify-center">
          <div className="max-w-3xl w-full">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00FFFF] to-[#FF0080] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <div className="relative bg-black/40 rounded-2xl p-8 border border-[#00FFFF]/20 hover:border-[#00FFFF] transition-all duration-300 backdrop-blur-xl">
                {/* Company & Position */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00FFFF] to-[#FF0080] flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{experience[0].position}</h3>
                    <p className="text-[#00FFFF] font-bold text-lg mb-3">{experience[0].company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-white/70">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#00FFFF]" />
                        {experience[0].duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#FF0080]" />
                        {experience[0].location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 mb-6 text-lg leading-relaxed">{experience[0].description}</p>

                {/* Highlights */}
                <div className="grid md:grid-cols-2 gap-3">
                  {experience[0].highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-black/20 border border-[#00FFFF]/10">
                      <div className="w-2 h-2 rounded-full bg-[#00FFFF] mt-2 flex-shrink-0" />
                      <span className="text-white/70 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
