import React from 'react';
import { 
  GraduationCap, 
  Award, 
  FileCode2, 
  Shield, 
  Target,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { PERSONAL_DETAILS, QUICK_STATS } from '../data/resumeData';

export default function About() {
  const statIcons = [
    <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    <FileCode2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400" />
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/60 dark:bg-[#070d19]/60 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/70 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            An overview of my educational trajectory, technical foundation, and career aspirations.
          </p>
        </div>

        {/* 4 Information Highlight Cards requested */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {QUICK_STATS.map((item, index) => (
            <div 
              key={item.value} 
              className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-xl p-5 shadow-xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                  {item.label}
                </span>
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                  {statIcons[index]}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.value}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {item.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Structured About Narrative & Career Objective */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative - 7 Cols */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center space-x-2">
              <span>Academic & Technical Profile</span>
            </h3>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {PERSONAL_DETAILS.aboutText.map((paragraph, idx) => (
                <p key={idx}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800">
                Primary Goal: Entry-Level Software Engineer / Associate System Engineer
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800">
                Location: Visakhapatnam, Andhra Pradesh
              </span>
            </div>
          </div>

          {/* Career Objective Card - 5 Cols */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center space-x-2 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Target className="w-4 h-4" />
                <span>Career Objective (Resume)</span>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-blue-50/90 italic">
                "{PERSONAL_DETAILS.careerObjective}"
              </p>

              <div className="mt-6 pt-4 border-t border-blue-800/60 flex items-center justify-between text-xs text-blue-200">
                <span>Directly from Official Resume</span>
                <span className="font-semibold text-white">Chaganti Sahithi Phani</span>
              </div>
            </div>

            {/* Language proficiency info card */}
            <div className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-3">
                Languages Known
              </h4>
              <div className="flex items-center space-x-3">
                {PERSONAL_DETAILS.languagesSpoken.map((lang) => (
                  <span 
                    key={lang}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

