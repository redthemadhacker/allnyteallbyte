import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Copy, Mail, Phone, ExternalLink, X } from 'lucide-react';

interface IntakePortalProps {
  initialService?: string;
  initialMessage?: string;
  initialBudget?: number;
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const IntakePortal: React.FC<IntakePortalProps> = ({
  initialService,
  initialMessage,
  initialBudget,
  isOpenModal = false,
  onCloseModal,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || 'WEB_DEV');
  const [message, setMessage] = useState(initialMessage || '');
  const [budget, setBudget] = useState(initialBudget ? `$${initialBudget}` : '');

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) setService(initialService);
    if (initialMessage) setMessage(initialMessage);
    if (initialBudget) setBudget(`$${initialBudget}`);
  }, [initialService, initialMessage, initialBudget]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone || 'Not provided');
    formData.append('service_requested', service);
    formData.append('budget_scope', budget || 'Standard rate');
    formData.append('message', message);
    formData.append('_subject', `New Project Request [${service}] from ${name}`);

    try {
      const response = await fetch('https://formspree.io/f/xppalepv', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setErrorMessage(data.errors.map((err: any) => err.message).join(', '));
        } else {
          setErrorMessage('Transmission issue. Please submit directly via email or phone.');
        }
      }
    } catch (err: any) {
      // Provide graceful fallback
      setErrorMessage('Network connection error. Use direct email to redthemadhacker@gmail.com.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCopySummary = () => {
    const summary = `ALL NYTE ALL BYTE REQUEST\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDirective: ${service}\nBudget: ${budget}\nDetails: ${message}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const content = (
    <div className="bg-[#0a0a0f] border border-[#ff1a35]/60 rounded-xl overflow-hidden crimson-glow max-w-2xl mx-auto text-left relative">
      
      {/* OS Titlebar */}
      <div className="bg-[#12121c] border-b border-[#ff1a35]/30 px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff1a35]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff1a35]/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff1a35]/20" />
          </div>
          <span className="font-mono-code text-xs font-semibold text-neutral-200 tracking-wider">
            INTAKE_PORTAL // ALL_NYTE_ALL_BYTE
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono-code text-emerald-400 font-semibold">[SECURE_CHANNEL]</span>
          {isOpenModal && onCloseModal && (
            <button
              onClick={onCloseModal}
              className="text-neutral-400 hover:text-white p-1 rounded"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {submitted ? (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-bold text-2xl text-white">
                REQUEST TRANSMITTED
              </h3>
              <p className="text-neutral-300 text-sm max-w-md mx-auto font-sans leading-relaxed">
                Transmission verified. Your project brief has been logged into the All Nyte All Byte dispatch queue. 
                Expect direct confirmation within 24 hours.
              </p>
            </div>

            <div className="bg-[#07070b] border border-neutral-800 p-4 rounded-lg text-xs font-mono-code text-neutral-400 text-left max-w-md mx-auto space-y-1">
              <div>&gt; DISPATCH_STATUS: LOGGED</div>
              <div>&gt; DIRECTIVE: {service}</div>
              <div>&gt; CONTACT_TARGET: {email}</div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  if (isOpenModal && onCloseModal) onCloseModal();
                }}
                className="px-5 py-2.5 text-xs font-mono-code uppercase tracking-wider text-white bg-[#ff1a35] hover:bg-[#d9122c] rounded transition-all cursor-pointer"
              >
                Return To Studio
              </button>
              <a
                href={`mailto:redthemadhacker@gmail.com?subject=Follow-up:%20${encodeURIComponent(service)}&body=Hey%20Amari,%0A%0AFollowing%20up%20on%20my%20All%20Nyte%20All%20Byte%20submission.`}
                className="px-5 py-2.5 text-xs font-mono-code uppercase tracking-wider text-neutral-300 hover:text-white bg-[#14141d] border border-neutral-700 rounded transition-all flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Direct Email Copy</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                Commission a Build or Security Audit
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1 font-sans">
                Fill in the technical brief below. Specs transmit directly to the studio workbench.
              </p>
            </div>

            {errorMessage && (
              <div className="bg-red-950/40 border border-[#ff1a35] p-3 rounded text-xs text-red-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#ff1a35] shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-mono-code text-neutral-300 mb-1.5">
                  Full Name / Handle <span className="text-[#ff1a35]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Vance"
                  className="w-full bg-[#111119] border border-neutral-800 focus:border-[#ff1a35] focus:outline-none text-white text-xs font-sans px-3.5 py-2.5 rounded transition-colors placeholder:text-neutral-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono-code text-neutral-300 mb-1.5">
                  Email Address <span className="text-[#ff1a35]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@domain.com"
                  className="w-full bg-[#111119] border border-neutral-800 focus:border-[#ff1a35] focus:outline-none text-white text-xs font-sans px-3.5 py-2.5 rounded transition-colors placeholder:text-neutral-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Requested Directive */}
              <div>
                <label className="block text-xs font-mono-code text-neutral-300 mb-1.5">
                  Service Directive <span className="text-[#ff1a35]">*</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#111119] border border-neutral-800 focus:border-[#ff1a35] focus:outline-none text-white text-xs font-sans px-3 py-2.5 rounded transition-colors cursor-pointer"
                >
                  <option value="WEB_DEV">Web Dev ($200 - $250)</option>
                  <option value="CYBER_SEC">Cyber Sec Hardening & Audit ($100)</option>
                  <option value="TECH_SUP">Infrastructure & Tech Support ($100)</option>
                  <option value="CAREER_ATS">Career / ATS Resume Architecture ($45)</option>
                  <option value="CUSTOM_BUNDLE">Custom Engineering Bundle / Consultation</option>
                </select>
              </div>

              {/* Phone or Alternate Contact */}
              <div>
                <label className="block text-xs font-mono-code text-neutral-300 mb-1.5">
                  Phone (Optional for SMS updates)
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 000-0000"
                  className="w-full bg-[#111119] border border-neutral-800 focus:border-[#ff1a35] focus:outline-none text-white text-xs font-sans px-3.5 py-2.5 rounded transition-colors placeholder:text-neutral-600"
                />
              </div>
            </div>

            {/* Scope / Budget indicator */}
            <div>
              <label className="block text-xs font-mono-code text-neutral-300 mb-1.5">
                Target Budget or Selected Package
              </label>
              <input
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="e.g. $225 (Standard Web Dev) or Custom"
                className="w-full bg-[#111119] border border-neutral-800 focus:border-[#ff1a35] focus:outline-none text-white text-xs font-sans px-3.5 py-2.5 rounded transition-colors placeholder:text-neutral-600"
              />
            </div>

            {/* Project Specifications */}
            <div>
              <label className="block text-xs font-mono-code text-neutral-300 mb-1.5">
                Project Specifications & Requirements <span className="text-[#ff1a35]">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your project, website goals, security requirements, or resume target roles..."
                className="w-full bg-[#111119] border border-neutral-800 focus:border-[#ff1a35] focus:outline-none text-white text-xs font-sans p-3 rounded transition-colors placeholder:text-neutral-600 resize-y"
              />
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleCopySummary}
                className="text-xs font-mono-code text-neutral-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Summary Copied!' : 'Copy Brief Details'}</span>
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto px-6 py-3 text-xs font-mono-code font-bold uppercase tracking-wider text-white bg-[#ff1a35] hover:bg-[#d9122c] transition-all rounded flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,26,53,0.35)] disabled:opacity-50 cursor-pointer"
              >
                <span>{submitting ? 'Transmitting Data...' : 'Transmit Project Brief ->'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>

      {/* OS Footer */}
      <div className="bg-[#07070a] border-t border-neutral-800/80 px-6 py-2.5 flex items-center justify-between text-[11px] font-mono-code text-neutral-400">
        <div>SYS_READY // 3AM_EDITION</div>
        <div>MARBUSINESS98@GMAIL.COM</div>
      </div>

    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
        <div className="w-full max-w-2xl my-8">{content}</div>
      </div>
    );
  }

  return (
    <section id="intake" className="py-20 md:py-28 bg-[#060608] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#ff1a35] uppercase tracking-wider mb-2">
            <span>04. Transmission Portal</span>
            <span aria-hidden="true" className="text-neutral-600">/</span>
            <span className="text-neutral-400">Direct Intake</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Initiate Your Project Transmission
          </h2>
          <p className="mt-3 text-neutral-400 text-base font-sans">
            Ready to lock in a build, schedule a security audit, or overhaul your career portfolio? 
            Dispatch your specifications below.
          </p>
        </div>
        {content}
      </div>
    </section>
  );
};
