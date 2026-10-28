import React, { useState, useEffect } from 'react';
import { X, Mail, Check, Copy, Send, Download, MapPin, Calendar, Briefcase, ExternalLink } from 'lucide-react';
import { ENGINEER_PROFILE } from '../data/portfolioData.ts';
import { Language } from '../types/portfolio.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang?: Language;
}

export const RecruiterContactModal: React.FC<Props> = ({ isOpen, onClose, lang = 'en' }) => {
  const [copied, setCopied] = useState(false);
  const t = TRANSLATIONS[lang].contact;
  const [subject, setSubject] = useState(t.defaultSubject);
  const [message, setMessage] = useState(t.defaultMessage);

  useEffect(() => {
    setSubject(t.defaultSubject);
    setMessage(t.defaultMessage);
  }, [lang, t]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(ENGINEER_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailtoUrl = `mailto:${ENGINEER_PROFILE.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sky-500/10 text-sky-400 rounded-lg border border-sky-500/20">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Recruiter & Technical Hiring Inquiries
              </h3>
              <p className="text-xs text-slate-400">
                Direct communication channel with {ENGINEER_PROFILE.name}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 overflow-y-auto max-h-[75vh]">
          {/* Quick Contact Bar */}
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase">Direct Email Address</div>
              <div className="text-sm sm:text-base font-bold font-mono text-sky-400">
                {ENGINEER_PROFILE.email}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Email'}</span>
              </button>
              <a
                href={mailtoUrl}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open Mail Client</span>
              </a>
            </div>
          </div>

          {/* Hiring Status Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800">
              <div className="text-slate-400 flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5 text-sky-400" />
                <span>Target Roles</span>
              </div>
              <div className="font-semibold text-white mt-1">
                Process Design Engineer / Simulation Specialist
              </div>
            </div>
            <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800">
              <div className="text-slate-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Availability</span>
              </div>
              <div className="font-semibold text-white mt-1">
                Global Relocation · Onsite / Hybrid / Remote
              </div>
            </div>
            <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800">
              <div className="text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                <span>Notice Period</span>
              </div>
              <div className="font-semibold text-white mt-1">
                Immediate to 30 Days Available
              </div>
            </div>
          </div>

          {/* Inquiry Customizer */}
          <div className="space-y-3 pt-2">
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white font-mono"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">
                Message Preview
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Print / Save as PDF</span>
          </button>

          <a
            href={mailtoUrl}
            className="flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send Email Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};
