import React from 'react';
import { personalInfo, education, certifications } from '../data/mockData';
import { MapPin, Mail, Linkedin, GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0F0F10] via-[#1A1A1D] to-[#0F0F10] relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 border border-[#E8B4C8]/20 rounded-full" />
        <div className="absolute bottom-40 left-20 w-32 h-32 border border-[#FF6B9D]/15 rotate-45" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse" />
      </div>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image & Contact */}
            <div className="space-y-6">
              {/* Profile Card */}
              <div className="bg-[#1A1A1D] rounded-2xl p-8 border border-[#2D2D30] hover:border-[#E8B4C8]/50 transition-all duration-300">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#E8B4C8] to-[#FF6B9D] p-1">
                  <img 
                    src="/foto.jpeg" 
                    alt={personalInfo.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  {personalInfo.name}
                </h3>
                <p className="text-[#E8B4C8] text-center mb-6">{personalInfo.title}</p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/70 hover:text-[#E8B4C8] transition-colors">
                    <MapPin className="w-5 h-5 text-[#E8B4C8]" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 text-white/70 hover:text-[#E8B4C8] transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[#E8B4C8]" />
                    <span>{personalInfo.email}</span>
                  </a>
                  <a 
                    href={`https://${personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-[#E8B4C8] transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-[#E8B4C8]" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>

              {/* Education Card */}
              <div className="bg-[#1A1A1D] rounded-2xl p-6 border border-[#2D2D30] hover:border-[#00D9FF]/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#E8B4C8] to-[#00D9FF] flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{education.degree}</h4>
                    <p className="text-[#E8B4C8] text-sm mb-2">{education.institution}</p>
                    <p className="text-white/60 text-sm">{education.duration}</p>
                    <p className="text-white/60 text-sm">GPA: <span className="text-[#E8B4C8] font-semibold">{education.gpa}</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Bio & Stats */}
            <div className="space-y-6">
              {/* Bio */}
              <div className="bg-[#1A1A1D] rounded-2xl p-8 border border-[#2D2D30] hover:border-[#FF6B9D]/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-gradient-to-b from-[#E8B4C8] to-[#FF6B9D] rounded-full" />
                  My Journey
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1A1A1D] rounded-xl p-6 border border-[#2D2D30] hover:border-[#E8B4C8]/50 transition-all duration-300 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] bg-clip-text text-transparent mb-2">
                    2+
                  </div>
                  <div className="text-white/60 text-sm">Years Experience</div>
                </div>

                <div className="bg-[#1A1A1D] rounded-xl p-6 border border-[#2D2D30] hover:border-[#FF6B9D]/50 transition-all duration-300 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#FF6B9D] to-[#00D9FF] bg-clip-text text-transparent mb-2">
                    8+
                  </div>
                  <div className="text-white/60 text-sm">Projects Delivered</div>
                </div>

                <div className="bg-[#1A1A1D] rounded-xl p-6 border border-[#2D2D30] hover:border-[#00D9FF]/50 transition-all duration-300 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#E8B4C8] bg-clip-text text-transparent mb-2">
                    30+
                  </div>
                  <div className="text-white/60 text-sm">UI Components</div>
                </div>

                <div className="bg-[#1A1A1D] rounded-xl p-6 border border-[#2D2D30] hover:border-[#E8B4C8]/50 transition-all duration-300 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#E8B4C8] to-[#00D9FF] bg-clip-text text-transparent mb-2">
                    3.77
                  </div>
                  <div className="text-white/60 text-sm">GPA Score</div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-[#00FFFF] to-[#FF0080] bg-clip-text text-transparent flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-[#00FFFF]" />
                Certifications & Training
              </span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.slice(0, 6).map((cert, index) => (
                <div key={cert.id} className="bg-[#1A1A1D] rounded-xl p-5 border border-[#2D2D30] hover:border-[#00FFFF]/50 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00FFFF] mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-white mb-1">{cert.title}</h4>
                      <p className="text-[#00FFFF] text-sm font-semibold mb-2">{cert.organization}</p>
                      <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
                        <span className="px-2 py-1 rounded-full bg-[#FF0080]/20 text-[#FF0080] border border-[#FF0080]/30 text-xs">
                          {cert.type}
                        </span>
                        <span>{cert.duration}</span>
                      </div>
                      <p className="text-white/70 text-xs leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;