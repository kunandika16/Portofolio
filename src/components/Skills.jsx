import React from 'react';
import { skills } from '../data/mockData';
import { Code2, Layers, Wrench } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#2D2D30] via-[#1A1A1D] to-[#0F0F10] relative">
      {/* Subtle geometric elements */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute top-32 left-1/4 w-16 h-16 border border-[#00D9FF]/20 rotate-45" />
        <div className="absolute bottom-32 right-1/4 w-12 h-12 border border-[#E8B4C8]/15 rounded-full" />
      </div>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00FFFF] to-[#FF0080] bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFFF] to-[#FF0080] mx-auto rounded-full mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Advanced technologies and tools powering modern digital solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Programming Languages */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00FFFF] to-[#FF0080] flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Programming Languages</h3>
            </div>

            <div className="space-y-4">
              {skills.languages.map((lang, index) => (
                <div key={index} className="bg-[#1A1A1D] rounded-lg p-4 border border-[#2D2D30] hover:border-[#00FFFF]/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">{lang.name}</span>
                    <span className="text-[#00FFFF] font-bold">{lang.level}%</span>
                  </div>
                  <div className="h-2 bg-[#2D2D30] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF0080] to-[#8A2BE2] flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Frameworks & Libraries</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.frameworks.map((framework, index) => (
                <div key={index} className="bg-[#1A1A1D] rounded-xl p-6 border border-[#2D2D30] hover:border-[#FF0080]/50 transition-all duration-300 text-center">
                  <div className="text-4xl mb-3">{framework.icon}</div>
                  <h4 className="text-white font-semibold text-sm">{framework.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8A2BE2] to-[#00FFFF] flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Tools & Technologies</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {skills.tools.map((tool, index) => (
                <div key={index} className="bg-[#1A1A1D] rounded-xl p-4 border border-[#2D2D30] hover:border-[#E8B4C8]/50 transition-all duration-300 text-center">
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <h4 className="text-white font-medium text-xs">{tool.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
