import React from 'react';
import { ArrowRight, Terminal, Shield, Zap, Coffee, Code2, ExternalLink } from 'lucide-react';
import { StudioLogo } from './StudioLogo';

interface HeroProps {
  onOpenIntake: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenIntake }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 cyber-grid border-b border-neutral-900">
      {/* Background ambient crimson radial flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#ff1a35]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#ff1a35]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono-code text-neutral-400">
              <span className="text-[#ff1a35] font-semibold">&gt; ALL NYTE ALL BYTE</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>code // coffee // create</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-300">EST. 2026</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] text-balance">
              BUILT IN THE DARK. <br className="hidden sm:inline" />
              <span className="text-[#ff1a35] crimson-text-glow">SECURED BY DESIGN.</span>
            </h1>

            {/* Concrete Value Description */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-sans">
              Welcome to <strong className="text-white font-semibold">All Nyte All Byte</strong>—an independent 
              digital engineering and cybersecurity studio. We craft high-speed web platforms, harden digital systems 
              against intrusions, optimize technical infrastructure, and architect standout developer portfolios. 
              Built for speed, uncompromising reliability, and direct engineer-to-client execution.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#ventures"
                className="px-6 py-3.5 text-xs sm:text-sm font-mono-code font-bold uppercase tracking-wider text-white bg-[#ff1a35] hover:bg-[#d9122c] transition-all rounded shadow-[0_0_20px_rgba(255,26,53,0.35)] hover:shadow-[0_0_30px_rgba(255,26,53,0.6)] flex items-center gap-2.5 cursor-pointer"
              >
                <span>Explore Active Ventures</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenIntake()}
                className="px-6 py-3.5 text-xs sm:text-sm font-mono-code font-medium uppercase tracking-wider text-neutral-200 hover:text-white bg-[#101017] hover:bg-[#181824] border border-[#ff1a35]/40 hover:border-[#ff1a35] transition-all rounded flex items-center gap-2 cursor-pointer"
              >
                <span>Hire For A Service</span>
                <span className="text-neutral-500 font-mono-code">($45-$250)</span>
              </button>
            </div>

            {/* Quantitative Studio Rigor Bar */}
            <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="font-mono-code font-bold text-xl sm:text-2xl text-white tabular-nums">
                  24-72<span className="text-[#ff1a35]">h</span>
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">Rapid Turnaround Sprints</div>
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
                <div className="text-xs text-neutral-400 mt-0.5">Late-Night Dedicated Builds</div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Studio Emblem & Terminal Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-[#0a0a0f] border border-[#ff1a35]/50 rounded-xl overflow-hidden crimson-glow p-6 relative">
              
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 text-[#ff1a35] text-xs font-mono-code select-none">+</div>
              <div className="absolute top-2 right-2 text-[#ff1a35] text-xs font-mono-code select-none">+</div>
              <div className="absolute bottom-2 left-2 text-[#ff1a35] text-xs font-mono-code select-none">+</div>
              <div className="absolute bottom-2 right-2 text-[#ff1a35] text-xs font-mono-code select-none">+</div>

              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-[#ff1a35]/30 pb-3 mb-5 text-xs font-mono-code">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff1a35] shadow-[0_0_8px_#ff1a35]" />
                  <span className="text-neutral-300 font-semibold">STUDIO_EMBLEM.SYS</span>
                </div>
                <span className="text-neutral-500">REV_2026</span>
              </div>

              {/* Central Logo Container */}
              <div className="relative flex justify-center items-center py-2">
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-[#ff1a35] bg-black shadow-[0_0_40px_rgba(255,26,53,0.35)] flex items-center justify-center p-1">
                  <StudioLogo size="100%" />
                </div>
              </div>

              {/* Terminal status readout */}
              <div className="mt-5 pt-4 border-t border-neutral-800 text-xs font-mono-code space-y-1.5 text-neutral-400">
                <div className="flex justify-between">
                  <span className="text-neutral-500">OPERATING_PROTOCOL</span>
                  <span className="text-neutral-200">FULL_STACK // HARDENED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">ACTIVE_VENTURES</span>
                  <span className="text-[#ff1a35]">PHONIXIA FUND + BETA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">COFFEE_SUPPLY</span>
                  <span className="text-emerald-400">OPTIMAL [NIGHT_SHIFT]</span>
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
  );
};
