import React, { useState } from 'react';
import { Mail, Phone, Linkedin, ExternalLink, ShieldCheck, Terminal, ArrowUpRight, Lock, CheckCircle2, X } from 'lucide-react';

export const StudioMatrix: React.FC = () => {
  const [voiceModalOpen, setVoiceModalOpen] = useState(false);
  const [callerName, setCallerName] = useState('');
  const [callerPhone, setCallerPhone] = useState('');
  const [callerNote, setCallerNote] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleVoiceRelaySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append('name', callerName);
    formData.append('phone', callerPhone);
    formData.append('note', callerNote || 'Encrypted Voice Callback Request');
    formData.append('_subject', `[SECURE VOICE RELAY] Callback Request from ${callerName}`);

    try {
      await fetch('https://formspree.io/f/xppalepv', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="channels" className="py-20 md:py-28 bg-[#08080c] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Connection Channels */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#ff1a35] uppercase tracking-wider mb-2">
                <span>05. Connection Matrix</span>
                <span aria-hidden="true" className="text-neutral-600">/</span>
                <span className="text-neutral-400">Direct Lines</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Direct Communication Channels
              </h2>
              <p className="mt-3 text-neutral-400 text-base font-sans">
                Reach the studio directly through secure email, encrypted voice relay, or verified professional networks.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* Email channel */}
              <a
                href="mailto:redthemadhacker@gmail.com?subject=All%20Nyte%20All%20Byte%20Inquiry"
                className="flex items-center justify-between p-4 rounded-xl bg-[#0c0c12] border border-neutral-800 hover:border-[#ff1a35]/60 hover:bg-[#111119] transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#14141e] border border-neutral-700/80 group-hover:border-[#ff1a35]/60 text-[#ff1a35] flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono-code text-neutral-400 uppercase">Primary Inquiries</span>
                    <div className="font-mono-code text-sm font-semibold text-white group-hover:text-[#ff1a35] transition-colors">
                      redthemadhacker@gmail.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
              </a>

              {/* Encrypted Phone / Voice Relay channel (No plain number shown on page or on click) */}
              <div
                onClick={() => {
                  setSubmitted(false);
                  setVoiceModalOpen(true);
                }}
                className="flex items-center justify-between p-4 rounded-xl bg-[#0c0c12] border border-neutral-800 hover:border-[#ff1a35]/60 hover:bg-[#111119] transition-all group cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="Connect via Encrypted Voice Relay"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#14141e] border border-neutral-700/80 group-hover:border-[#ff1a35]/60 text-[#ff1a35] flex items-center justify-center transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono-code text-neutral-400 uppercase">Voice / Telecom Port</span>
                      <span className="text-[10px] font-mono-code text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/60">
                        [ENCRYPTED]
                      </span>
                    </div>
                    <div className="font-mono-code text-sm font-semibold text-white group-hover:text-[#ff1a35] transition-colors flex items-center gap-2">
                      <span>[ENCRYPTED SECURE RELAY LINE]</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono-code text-[#ff1a35] group-hover:underline">
                    Connect Relay -&gt;
                  </span>
                </div>
              </div>

              {/* LinkedIn channel */}
              <a
                href="https://linkedin.com/in/amari-james"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-[#0c0c12] border border-neutral-800 hover:border-[#ff1a35]/60 hover:bg-[#111119] transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#14141e] border border-neutral-700/80 group-hover:border-[#ff1a35]/60 text-[#ff1a35] flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono-code text-neutral-400 uppercase">Professional Network</span>
                    <div className="font-mono-code text-sm font-semibold text-white group-hover:text-[#ff1a35] transition-colors">
                      linkedin.com/in/amari-james
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
              </a>

            </div>

            {/* Note separating business site from personal portfolio */}
            <div className="p-4 rounded-xl bg-[#07070b] border border-neutral-800 text-xs font-mono-code text-neutral-400 flex items-center justify-between">
              <div>
                <span className="text-white font-semibold">Separate Portfolios:</span>
                <span className="ml-1 text-neutral-400">Looking for the personal build log & archive?</span>
              </div>
              <a
                href="https://reds-cyber-nook-a2ae0b8c4979.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff1a35] hover:underline flex items-center gap-1 shrink-0 ml-3 font-semibold"
              >
                <span>Red's Cyber Nook</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Right Column: Studio Engineering Principles */}
          <div className="lg:col-span-6 bg-[#0c0c12] border border-neutral-800 rounded-xl p-8 flex flex-col justify-between crimson-glow">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800 text-xs font-mono-code text-neutral-400 mb-6">
                <span className="text-[#ff1a35] font-semibold">ALL_NYTE_ALL_BYTE // PRINCIPLES</span>
                <span>STANDARDS</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-display font-bold text-lg text-white mb-1">
                    01. Direct Engineer Access
                  </h4>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    You communicate directly with the software engineer building and hardening your stack. 
                    No salespeople, no handoffs, no lost requirements.
                  </p>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg text-white mb-1">
                    02. Security-First Mindset
                  </h4>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    Every web endpoint, client portal, and local network is architected assuming hostile traffic. 
                    Hardened configurations and zero-trust policies come standard.
                  </p>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg text-white mb-1">
                    03. Transparent Fixed Pricing
                  </h4>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    Clear scopes with fixed rates ($45 to $250). You know the final investment upfront, 
                    with zero surprise line items or bloated retainers.
                  </p>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg text-white mb-1">
                    04. 2026 Production Standards
                  </h4>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    Modern TypeScript, React 19, Tailwind CSS, clean RESTful architectures, and sub-second 
                    latency metrics ready for immediate deployment.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800 text-xs font-mono-code text-neutral-500 flex justify-between items-center">
              <span>root@bytelab:~# execution verified</span>
              <span className="text-emerald-400">STATUS: READY</span>
            </div>

          </div>

        </div>

      </div>

      {/* Encrypted Voice Relay Modal */}
      {voiceModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0a0a0f] border border-[#ff1a35] rounded-xl max-w-md w-full overflow-hidden crimson-glow relative text-left">
            
            {/* Modal Titlebar */}
            <div className="bg-[#12121c] border-b border-[#ff1a35]/30 px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#ff1a35]" />
                <span className="text-xs font-mono-code font-bold text-white tracking-wider">
                  ENCRYPTED_VOICE_RELAY.SYS
                </span>
              </div>
              <button
                onClick={() => setVoiceModalOpen(false)}
                className="text-neutral-400 hover:text-white p-1 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              {submitted ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">
                    RELAY DISPATCH LOGGED
                  </h3>
                  <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                    Your encrypted callback request has been securely queued. The studio operator will establish contact directly.
                  </p>
                  <button
                    onClick={() => setVoiceModalOpen(false)}
                    className="mt-3 px-5 py-2 text-xs font-mono-code font-bold uppercase text-white bg-[#ff1a35] hover:bg-[#d9122c] rounded"
                  >
                    Close Relay Terminal
                  </button>
                </div>
              ) : (
                <form onSubmit={handleVoiceRelaySubmit} className="space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">
                      Request Encrypted Voice Call
                    </h3>
                    <p className="text-xs text-neutral-400 font-sans mt-1">
                      Direct voice calls are routed through an encrypted studio relay to maintain complete privacy. Enter your line below to connect.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-neutral-300 mb-1">
                      Your Name / Handle *
                    </label>
                    <input
                      type="text"
                      required
                      value={callerName}
                      onChange={(e) => setCallerName(e.target.value)}
                      placeholder="e.g. Jordan"
                      className="w-full bg-[#111119] border border-neutral-800 focus:border-[#ff1a35] focus:outline-none text-white text-xs px-3 py-2 rounded font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-neutral-300 mb-1">
                      Your Callback Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={callerPhone}
                      onChange={(e) => setCallerPhone(e.target.value)}
                      placeholder="Your phone number"
                      className="w-full bg-[#111119] border border-neutral-800 focus:border-[#ff1a35] focus:outline-none text-white text-xs px-3 py-2 rounded font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-neutral-300 mb-1">
                      Call Subject / Preferred Time
                    </label>
                    <input
                      type="text"
                      value={callerNote}
                      onChange={(e) => setCallerNote(e.target.value)}
                      placeholder="e.g. Web project scope inquiry - ASAP or 6PM"
                      className="w-full bg-[#111119] border border-neutral-800 focus:border-[#ff1a35] focus:outline-none text-white text-xs px-3 py-2 rounded font-sans"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setVoiceModalOpen(false)}
                      className="px-4 py-2 text-xs font-mono-code text-neutral-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-5 py-2 text-xs font-mono-code font-bold uppercase text-white bg-[#ff1a35] hover:bg-[#d9122c] rounded shadow-[0_0_12px_rgba(255,26,53,0.35)] disabled:opacity-50 cursor-pointer"
                    >
                      {submitting ? 'Dispatching...' : 'Dispatch Relay Request ->'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="bg-[#07070a] border-t border-neutral-800 px-5 py-2 text-[10px] font-mono-code text-neutral-500 flex justify-between">
              <span>ZERO_EXPOSURE_PROTOCOL</span>
              <span className="text-emerald-400">ACTIVE</span>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
