import React, { useState } from 'react';
import { projects } from '../data/mockData';
import { ExternalLink, Smartphone, Globe, Filter, X, Calendar, Code, Zap } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.type && p.type === filter);



  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#0F0F10] via-[#1A1A1D] to-[#2D2D30] relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-10 left-10 w-24 h-24 border border-[#E8B4C8]/20 rotate-12" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}} />
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-[#FF6B9D]/15 -rotate-45" />
      </div>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] mx-auto rounded-full mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Enterprise systems, mobile apps, UI/UX designs, data processing solutions, and freelance projects built with React, Flutter, Python, and modern technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'All Projects', count: projects.length },
            { id: 'internal', label: 'Internal', count: projects.filter(p => p.type === 'internal').length },
            { id: 'freelance', label: 'Freelance', count: projects.filter(p => p.type === 'freelance').length },
            { id: 'startup', label: 'Startup', count: projects.filter(p => p.type === 'startup').length },
            { id: 'ui ux', label: 'UI/UX', count: projects.filter(p => p.type === 'ui ux').length },
            { id: 'data', label: 'Data', count: projects.filter(p => p.type === 'data').length }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                filter === f.id
                  ? 'bg-gradient-to-r from-[#00FFFF] to-[#FF0080] text-black shadow-lg shadow-[#00FFFF]/30'
                  : 'bg-black/40 text-white/70 border border-[#00FFFF]/20 hover:border-[#00FFFF] hover:text-white backdrop-blur-xl'
              }`}
            >
              {f.id === 'all' && <Filter className="w-4 h-4" />}
              {f.label}
              <span className="text-xs opacity-75">({f.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >

              
              {/* Card */}
              <div className="bg-[#1A1A1D] rounded-2xl overflow-hidden border border-[#2D2D30] hover:border-[#E8B4C8] transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-40"
                    style={{ backgroundColor: project.color }}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                      project.status === 'Live' 
                        ? 'bg-green-500/80 text-white' 
                        : 'bg-yellow-500/80 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Platform Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-white flex items-center gap-1">
                      {project.category === 'mobile' ? <Smartphone className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
                      {project.platform}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Project Type Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                      project.type === 'internal' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      project.type === 'freelance' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                      project.type === 'startup' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      project.type === 'ui ux' ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' :
                      project.type === 'data' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                      'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                    }`}>
                      {project.type || 'Project'}
                    </span>
                    <span className="text-xs text-white/50 font-medium">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00FFFF] transition-colors mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#00FFFF]/60 text-sm mb-3 font-medium">
                    {project.client || 'Client'}
                  </p>

                  <p className="text-white/70 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[#2D2D30] text-[#E8B4C8] border border-[#E8B4C8]/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#2D2D30] text-white/50">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-1 mb-4">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E8B4C8]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* View More Link */}
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-sm font-medium text-[#00FFFF] hover:text-[#FF0080] transition-colors group/link"
                  >
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-gradient-to-br from-[#0A0A0F] to-[#1A1A2E] rounded-2xl border border-[#00FFFF]/20 shadow-2xl">
            <div className="overflow-y-auto max-h-[90vh] scrollbar-hide">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-[#FF0080]/40 flex items-center justify-center text-[#FF0080] hover:bg-[#FF0080]/10 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Project image */}
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <div 
                className="absolute inset-0 opacity-60"
                style={{ backgroundColor: selectedProject.color }}
              />
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Project title overlay */}
              <div className="absolute bottom-6 left-6">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <div className="flex items-center gap-4 text-sm text-white/80">
                  <span className="flex items-center gap-1">
                    {selectedProject.category === 'mobile' ? <Smartphone className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
                    {selectedProject.platform}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedProject.year}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    selectedProject.status === 'Live' 
                      ? 'bg-green-500/80 text-white' 
                      : 'bg-yellow-500/80 text-white'
                  }`}>
                    {selectedProject.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Project content */}
            <div className="p-8 space-y-6">
              {/* Project Info Cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 rounded-lg bg-black/20 border border-[#00FFFF]/20">
                  <div className="text-[#00FFFF] font-bold text-lg">{selectedProject.type ? selectedProject.type.toUpperCase() : 'PROJECT'}</div>
                  <div className="text-white/60 text-sm">Project Type</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-black/20 border border-[#FF0080]/20">
                  <div className="text-[#FF0080] font-bold text-lg">{selectedProject.client || 'Client'}</div>
                  <div className="text-white/60 text-sm">Client</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-black/20 border border-[#8A2BE2]/20">
                  <div className="text-[#8A2BE2] font-bold text-lg">{selectedProject.platform}</div>
                  <div className="text-white/60 text-sm">Platform</div>
                </div>
              </div>
              
              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-[#00FFFF] mb-3 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Project Overview
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-bold text-[#FF0080] mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#00FFFF]/20 to-[#FF0080]/20 border border-[#00FFFF]/30 text-[#00FFFF] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-bold text-[#8A2BE2] mb-3">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-black/20 border border-[#8A2BE2]/20">
                      <div className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>


            </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
