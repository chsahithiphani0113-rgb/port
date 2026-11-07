import React from 'react';
import { 
  FolderGit2, 
  ScanFace, 
  Database, 
  ShieldCheck, 
  Cpu, 
  ExternalLink,
  Code,
  Layers,
  Info
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/resumeData';

export default function Projects() {
  const project = PROJECTS_DATA[0];

  return (
    <section id="projects" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/70 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Implementation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Projects Showcase
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            Verified academic project focusing on smart surveillance, face recognition, and database verification.
          </p>
        </div>

        {/* Featured Project Card */}
        <div className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Thumbnail / Architectural Illustration */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 flex flex-col justify-between relative overflow-hidden text-white border-b lg:border-b-0 lg:border-r border-slate-800">
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    <ScanFace className="w-3.5 h-3.5 text-blue-400" />
                    <span>Computer Vision Application</span>
                  </span>
                  <span className="font-mono text-xs text-slate-400">Project #01</span>
                </div>

                {/* Conceptual UI Preview Graphic */}
                <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 shadow-inner">
                  <div className="flex items-center space-x-2 pb-3 mb-4 border-b border-slate-800/80">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                    <span className="text-[11px] font-mono text-slate-400 ml-2">face_recognition_system.py</span>
                  </div>

                  {/* Recognition Graphic */}
                  <div className="relative aspect-[16/10] bg-slate-900 rounded-lg flex flex-col items-center justify-center p-4 border border-dashed border-slate-700">
                    <div className="relative p-3 rounded-full border-2 border-blue-400/80 mb-2">
                      <ScanFace className="w-10 h-10 text-blue-400" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                    </div>
                    <p className="text-xs font-mono text-slate-300 text-center">Face Vector Extracted</p>
                    <p className="text-[10px] font-mono text-emerald-400 mt-1">Status: Match Verified [98.4%]</p>
                  </div>
                </div>
              </div>

              {/* Bottom technology highlight */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center space-x-1.5">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span>Admin Dashboard Included</span>
                </div>
                <span className="font-mono text-blue-300 font-semibold">Python</span>
              </div>
            </div>

            {/* Project Details Content */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400">
                    Featured Project
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                {/* Resume verbatim description */}
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Aspects & Modules */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">
                    System Architecture & Key Components
                  </h4>
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0"></div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Tags */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-2">
                    Technologies Used (As per Resume)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800"
                      >
                        <Code className="w-3.5 h-3.5" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action / Disclaimer Bar */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                  <Info className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>{project.note}</span>
                </div>

                {/* GitHub link placeholder */}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-sm font-medium transition-colors"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-slate-500 text-xs font-medium cursor-not-allowed border border-slate-200 dark:border-slate-700/60"
                  >
                    <span>Repo Private / In Academic Review</span>
                  </button>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

