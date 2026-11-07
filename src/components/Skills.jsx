import React from 'react';
import { 
  Code2, 
  FileCode2, 
  Terminal, 
  Globe, 
  Layout, 
  Database, 
  HardDrive, 
  Cpu, 
  Boxes, 
  Server, 
  FileSpreadsheet, 
  FileText, 
  Table, 
  Presentation,
  CheckCircle,
  Wrench
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/resumeData';

// Map icon string names to actual Lucide components
const iconMap = {
  Code2,
  FileCode2,
  Terminal,
  Globe,
  Layout,
  Database,
  HardDrive,
  Cpu,
  Boxes,
  Server,
  FileSpreadsheet,
  FileText,
  Table,
  Presentation
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50/60 dark:bg-[#070d19]/60 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/70 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Skills Summary
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            Organized strictly into the categories declared on my resume with honest, transparent proficiency levels.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((catGroup) => (
            <div 
              key={catGroup.category} 
              className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                    {catGroup.category}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                    {catGroup.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                  {catGroup.description}
                </p>

                {/* Skills list */}
                <div className="space-y-3">
                  {catGroup.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <div 
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 hover:bg-blue-50/50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-1.5 rounded-md bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-2xs">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {skill.name}
                          </span>
                        </div>

                        {/* Explicit text badge for level - NO fake percentages */}
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-xs font-medium bg-blue-100/70 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                          <CheckCircle className="w-3 h-3 text-blue-500" />
                          <span>{skill.level}</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom tag note */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 dark:text-slate-500">
                Verified from academic curriculum & self-study
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

