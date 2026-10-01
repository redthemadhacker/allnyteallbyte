import React from 'react';
import { ExternalLink, Flame, Rocket, Gift, Check, ArrowRight, Shield } from 'lucide-react';

export const VenturesPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-mono-code text-[#ff1a35] uppercase tracking-wider mb-2">
          <span>&gt; SECTOR: VENTURES &amp; LAB ECOSYSTEM</span>
          <span aria-hidden="true" className="text-neutral-600">/</span>
          <span className="text-neutral-400">ACTIVE INITIATIVES</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
          Flagship Ecosystem &amp; Active Ventures
        </h1>
        <p className="mt-4 text-neutral-300 text-base sm:text-lg font-sans leading-relaxed">
          Currently spearheading the Phonixia digital movement and scaling studio equipment capacity. 
          Explore the sovereign fund, live-test the next-generation beta release, or directly fuel midnight lab engineering.
        </p>
      </div>

      {/* 3 Prominent Cards Grid: Fund, Beta, and Dev Wishlist inline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Card 1: Phonixia Fund */}
        <div className="bg-[#0c0c12] border border-[#ff1a35]/40 hover:border-[#ff1a35] transition-all duration-300 rounded-xl p-7 flex flex-col justify-between crimson-glow relative group">
          <div className="space-y-6">
            
            {/* Meta */}
            <div className="flex items-center justify-between text-xs font-mono-code text-neutral-400 pb-3 border-b border-neutral-800">
              <span className="text-[#ff1a35] font-semibold">VENTURE // CAPITAL</span>
              <span className="text-neutral-300">LIVE PORTAL</span>
            </div>

            {/* Title & Icon Lockup */}
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#ff1a35]/10 border border-[#ff1a35]/40 flex items-center justify-center text-[#ff1a35] mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-2xl text-white group-hover:text-[#ff1a35] transition-colors">
                Phonixia Fund
              </h2>
              <div className="text-xs font-mono-code text-neutral-500 mt-1">
                https://www.phonixia.fund/
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-300 leading-relaxed font-sans">
              The dedicated venture &amp; growth engine backing sovereign technologies, community development, 
              and independent creative builders. Explore investment rounds, back the roadmap, and join an ecosystem 
              engineered for long-term technological independence.
            </p>

            {/* Key Pillars */}
            <ul className="space-y-2.5 text-xs font-mono-code text-neutral-400 pt-2 border-t border-neutral-800/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a35]" />
                <span>Sovereign Funding &amp; Direct Backing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a35]" />
                <span>Venture Thesis &amp; Public Roadmap</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a35]" />
                <span>Transparent Capital Allocation</span>
              </li>
            </ul>
          </div>

          {/* Action CTA Button */}
          <div className="pt-6 mt-6 border-t border-neutral-800">
            <a
              href="https://www.phonixia.fund/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 text-xs font-mono-code font-bold uppercase tracking-wider text-white bg-[#ff1a35] hover:bg-[#d9122c] transition-all rounded flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,26,53,0.3)] hover:shadow-[0_0_25px_rgba(255,26,53,0.6)] cursor-pointer"
            >
              <span>Visit Phonixia Fund</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Card 2: Phonixia Beta */}
        <div className="bg-[#0c0c12] border border-[#ff1a35]/40 hover:border-[#ff1a35] transition-all duration-300 rounded-xl p-7 flex flex-col justify-between crimson-glow relative group">
          <div className="space-y-6">
            
            {/* Meta */}
            <div className="flex items-center justify-between text-xs font-mono-code text-neutral-400 pb-3 border-b border-neutral-800">
              <span className="text-[#ff1a35] font-semibold">APPLICATION // LIVE BETA</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                OPERATIONAL
              </span>
            </div>

            {/* Title & Icon Lockup */}
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#ff1a35]/10 border border-[#ff1a35]/40 flex items-center justify-center text-[#ff1a35] mb-4">
                <Rocket className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-2xl text-white group-hover:text-[#ff1a35] transition-colors">
                Phonixia Beta
              </h2>
              <div className="text-xs font-mono-code text-neutral-500 mt-1 truncate">
                phonixia-7c9c93ef0d42.herokuapp.com
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-300 leading-relaxed font-sans">
              Experience the live web app in active production. Test operational features in real time, 
              stress-test responsive performance, and participate directly in early user validation 
              and feedback loops.
            </p>

            {/* Key Pillars */}
            <ul className="space-y-2.5 text-xs font-mono-code text-neutral-400 pt-2 border-t border-neutral-800/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a35]" />
                <span>Live Production Web Sandbox</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a35]" />
                <span>Real-time Feature Experimentation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a35]" />
                <span>Direct Telemetry &amp; Feedback Loop</span>
              </li>
            </ul>
          </div>

          {/* Action CTA Button */}
          <div className="pt-6 mt-6 border-t border-neutral-800">
            <a
              href="https://phonixia-7c9c93ef0d42.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 text-xs font-mono-code font-bold uppercase tracking-wider text-white bg-[#ff1a35] hover:bg-[#d9122c] transition-all rounded flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,26,53,0.3)] hover:shadow-[0_0_25px_rgba(255,26,53,0.6)] cursor-pointer"
            >
              <span>Launch Phonixia Beta</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Card 3: Dev Wishlist (Inline with Fund & Beta) */}
        <div className="bg-[#0c0c12] border border-[#ff1a35]/40 hover:border-[#ff1a35] transition-all duration-300 rounded-xl p-7 flex flex-col justify-between crimson-glow relative group">
          <div className="space-y-6">
            
            {/* Meta */}
            <div className="flex items-center justify-between text-xs font-mono-code text-neutral-400 pb-3 border-b border-neutral-800">
              <span className="text-[#ff1a35] font-semibold">LAB GEAR // DEV WISHLIST</span>
              <span className="text-amber-400">AMAZON REGISTRY</span>
            </div>

            {/* Title & Icon Lockup */}
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#ff1a35]/10 border border-[#ff1a35]/40 flex items-center justify-center text-[#ff1a35] mb-4">
                <Gift className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-2xl text-white group-hover:text-[#ff1a35] transition-colors">
                Dev Wishlist
              </h2>
              <div className="text-xs font-mono-code text-neutral-500 mt-1 truncate">
                amazon.com/hz/wishlist/...
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-300 leading-relaxed font-sans">
              Directly fuel the 3 AM engineering sessions. Curated registry including microcontrollers, 
              test bench hardware, high-speed networking cables, ergonomic studio essentials, and high-potency caffeine fuel.
            </p>

            {/* Key Pillars */}
            <ul className="space-y-2.5 text-xs font-mono-code text-neutral-400 pt-2 border-t border-neutral-800/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a35]" />
                <span>Hardware &amp; Test Bench Upgrades</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a35]" />
                <span>Development Peripherals &amp; Sensors</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a35]" />
                <span>Direct Dev Appreciation &amp; Caffeine Rations</span>
              </li>
            </ul>
          </div>

          {/* Action CTA Button */}
          <div className="pt-6 mt-6 border-t border-neutral-800">
            <a
              href="https://www.amazon.com/hz/wishlist/ls/2XEMVSP73LYKU?ref_=wl_share"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 text-xs font-mono-code font-bold uppercase tracking-wider text-white bg-[#ff1a35] hover:bg-[#d9122c] transition-all rounded flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,26,53,0.3)] hover:shadow-[0_0_25px_rgba(255,26,53,0.6)] cursor-pointer"
            >
              <span>Support Dev Wishlist</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Cross-Link Callout to Services */}
      <div className="bg-[#08080d] border border-neutral-800 rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-display font-bold text-xl text-white">
            Need Custom Software or Security Hardening?
          </h3>
          <p className="text-neutral-400 text-sm mt-1 font-sans">
            Explore our fixed-rate engineering modules and lock in your project timeline.
          </p>
        </div>
        <a
          href="#/services"
          className="px-6 py-3 text-xs font-mono-code font-bold uppercase tracking-wider text-white bg-[#14141e] hover:bg-[#ff1a35] border border-neutral-700 hover:border-[#ff1a35] rounded transition-all whitespace-nowrap"
        >
          View Byte Lab Services -&gt;
        </a>
      </div>

    </div>
  );
};
