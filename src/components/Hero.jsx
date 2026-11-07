import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Terminal,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_DETAILS } from '../data/resumeData';

export default function Hero({ onOpenResumeModal }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);
  const [imageError, setImageError] = useState(false);

  const roles = PERSONAL_DETAILS.roles;

  // Typing effect
  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentFullText.length) {
          // Pause at end before deleting
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(80);
        }
      } else {
        // Backspacing
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        setTypingSpeed(40);
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background subtle mesh grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] opacity-60"></div>
      
      {/* Ambient background glow for dark mode */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Open to Entry-Level Opportunities &bull; MCA 2025–2027</span>
            </div>

            {/* Greeting & Name */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-400">
                Hello, I'm
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {PERSONAL_DETAILS.fullName}
              </h1>
              
              {/* Animated Typing Subheading */}
              <div className="h-9 flex items-center">
                <span className="text-lg sm:text-2xl font-semibold text-blue-600 dark:text-blue-400">
                  {displayedText}
                </span>
                <span className="inline-block w-0.5 h-6 ml-1 bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
              </div>

              {/* Fixed sub-headline */}
              <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 pt-1">
                {PERSONAL_DETAILS.title}
              </p>
            </div>

            {/* Introduction paragraph as specified */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {PERSONAL_DETAILS.heroIntro}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 pt-1">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>{PERSONAL_DETAILS.location}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                <span>Aditya Degree & PG College</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span>Explore My Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <FileDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex items-center space-x-5 pt-3 text-slate-600 dark:text-slate-400">
              <a
                href={PERSONAL_DETAILS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </a>

              <span className="text-slate-300 dark:text-slate-700">&bull;</span>

              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="flex items-center space-x-1.5 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Email Chaganti Sahithi Phani"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">chsahithiphani0113@gmail.com</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Picture / Image Placeholder */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 lg:w-88 group">
              
              {/* Outer decorative card frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>

              <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-3">
                {/* Photo container */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src="/profile.jpg"
                      alt="Chaganti Sahithi Phani"
                      className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    /* Elegant placeholder if /profile.jpg is missing */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                      <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-3xl shadow-lg mb-3">
                        CSP
                      </div>
                      <p className="font-bold text-slate-800 dark:text-slate-100 text-base">CHAGANTI SAHITHI PHANI</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400 mt-1 font-medium">Add profile.jpg in /public</p>
                    </div>
                  )}

                  {/* Corner Accent Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 dark:bg-[#070d19]/90 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-200/70 dark:border-slate-700/70 shadow-sm flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">Sahithi Phani</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">Visakhapatnam, India</p>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                      MCA 2025
                    </span>
                  </div>
                </div>

                {/* Sub-card verification tag */}
                <div className="mt-3 flex items-center justify-between px-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center space-x-1">
                    <UserCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Verified Academic Info</span>
                  </span>
                  <span className="font-mono text-[11px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                    B.Sc. 8.93 CGPA
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
