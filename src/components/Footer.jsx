import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Heart } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_DETAILS } from '../data/resumeData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Identity info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                {PERSONAL_DETAILS.initials}
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                {PERSONAL_DETAILS.fullName}
              </span>
            </div>
            <p className="text-xs text-blue-400 font-medium">
              MCA Student &bull; Aspiring Software Developer &bull; Associate System Engineer
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Based in Visakhapatnam, India. Open to full-time entry-level IT roles, software trainee opportunities, and technical developer roles.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Back to top */}
          <div className="md:col-span-3 flex flex-col md:items-end space-y-4">
            <div className="flex items-center space-x-3">
              <a
                href={PERSONAL_DETAILS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PERSONAL_DETAILS.phone.replace(/\s+/g, '')}`}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              Visakhapatnam, Andhra Pradesh, India
            </p>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>
            &copy; {currentYear} {PERSONAL_DETAILS.fullName}. All rights reserved.
          </p>
          <p className="flex items-center space-x-1">
            <span>Designed &amp; Developed by Sahithi.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

