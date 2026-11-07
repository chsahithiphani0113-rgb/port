import React, { useState } from 'react';
import { 
  Award, 
  Code2, 
  Cloud, 
  FileSpreadsheet, 
  Shield, 
  CheckCircle2, 
  Upload, 
  Eye, 
  X,
  FileCheck
} from 'lucide-react';
import { CERTIFICATIONS_DATA, ACHIEVEMENTS_DATA } from '../data/resumeData';

const iconMap = {
  Code2,
  Cloud,
  FileSpreadsheet,
  Award
};

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-20 bg-slate-50/60 dark:bg-[#070d19]/60 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/70 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            Formal certifications and credentials documented in my resume.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CERTIFICATIONS_DATA.map((cert) => {
            const IconComp = iconMap[cert.icon] || Award;
            return (
              <div 
                key={cert.id}
                className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      Verified
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                    {cert.domain}
                  </span>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cert.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <span className="text-[11px] text-slate-400">
                    Resume Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Achievement Section: NCC 'C' Certificate Holder */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white border border-slate-800 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shadow-inner">
                <Shield className="w-8 h-8" />
              </div>
            </div>

            <div className="md:col-span-8 text-center md:text-left">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/30 mb-2">
                <span>Key Achievement</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                {ACHIEVEMENTS_DATA[0].title}
              </h3>
              <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                {ACHIEVEMENTS_DATA[0].description}
              </p>
            </div>

            <div className="md:col-span-2 flex justify-center md:justify-end">
              <span className="inline-flex items-center space-x-1 text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-400/30 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>NCC Cadets</span>
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Certificate Detail / Image Upload Placeholder Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {selectedCert.domain}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
              {selectedCert.summary}
            </p>

            {/* Upload / Image slot placeholder as requested */}
            <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-8 text-center flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-800/30">
              <Upload className="w-8 h-8 text-slate-400 mb-2" />
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Certificate Image Slot Ready
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs">
                To attach the scanned certificate scan, simply place the file in the public folder and link it here.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

