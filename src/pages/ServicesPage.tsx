import React from 'react';
import { Code, ShieldCheck, Cpu, FileText, ArrowRight, Check, Zap } from 'lucide-react';
import { servicesData } from '../components/ServicesSection';

interface ServicesPageProps {
  onSelectService: (serviceCode: string) => void;
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, onNavigate }) => {
  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#ff1a35] uppercase tracking-wider mb-2">
            <span>&gt; SECTOR: BYTE LAB COMMISSIONS</span>
            <span aria-hidden="true" className="text-neutral-600">/</span>
            <span className="text-neutral-400">SERVICES &amp; RATES</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Direct Engineering, Security &amp; Career Architecture
          </h1>
          <p className="mt-4 text-neutral-300 text-base sm:text-lg font-sans leading-relaxed">
            Transparent fixed pricing ($45 to $250) with zero agency markup. 
            Work directly with the engineer, verify test results, and receive production-grade deliverables.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono-code text-neutral-400 bg-[#0d0d14] px-4 py-2.5 rounded-lg border border-neutral-800 shrink-0">
          <Zap className="w-4 h-4 text-[#ff1a35]" />
          <span>Fast Turnaround · Strict Confidentiality</span>
        </div>
      </div>

      {/* Services Grid (2x2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="bg-[#0b0b10] border border-neutral-800 hover:border-[#ff1a35]/60 transition-all duration-300 rounded-xl p-8 flex flex-col justify-between crimson-glow group"
            >
              <div className="space-y-6">
                
                {/* Top Header with Price */}
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-neutral-800">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-lg bg-[#14141d] border border-neutral-700/80 group-hover:border-[#ff1a35]/60 text-[#ff1a35] flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono-code text-neutral-500 uppercase">
                        [{service.code}]
                      </span>
                      <h2 className="font-display font-bold text-2xl text-white group-hover:text-[#ff1a35] transition-colors">
                        {service.name}
                      </h2>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-mono-code font-bold text-2xl sm:text-3xl text-white tabular-nums">
                      {service.price}
                    </div>
                    <div className="text-xs font-mono-code text-neutral-400">
                      {service.turnaround}
                    </div>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                  {service.tagline}
                </p>

                {/* Scope items */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider">
                    Included Deliverables:
                  </div>
                  <ul className="space-y-2.5">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#ff1a35] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom Action Trigger */}
              <div className="pt-6 mt-8 border-t border-neutral-800/80 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('estimator')}
                  className="text-xs font-mono-code text-neutral-500 hover:text-neutral-300 underline cursor-pointer"
                >
                  Estimate with Add-ons
                </button>
                <button
                  type="button"
                  onClick={() => onSelectService(service.code)}
                  className="px-5 py-3 text-xs font-mono-code font-bold uppercase tracking-wider text-white bg-[#14141f] hover:bg-[#ff1a35] border border-neutral-700 hover:border-[#ff1a35] transition-all rounded flex items-center gap-2 group-hover:shadow-[0_0_15px_rgba(255,26,53,0.3)] cursor-pointer"
                >
                  <span>Initiate Brief</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Scope Estimator Quick Banner */}
      <div className="bg-[#0e0e16] border border-[#ff1a35]/40 rounded-xl p-8 crimson-glow flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-xs font-mono-code text-[#ff1a35] uppercase mb-1">
            Looking to Customize Scope?
          </div>
          <h3 className="font-display font-bold text-2xl text-white">
            Use the Interactive Project Estimator
          </h3>
          <p className="text-neutral-300 text-sm mt-1 max-w-xl font-sans">
            Add rush 24-hour turnaround, domain/SSL configuration, or 30-day post-launch checkups to see live pricing.
          </p>
        </div>
        <button
          onClick={() => onNavigate('estimator')}
          className="px-6 py-3.5 text-xs font-mono-code font-bold uppercase tracking-wider text-white bg-[#ff1a35] hover:bg-[#d9122c] rounded transition-all whitespace-nowrap shadow-[0_0_15px_rgba(255,26,53,0.35)] cursor-pointer"
        >
          Open Scope Estimator -&gt;
        </button>
      </div>

    </div>
  );
};
