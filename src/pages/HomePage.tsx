import React from 'react';
import { ArrowRight, Flame, Code, Calculator, Terminal, Shield, Zap, ExternalLink } from 'lucide-react';
import { StudioLogo } from '../components/StudioLogo';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Block */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 cyber-grid border-b border-neutral-900">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#ff1a35]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Value Pitch */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono-code text-neutral-400">
                <span className="text-[#ff1a35] font-semibold">&gt; ALL NYTE ALL BYTE</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span>code // coffee // create</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="text-neutral-300">EST. 2026</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] text-balance">
                BUILT IN THE DARK. <br className="hidden sm:inline" />
                <span className="text-[#ff1a35] crimson-text-glow">SECURED BY DESIGN.</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-sans">
                Welcome to <strong className="text-white font-semibold">All Nyte All Byte</strong>—an independent 
                digital engineering and cybersecurity studio. We craft high-speed web platforms, harden digital systems 
                against intrusions, optimize technical infrastructure, and architect standout developer portfolios. 
                Built for speed, uncompromising reliability, and direct engineer-to-client execution.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('ventures')}
                  className="px-6 py-3.5 text-xs sm:text-sm font-mono-code font-bold uppercase tracking-wider text-white bg-[#ff1a35] hover:bg-[#d9122c] transition-all rounded shadow-[0_0_20px_rgba(255,26,53,0.35)] hover:shadow-[0_0_30px_rgba(255,26,53,0.6)] flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Explore Active Ventures</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 text-xs sm:text-sm font-mono-code font-medium uppercase tracking-wider text-neutral-200 hover:text-white bg-[#101017] hover:bg-[#181824] border border-[#ff1a35]/40 hover:border-[#ff1a35] transition-all rounded flex items-center gap-2 cursor-pointer"
                >
                  <span>Studio Services</span>
                  <span className="text-neutral-500 font-mono-code">($45-$250)</span>
                </button>
              </div>

              {/* Quantitative Rigor */}
              <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="font-mono-code font-bold text-xl sm:text-2xl text-white tabular-nums">
                    24-72<span className="text-[#ff1a35]">h</span>
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">Rapid Turnaround</div>
                </div>
                <div>
                  <div className="font-mono-code font-bold text-xl sm:text-2xl text-white tabular-nums">
                    100<span className="text-[#ff1a35]">%</span>
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">Direct Engineer Access</div>
                </div>
                <div>
                  <div className="font-mono-code font-bold text-xl sm:text-2xl text-white tabular-nums">
                    3<span className="text-[#ff1a35]">AM</span>
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">Late-Night Builds</div>
                </div>
              </div>

            </div>

            {/* Right Emblem Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-[#0a0a0f] border border-[#ff1a35]/50 rounded-xl overflow-hidden crimson-glow p-6 relative">
                
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-[#ff1a35]/30 pb-3 mb-5 text-xs font-mono-code">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff1a35] shadow-[0_0_8px_#ff1a35]" />
                    <span className="text-neutral-300 font-semibold">ALL_NYTE_ALL_BYTE // 2026</span>
                  </div>
                  <span className="text-emerald-400">[ONLINE]</span>
                </div>

                {/* Studio Logo */}
                <div className="relative flex justify-center items-center py-2">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-[#ff1a35] bg-black shadow-[0_0_40px_rgba(255,26,53,0.35)] flex items-center justify-center p-1">
                    <StudioLogo size="100%" />
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-800 text-xs font-mono-code space-y-1.5 text-neutral-400">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">OPERATING_PROTOCOL</span>
                    <span className="text-neutral-200">FULL_STACK // HARDENED</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">ACTIVE_VENTURES</span>
                    <span className="text-[#ff1a35]">PHONIXIA FUND + BETA</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between text-[11px] font-mono-code text-neutral-400 bg-[#06060a] px-3 py-2 rounded border border-neutral-800">
                  <span>root@allnyteallbyte:~#</span>
                  <span className="text-neutral-300">ready for deployment</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Navigation Portal Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#ff1a35] uppercase tracking-wider mb-1">
            <span>&gt; SYSTEM NAVIGATION</span>
            <span aria-hidden="true" className="text-neutral-600">/</span>
            <span className="text-neutral-400">Choose A Dedicated Module</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Explore Studio Sectors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Ventures */}
          <div 
            onClick={() => onNavigate('ventures')}
            className="bg-[#0c0c12] border border-neutral-800 hover:border-[#ff1a35] p-6 rounded-xl crimson-glow cursor-pointer transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#ff1a35]/10 border border-[#ff1a35]/30 text-[#ff1a35] flex items-center justify-center mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono-code text-[#ff1a35] uppercase">Module 01</span>
              <h3 className="font-display font-bold text-xl text-white group-hover:text-[#ff1a35] transition-colors mt-0.5">
                Ventures & Ecosystem
              </h3>
              <p className="text-xs text-neutral-400 mt-2 font-sans leading-relaxed">
                Direct access to Phonixia Fund, live testing on Phonixia Beta, and the developer equipment wishlist.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono-code text-neutral-300 group-hover:text-[#ff1a35]">
              <span>Open Ventures Page</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 2: Services */}
          <div 
            onClick={() => onNavigate('services')}
            className="bg-[#0c0c12] border border-neutral-800 hover:border-[#ff1a35] p-6 rounded-xl crimson-glow cursor-pointer transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#ff1a35]/10 border border-[#ff1a35]/30 text-[#ff1a35] flex items-center justify-center mb-4">
                <Code className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono-code text-[#ff1a35] uppercase">Module 02</span>
              <h3 className="font-display font-bold text-xl text-white group-hover:text-[#ff1a35] transition-colors mt-0.5">
                Byte Lab Services & Rates
              </h3>
              <p className="text-xs text-neutral-400 mt-2 font-sans leading-relaxed">
                Full-stack web builds ($200-$250), cyber audits ($100), network infra ($100), and ATS resume overhauls ($45).
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono-code text-neutral-300 group-hover:text-[#ff1a35]">
              <span>View Full Rate Card</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 3: Scope Estimator */}
          <div 
            onClick={() => onNavigate('estimator')}
            className="bg-[#0c0c12] border border-neutral-800 hover:border-[#ff1a35] p-6 rounded-xl crimson-glow cursor-pointer transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#ff1a35]/10 border border-[#ff1a35]/30 text-[#ff1a35] flex items-center justify-center mb-4">
                <Calculator className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono-code text-[#ff1a35] uppercase">Module 03</span>
              <h3 className="font-display font-bold text-xl text-white group-hover:text-[#ff1a35] transition-colors mt-0.5">
                Interactive Scope Builder
              </h3>
              <p className="text-xs text-neutral-400 mt-2 font-sans leading-relaxed">
                Configure custom project add-ons, view live delivery timelines, and lock in your project budget.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono-code text-neutral-300 group-hover:text-[#ff1a35]">
              <span>Launch Calculator</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

        </div>
      </section>

      {/* Operator System Log & Studio Manifesto */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a0a0f] border border-neutral-800 rounded-xl p-8 crimson-glow">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800 text-xs font-mono-code mb-5">
            <span className="text-[#ff1a35] font-semibold">SYSTEM LOG // THE_OPERATOR</span>
            <span className="text-neutral-500">OPERATIONAL &amp; READY</span>
          </div>
          <div className="space-y-4 text-sm text-neutral-300 font-sans leading-relaxed">
            <p>
              Welcome to <span className="text-[#ff1a35] font-semibold">All Nyte, All Byte</span>. Built in the dark and secured by design, this is an independent digital studio crafted for fast builds, clean code, and ironclad cybersecurity protocols.
            </p>
            <p>
              Whether you need your network locked down, a fresh web application built from the ground up, or a resume overhaul that beats the automated filters—it's handled here with precise execution.
            </p>
            <div className="pt-2 flex items-center justify-between text-xs font-mono-code text-neutral-400">
              <span className="text-[#ff1a35]">root@BYTELAB:~# status: operational and ready for deployment.</span>
              <button
                onClick={() => onNavigate('intake')}
                className="text-white hover:text-[#ff1a35] underline font-semibold cursor-pointer"
              >
                Open Intake Portal -&gt;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
