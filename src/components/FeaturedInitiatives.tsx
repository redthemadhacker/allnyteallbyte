import React from 'react';
import { ExternalLink, Flame, Rocket, Gift, ArrowUpRight, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export const FeaturedInitiatives: React.FC = () => {
  return (
    <section id="ventures" className="py-20 md:py-28 bg-[#08080c] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#ff1a35] uppercase tracking-wider mb-2">
            <span>01. Featured Directives</span>
            <span aria-hidden="true" className="text-neutral-600">/</span>
            <span className="text-neutral-400">Current Initiatives</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Flagship Ecosystem & Active Ventures
          </h2>
          <p className="mt-3 text-neutral-400 text-base font-sans">
            Currently spearheading the Phonixia digital movement and scaling technical capacity. 
            Back the fund, test the next-generation beta release, or directly equip the lab workstation.
          </p>
        </div>

        {/* 3 Prominent Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Phonixia Fund */}
          <div className="bg-[#0c0c12] border border-[#ff1a35]/40 hover:border-[#ff1a35] transition-all duration-300 rounded-xl p-7 flex flex-col justify-between crimson-glow relative group">
            <div className="space-y-5">
              
              {/* Card Meta */}
              <div className="flex items-center justify-between text-xs font-mono-code text-neutral-400 pb-3 border-b border-neutral-800">
                <span className="text-[#ff1a35] font-semibold">VENTURE // CAPITAL</span>
                <span className="text-neutral-400">LIVE PORTAL</span>
              </div>

              {/* Title & Icon Lockup */}
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#ff1a35]/10 border border-[#ff1a35]/40 flex items-center justify-center text-[#ff1a35] mb-4">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#ff1a35] transition-colors">
                  Phonixia Fund
                </h3>
                <div className="text-xs font-mono-code text-neutral-500 mt-1">
                  https://www.phonixia.fund/
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                The dedicated venture & growth engine backing sovereign technologies, community development, 
                and independent creative builders. Explore investment rounds, back the roadmap, and join an ecosystem 
                engineered for long-term technological independence.
              </p>

              {/* Specific Value Points */}
              <ul className="space-y-2 text-xs font-mono-code text-neutral-400 pt-2 border-t border-neutral-800/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a35]" />
                  <span>Sovereign Funding & Direct Backing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a35]" />
                  <span>Venture Thesis & Public Roadmap</span>
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
                className="w-full py-3 px-4 text-xs font-mono-code font-bold uppercase tracking-wider text-white bg-[#ff1a35] hover:bg-[#d9122c] transition-all rounded flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,26,53,0.3)] hover:shadow-[0_0_25px_rgba(255,26,53,0.6)] cursor-pointer"
              >
                <span>Visit Phonixia Fund</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Phonixia Beta */}
          <div className="bg-[#0c0c12] border border-[#ff1a35]/40 hover:border-[#ff1a35] transition-all duration-300 rounded-xl p-7 flex flex-col justify-between crimson-glow relative group">
            <div className="space-y-5">
              
              {/* Card Meta */}
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
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#ff1a35] transition-colors">
                  Phonixia Beta
                </h3>
                <div className="text-xs font-mono-code text-neutral-500 mt-1 truncate">
                  phonixia-7c9c93ef0d42.herokuapp.com
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                Experience the live web app in active production. Test features in real time, review experimental 
                interfaces, stress-test responsive performance, and participate directly in early user validation.
              </p>

              {/* Specific Value Points */}
              <ul className="space-y-2 text-xs font-mono-code text-neutral-400 pt-2 border-t border-neutral-800/80">
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
                  <span>Direct Telemetry & Feedback Loop</span>
                </li>
              </ul>
            </div>

            {/* Action CTA Button */}
            <div className="pt-6 mt-6 border-t border-neutral-800">
              <a
                href="https://phonixia-7c9c93ef0d42.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-mono-code font-bold uppercase tracking-wider text-white bg-[#ff1a35] hover:bg-[#d9122c] transition-all rounded flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,26,53,0.3)] hover:shadow-[0_0_25px_rgba(255,26,53,0.6)] cursor-pointer"
              >
                <span>Launch Phonixia Beta</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: Dev Wishlist */}
          <div id="wishlist" className="bg-[#0c0c12] border border-[#ff1a35]/40 hover:border-[#ff1a35] transition-all duration-300 rounded-xl p-7 flex flex-col justify-between crimson-glow relative group">
            <div className="space-y-5">
              
              {/* Card Meta */}
              <div className="flex items-center justify-between text-xs font-mono-code text-neutral-400 pb-3 border-b border-neutral-800">
                <span className="text-[#ff1a35] font-semibold">LAB GEAR // DEV WISHLIST</span>
                <span className="text-amber-400">AMAZON REGISTRY</span>
              </div>

              {/* Title & Icon Lockup */}
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#ff1a35]/10 border border-[#ff1a35]/40 flex items-center justify-center text-[#ff1a35] mb-4">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#ff1a35] transition-colors">
                  Dev Wishlist
                </h3>
                <div className="text-xs font-mono-code text-neutral-500 mt-1 truncate">
                  amazon.com/hz/wishlist/...
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                Support the midnight grind. Curated equipment including microcontrollers, test bench hardware, 
                high-speed networking cables, ergonomic studio essentials, and high-potency caffeine fuel powering 
                the All Nyte All Byte lab.
              </p>

              {/* Specific Value Points */}
              <ul className="space-y-2 text-xs font-mono-code text-neutral-400 pt-2 border-t border-neutral-800/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a35]" />
                  <span>Hardware & Test Bench Upgrades</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a35]" />
                  <span>Development Peripherals & Sensors</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a35]" />
                  <span>Direct Dev Appreciation & Caffeine Rations</span>
                </li>
              </ul>
            </div>

            {/* Action CTA Button */}
            <div className="pt-6 mt-6 border-t border-neutral-800">
              <a
                href="https://www.amazon.com/hz/wishlist/ls/2XEMVSP73LYKU?ref_=wl_share"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-mono-code font-bold uppercase tracking-wider text-white bg-[#ff1a35] hover:bg-[#d9122c] transition-all rounded flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,26,53,0.3)] hover:shadow-[0_0_25px_rgba(255,26,53,0.6)] cursor-pointer"
              >
                <span>Support The Dev Wishlist</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
