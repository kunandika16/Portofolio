import React from 'react';
import { personalInfo } from '../data/mockData';
import { Heart, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0F10] border-t border-[#2D2D30] py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h3>
              <p className="text-white/70 mb-4">
                {personalInfo.title}
              </p>
              <p className="text-white/50 text-sm">
                Building digital experiences with passion and precision.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={item === 'Certifications' ? '#about' : `#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = item === 'Certifications' ? 'about' : item.toLowerCase();
                      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-white/70 hover:text-[#E8B4C8] transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-3 mb-4">
                <a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#1A1A1D] border border-[#2D2D30] flex items-center justify-center text-[#E8B4C8] hover:bg-gradient-to-br hover:from-[#E8B4C8] hover:to-[#FF6B9D] hover:text-white hover:border-transparent transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#1A1A1D] border border-[#2D2D30] flex items-center justify-center text-[#E8B4C8] hover:bg-gradient-to-br hover:from-[#FF6B9D] hover:to-[#00D9FF] hover:text-white hover:border-transparent transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 rounded-lg bg-[#1A1A1D] border border-[#2D2D30] flex items-center justify-center text-[#E8B4C8] hover:bg-gradient-to-br hover:from-[#00D9FF] hover:to-[#E8B4C8] hover:text-white hover:border-transparent transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-white/60 text-sm">
                {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#2D2D30]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/60 text-sm">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              <p className="text-white/40 text-xs">
                Designed & Developed with modern web technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
