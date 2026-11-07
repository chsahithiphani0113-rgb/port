import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Award,
  CheckCircle2,
  Building
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/resumeData';

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/70 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            Verified academic milestones and educational credentials from school to postgraduate studies.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-blue-200 dark:border-blue-900/60 ml-4 sm:ml-32 md:ml-40 space-y-12">
          {EDUCATION_DATA.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline marker node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#070d19] border-2 border-blue-600 dark:border-blue-400 group-hover:scale-125 group-hover:bg-blue-600 transition-all duration-200"></div>

              {/* Time pill positioned for larger viewports or on top */}
              <div className="sm:absolute sm:-left-36 md:-left-44 top-0.5 sm:text-right mb-2 sm:mb-0">
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/40">
                  {item.duration}
                </span>
              </div>

              {/* Card Container */}
              <div className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {item.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                      {item.degree}
                    </h3>
                  </div>

                  {/* Score Tag */}
                  <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 font-semibold text-xs sm:text-sm">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.scoreType}: {item.score}</span>
                  </div>
                </div>

                {item.specialization && (
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Specialization: <span className="font-semibold text-slate-900 dark:text-white">{item.specialization}</span>
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center space-x-1.5 font-medium text-slate-800 dark:text-slate-200">
                    <Building className="w-4 h-4 text-slate-400" />
                    <span>{item.institution}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>

                  <div className="flex items-center space-x-1 text-slate-500 ml-auto">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                    <span className="capitalize">{item.status}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

