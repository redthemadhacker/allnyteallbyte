import React from 'react';
import { ArrowRight, Flame, Code, Calculator } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20 pt-8">
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