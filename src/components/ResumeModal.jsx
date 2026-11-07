import React, { useRef } from 'react';
import { 
  FileDown, 
  Printer, 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Download,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { 
  PERSONAL_DETAILS, 
  EDUCATION_DATA, 
  SKILL_CATEGORIES, 
  PROJECTS_DATA, 
  CERTIFICATIONS_DATA, 
  ACHIEVEMENTS_DATA 
} from '../data/resumeData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Attempt download of static PDF if present in public folder, or trigger clean print-to-PDF
    const link = document.createElement('a');
    link.href = '/Chaganti_Sahithi_Phani_Resume.pdf';
    link.download = 'Chaganti_Sahithi_Phani_Resume.pdf';
    link.target = '_blank';
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      {/* Container Dialog */}
      <div className="bg-slate-100 dark:bg-slate-900 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-slate-300 dark:border-slate-700 flex flex-col max-h-[92vh]">
        
        {/* Top Action Header Bar */}
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-3.5 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
              Official Resume Preview &bull; {PERSONAL_DETAILS.fullName}
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            {/* Direct Download Button */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
              title="Download PDF directly"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </button>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
              title="Print or Save to PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body - Formatted identically to Anubhav Singh / Academic LaTeX Resume style */}
        <div className="overflow-y-auto p-4 sm:p-8 bg-slate-200/60 dark:bg-slate-950/80 flex justify-center">
          
          {/* Printable Sheet */}
          <div 
            id="printable-resume" 
            className="bg-white text-slate-900 shadow-xl rounded-sm w-full max-w-[800px] p-6 sm:p-10 font-serif leading-normal select-text text-[13px] border border-slate-300"
            style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
          >
            
            {/* Header: Name and contact */}
            <div className="border-b border-slate-300 pb-3 mb-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-wide uppercase text-black">
                  CHAGANTI SAHITHI PHANI
                </h1>
                <div className="text-right text-xs mt-1 sm:mt-0 font-sans text-slate-700 space-y-0.5">
                  <p>Email: <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-blue-700 underline">{PERSONAL_DETAILS.email}</a></p>
                  <p>Mobile: {PERSONAL_DETAILS.phone}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 font-sans mt-1 pt-1">
                <p>Github: <a href={PERSONAL_DETAILS.github} target="_blank" rel="noreferrer" className="text-blue-700 underline">github.com/{PERSONAL_DETAILS.githubUsername}</a></p>
                <p>{PERSONAL_DETAILS.location}</p>
              </div>
            </div>

            {/* Career Objective */}
            <section className="mb-4">
              <h2 className="text-xs uppercase font-bold tracking-wider text-black border-b border-black pb-0.5 mb-1.5 font-sans">
                Career Objective
              </h2>
              <p className="text-justify text-xs text-slate-800 leading-relaxed font-sans">
                {PERSONAL_DETAILS.careerObjective}
              </p>
            </section>

            {/* Education */}
            <section className="mb-4">
              <h2 className="text-xs uppercase font-bold tracking-wider text-black border-b border-black pb-0.5 mb-2 font-sans">
                Education
              </h2>
              <div className="space-y-2.5 font-sans text-xs">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>• {edu.institution}</span>
                      <span className="font-normal text-slate-600 italic text-[11px]">{edu.location}</span>
                    </div>
                    <div className="flex justify-between items-baseline text-slate-700 pl-3">
                      <span className="italic">
                        {edu.degree}
                        {edu.specialization ? ` – ${edu.specialization}` : ''}
                        {edu.score ? `; ${edu.scoreType}: ${edu.score}` : ''}
                      </span>
                      <span className="text-[11px] font-medium text-slate-600">{edu.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Summary */}
            <section className="mb-4">
              <h2 className="text-xs uppercase font-bold tracking-wider text-black border-b border-black pb-0.5 mb-2 font-sans">
                Skills Summary
              </h2>
              <ul className="space-y-1 font-sans text-xs text-slate-800 pl-3">
                <li>
                  <span className="font-bold">• Programming Languages:</span> Python (Basics), Java (Basics), C (Basics)
                </li>
                <li>
                  <span className="font-bold">• Web Technologies:</span> HTML5 (Basics), CSS3 (Basics)
                </li>
                <li>
                  <span className="font-bold">• Database:</span> SQL (Basics), DBMS (Basics)
                </li>
                <li>
                  <span className="font-bold">• Core Computer Science:</span> Data Structures &amp; Algorithms (Basics), Object-Oriented Programming (Basics), Operating Systems (Basics)
                </li>
                <li>
                  <span className="font-bold">• Microsoft Office:</span> MS Office (Basics), MS Word (Basics), MS Excel (Basics), MS PowerPoint (Basics)
                </li>
              </ul>
            </section>

            {/* Projects */}
            <section className="mb-4">
              <h2 className="text-xs uppercase font-bold tracking-wider text-black border-b border-black pb-0.5 mb-2 font-sans">
                Projects
              </h2>
              <div className="space-y-2 font-sans text-xs pl-3">
                <div>
                  <p className="text-slate-800 leading-relaxed">
                    <span className="font-bold">• {PROJECTS_DATA[0].title}:</span> {PROJECTS_DATA[0].description}
                  </p>
                  <p className="text-slate-700 pl-3 mt-0.5">
                    <span className="font-semibold">Technologies:</span> {PROJECTS_DATA[0].technologies.join(', ')}
                  </p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className="mb-4">
              <h2 className="text-xs uppercase font-bold tracking-wider text-black border-b border-black pb-0.5 mb-2 font-sans">
                Certifications
              </h2>
              <ul className="space-y-1 font-sans text-xs text-slate-800 pl-3">
                <li>
                  <span className="font-bold">• Python Programming Certification:</span> Certified in Python Programming.
                </li>
                <li>
                  <span className="font-bold">• AWS Certificate:</span> AWS Certification.
                </li>
                <li>
                  <span className="font-bold">• MS Office Certificates:</span> Microsoft Office-related certifications.
                </li>
              </ul>
            </section>

            {/* Achievements */}
            <section className="mb-4">
              <h2 className="text-xs uppercase font-bold tracking-wider text-black border-b border-black pb-0.5 mb-2 font-sans">
                Achievements
              </h2>
              <ul className="space-y-1 font-sans text-xs text-slate-800 pl-3">
                <li>
                  <span className="font-bold">• NCC 'C' Certificate Holder.</span>
                </li>
              </ul>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-xs uppercase font-bold tracking-wider text-black border-b border-black pb-0.5 mb-1.5 font-sans">
                Languages
              </h2>
              <p className="font-sans text-xs text-slate-800 pl-3">
                English, Telugu
              </p>
            </section>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Single Source of Truth: Resume Verified</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold transition-colors"
          >
            Close
          </button>
        </div>

      </div>

    </div>
  );
}

