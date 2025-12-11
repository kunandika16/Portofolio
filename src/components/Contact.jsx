import React, { useState } from 'react';
import { personalInfo } from '../data/mockData';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#2D2D30] via-[#1A1A1D] to-[#0F0F10] relative">
      {/* Final section elements */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute top-40 left-20 w-24 h-24 border border-[#00D9FF]/20 rotate-45" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}} />
        <div className="absolute bottom-40 right-20 w-32 h-32 border border-[#E8B4C8]/15 rounded-full" />
      </div>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] mx-auto rounded-full mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              {/* Email Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="relative bg-[#1A1A1D] rounded-2xl p-6 border border-[#2D2D30] hover:border-[#E8B4C8] transition-all duration-300 flex items-center gap-4 block"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#E8B4C8] to-[#FF6B9D] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-[#E8B4C8] text-sm">{personalInfo.email}</p>
                  </div>
                </a>
              </div>

              {/* Location Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6B9D] to-[#00D9FF] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
                <div className="relative bg-[#1A1A1D] rounded-2xl p-6 border border-[#2D2D30] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF6B9D] to-[#00D9FF] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-[#E8B4C8] text-sm">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00D9FF] to-[#E8B4C8] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
                <div className="relative bg-[#1A1A1D] rounded-2xl p-6 border border-[#2D2D30]">
                  <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
                  <div className="flex gap-4">
                    <a
                      href={`https://${personalInfo.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#E8B4C8] to-[#FF6B9D] flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href={`https://${personalInfo.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF6B9D] to-[#00D9FF] flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#E8B4C8] via-[#FF6B9D] to-[#00D9FF] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                <form 
                  onSubmit={handleSubmit}
                  className="relative bg-[#1A1A1D] rounded-2xl p-8 border border-[#2D2D30]"
                >
                  <div className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#2D2D30] border border-[#3D3D42] text-white placeholder-white/40 focus:outline-none focus:border-[#E8B4C8] focus:ring-2 focus:ring-[#E8B4C8]/20 transition-all"
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#2D2D30] border border-[#3D3D42] text-white placeholder-white/40 focus:outline-none focus:border-[#E8B4C8] focus:ring-2 focus:ring-[#E8B4C8]/20 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-white font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#2D2D30] border border-[#3D3D42] text-white placeholder-white/40 focus:outline-none focus:border-[#E8B4C8] focus:ring-2 focus:ring-[#E8B4C8]/20 transition-all"
                        placeholder="What's this about?"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-white font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 rounded-lg bg-[#2D2D30] border border-[#3D3D42] text-white placeholder-white/40 focus:outline-none focus:border-[#E8B4C8] focus:ring-2 focus:ring-[#E8B4C8]/20 transition-all resize-none"
                        placeholder="Tell me about your project or idea..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] text-white font-semibold hover:shadow-lg hover:shadow-[#FF6B9D]/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
