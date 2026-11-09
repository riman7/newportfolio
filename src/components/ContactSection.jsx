import React, { useState } from 'react';
import { Mail, Phone, MapPin, Download, Copy, Check, ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Custom icons with authentic SVG paths
const XIcon = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyText = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${personalInfo.emails[0]}?subject=${encodeURIComponent('Contact from ' + formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;
    window.location.href = mailto;
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: personalInfo.socials.linkedin,
      brandColor: '#0A66C2',
      renderIcon: () => <Linkedin className="w-5 h-5 text-[#0A66C2]" />,
      borderHover: 'hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10'
    },
    {
      name: 'GitHub',
      url: personalInfo.socials.github,
      brandColor: '#f0f6fc',
      renderIcon: () => <Github className="w-5 h-5 text-white" />,
      borderHover: 'hover:border-white/50 hover:bg-white/10'
    },
    {
      name: 'X (Twitter)',
      url: personalInfo.socials.x,
      brandColor: '#ffffff',
      renderIcon: () => <XIcon className="w-5 h-5 text-white" />,
      borderHover: 'hover:border-white/50 hover:bg-white/10'
    },
    {
      name: 'Facebook',
      url: personalInfo.socials.facebook,
      brandColor: '#1877F2',
      renderIcon: () => <FacebookIcon className="w-5 h-5 text-[#1877F2]" />,
      borderHover: 'hover:border-[#1877F2]/60 hover:bg-[#1877F2]/10'
    },
    {
      name: 'Instagram',
      url: personalInfo.socials.instagram,
      brandColor: '#E1306C',
      renderIcon: () => <InstagramIcon className="w-5 h-5 text-[#E1306C]" />,
      borderHover: 'hover:border-[#E1306C]/60 hover:bg-[#E1306C]/10'
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct coordinates & Social Buttons (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Let's Talk
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-xl">
                Feel free to reach out for software collaborations, internships, or questions about my projects.
              </p>
            </div>

            {/* Direct Details Card / Modern Table Design */}
            <div className="rounded-2xl bg-gray-950/70  divide-y divide-gray-855 overflow-hidden backdrop-blur-sm shadow-xl">
              
              {/* Phone */}
              <div className="group p-4 sm:p-5 flex items-center justify-between hover:bg-gray-900/40 transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-8 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-cyan-400 shrink-0 group-hover:border-cyan-500/40 transition-colors">
                    <Phone className="w-4 h-3" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                      Phone
                    </span>
                    <a 
                      href={`tel:${personalInfo.phone}`} 
                      className="text-base sm:text-[17px] font-medium text-white/85 hover:text-cyan-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button 
                  onClick={() => copyText(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg hover:bg-gray-850 text-gray-400 hover:text-white transition-colors border border-transparent hover:border-gray-800"
                  title="Copy phone"
                  aria-label="Copy phone"
                >
                  {copiedKey === 'phone' ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Combined Email Row */}
              <div className="group p-4 sm:p-5 flex items-start justify-between hover:bg-gray-900/40 transition-colors gap-4">
                <div className="flex items-start gap-3.5 min-w-0 flex-1">
                  <div className="w-9 h-9 rounded-xl bg-gray-900 flex items-center justify-center text-cyan-400 shrink-0 group-hover:border-cyan-500/40 transition-colors mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                      Email Addresses
                    </span>

                    {/* Primary Email */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <span className="text-[11px] text-gray-400 block">Primary</span>
                        <a 
                          href={`mailto:${personalInfo.emails[0]}`} 
                          className="text-base sm:text-[17px] font-medium text-white/85 hover:text-cyan-400 transition-colors truncate block"
                        >
                          {personalInfo.emails[0]}
                        </a>
                      </div>
                      <button 
                        onClick={() => copyText(personalInfo.emails[0], 'email-0')}
                        className="p-1.5 rounded-lg hover:bg-gray-850 text-gray-400 hover:text-white transition-colors shrink-0 border border-transparent hover:border-gray-800"
                        title="Copy primary email"
                        aria-label="Copy primary email"
                      >
                        {copiedKey === 'email-0' ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Secondary Email */}
                    <div className="flex items-center justify-between gap-2 pt-1 border-t border-gray-900">
                      <div className="min-w-0">
                        <span className="text-[11px] text-gray-400 block">Secondary</span>
                        <a 
                          href={`mailto:${personalInfo.emails[1]}`} 
                          className="text-base sm:text-[17px] font-medium text-white/85 hover:text-cyan-400 transition-colors truncate block"
                        >
                          {personalInfo.emails[1]}
                        </a>
                      </div>
                      <button 
                        onClick={() => copyText(personalInfo.emails[1], 'email-1')}
                        className="p-1.5 rounded-lg hover:bg-gray-850 text-gray-400 hover:text-white transition-colors shrink-0 border border-transparent hover:border-gray-800"
                        title="Copy secondary email"
                        aria-label="Copy secondary email"
                      >
                        {copiedKey === 'email-1' ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>

                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="group p-4 sm:p-5 flex items-center justify-between hover:bg-gray-900/40 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-cyan-400 shrink-0 group-hover:border-cyan-500/40 transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                      Location
                    </span>
                    <span className="text-base sm:text-[17px] text-white/85 font-medium">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Media Link Buttons with Original Brand Colors */}
            <div className="space-y-3 pt-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-gray-400 block">
                Social Profiles
              </span>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gray-900/80 border border-gray-800 text-sm font-medium text-gray-200 transition-all ${social.borderHover}`}
                  >
                    {social.renderIcon()}
                    <span>{social.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
                  </a>
                ))}
              </div>
            </div>

            {/* Resume button */}
            <div className="pt-2">
              <a
                href={personalInfo.cvPath}
                download="Riman_Maharjan_CV.pdf"
                className="inline-flex items-center gap-3 text-base text-gray-200 hover:text-white/85 px-6 py-3.5 rounded-xl border border-gray-800 hover:border-cyan-400/80 transition-colors font-semibold"
              >
                <Download className="w-5 h-5 text-cyan-400" />
                <span>Download Curriculum Vitae (PDF)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct message form (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-gray-900/80 border border-gray-800 text-base text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-gray-900/80 border border-gray-800 text-base text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Message</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-gray-900/80 border border-gray-800 text-base text-white focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-gray-950 text-base font-bold transition-colors shadow-sm"
              >
                <span>Send Message</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
