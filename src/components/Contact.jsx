import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_DETAILS } from '../data/resumeData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'warning', null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      newErrors.message = 'Please type your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Since this is a static frontend without backend/email API credentials configured,
    // per prompt instructions: "Implement validation and meaningful feedback. Do not pretend messages have been sent unless a backend or email service is actually configured."
    // We provide an honest message and offer a one-click mailto trigger with pre-filled content.
    setSubmissionStatus('client-verified');
  };

  const handleOpenMailClient = () => {
    const mailtoUrl = `mailto:${PERSONAL_DETAILS.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/70 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Let's Connect
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            "I am interested in entry-level opportunities in the IT industry where I can apply my technical knowledge, learn from experienced professionals and contribute to software development projects."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details & Channels - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                Direct Contact Information
              </h3>

              <div className="space-y-5">
                {/* Email Link */}
                <a 
                  href={`mailto:${PERSONAL_DETAILS.email}`}
                  className="flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      Email Address
                    </span>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white break-all group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {PERSONAL_DETAILS.email}
                    </p>
                    <span className="text-xs text-blue-600 dark:text-blue-400">Click to send direct email &rarr;</span>
                  </div>
                </a>

                {/* Phone Link */}
                <a 
                  href={`tel:${PERSONAL_DETAILS.phone.replace(/\s+/g, '')}`}
                  className="flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      Phone / Mobile
                    </span>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {PERSONAL_DETAILS.phone}
                    </p>
                    <span className="text-xs text-indigo-600 dark:text-indigo-400">Click to dial &rarr;</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start space-x-4 p-3 rounded-xl">
                  <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      Current Location
                    </span>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {PERSONAL_DETAILS.location}
                    </p>
                    <span className="text-xs text-slate-500">Andhra Pradesh, India</span>
                  </div>
                </div>

                {/* GitHub */}
                <a 
                  href={PERSONAL_DETAILS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      GitHub Profile
                    </span>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      github.com/{PERSONAL_DETAILS.githubUsername}
                    </p>
                    <span className="text-xs text-blue-600 dark:text-blue-400">View code repositories &rarr;</span>
                  </div>
                </a>

              </div>
            </div>

            {/* Recruiter note card */}
            <div className="p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold text-blue-900 dark:text-blue-300 block mb-1">
                For HR & Technical Recruiters:
              </span>
              I am available for on-campus & off-campus hiring drives, graduate engineer trainee (GET) roles, and associate system engineering positions. Immediate responses guaranteed via email.
            </div>

          </div>

          {/* Contact Form - 7 cols */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Fill out this form to inquire about employment opportunities or technical evaluations.
            </p>

            {submissionStatus === 'client-verified' ? (
              <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    Message Validated & Ready to Transmit
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-md mx-auto">
                    To maintain strict privacy without third-party form intermediaries, click below to open your preferred email client with your message pre-loaded directly to <strong>{PERSONAL_DETAILS.email}</strong>.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleOpenMailClient}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-sm transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open Email Client & Send</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmissionStatus(null);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    Reset Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800 border transition-all focus:outline-none focus:ring-2 ${
                        errors.name 
                          ? 'border-rose-400 focus:ring-rose-400' 
                          : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500 focus:border-transparent'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-rose-500 text-xs mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. hr@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800 border transition-all focus:outline-none focus:ring-2 ${
                        errors.email 
                          ? 'border-rose-400 focus:ring-rose-400' 
                          : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500 focus:border-transparent'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-rose-500 text-xs mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject / Role Opportunity *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Job Opportunity: Associate Software Engineer"
                    className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800 border transition-all focus:outline-none focus:ring-2 ${
                      errors.subject 
                        ? 'border-rose-400 focus:ring-rose-400' 
                        : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500 focus:border-transparent'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-rose-500 text-xs mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message, interview invitation, or job description details..."
                    className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800 border transition-all focus:outline-none focus:ring-2 ${
                      errors.message 
                        ? 'border-rose-400 focus:ring-rose-400' 
                        : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500 focus:border-transparent'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-rose-500 text-xs mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

