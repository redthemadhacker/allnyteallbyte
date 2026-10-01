import React, { useState } from 'react';
import { Calculator, ArrowRight, Shield, Zap, Sparkles, CheckCircle } from 'lucide-react';

interface ProjectEstimatorProps {
  onCommitScope: (scopeSummary: {
    serviceName: string;
    totalPrice: number;
    turnaround: string;
    addons: string[];
  }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onCommitScope }) => {
  const [selectedService, setSelectedService] = useState<'web' | 'cyber' | 'tech' | 'career'>('web');
  const [addons, setAddons] = useState<{ [key: string]: boolean }>({
    rush: false,
    domain: false,
    hardening: false,
    audit: false,
  });

  const basePrices = {
    web: { name: 'Custom Web Dev', price: 225, days: '3-5 Days' },
    cyber: { name: 'Cyber Sec Audit & Hardening', price: 100, days: '24-48 Hours' },
    tech: { name: 'Network & Tech Support', price: 100, days: '24-48 Hours' },
    career: { name: 'Career / ATS Resume Architecture', price: 45, days: '24 Hours' },
  };

  const addonOptions = [
    { id: 'rush', name: 'Priority Night Sprint (Rush Delivery)', price: 35, desc: 'Expedited processing within 24 hours' },
    { id: 'domain', name: 'Domain & SSL Verification Setup', price: 25, desc: 'DNS configuration & certificate deployment' },
    { id: 'hardening', name: 'System Security Hardening Checklist', price: 30, desc: 'Multi-layer defense policy documentation' },
    { id: 'audit', name: 'Post-Launch 30-Day Checkup', price: 40, desc: 'Follow-up diagnostics and minor tweaks' },
  ];

  const toggleAddon = (id: string) => {
    setAddons((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const currentBase = basePrices[selectedService];
  const addonsTotal = addonOptions.reduce((acc, opt) => (addons[opt.id] ? acc + opt.price : acc), 0);
  const finalTotal = currentBase.price + addonsTotal;

  const handleProceed = () => {
    const activeAddonNames = addonOptions.filter((opt) => addons[opt.id]).map((opt) => opt.name);
    onCommitScope({
      serviceName: currentBase.name,
      totalPrice: finalTotal,
      turnaround: addons.rush ? 'Express (24h)' : currentBase.days,
      addons: activeAddonNames,
    });
  };

  return (
    <section id="estimator" className="py-20 md:py-28 bg-[#08080c] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#ff1a35] uppercase tracking-wider mb-2">
            <span>03. Interactive Scope Builder</span>
            <span aria-hidden="true" className="text-neutral-600">/</span>
            <span className="text-neutral-400">Custom Rate Calculator</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Estimate Your Project Scope & Timeline
          </h2>
          <p className="mt-3 text-neutral-400 text-base font-sans">
            Configure your deliverables, select optional add-ons, and immediately lock in your package 
            before transmitting your brief to the studio.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Select Primary Directive */}
            <div className="bg-[#0c0c12] border border-neutral-800 rounded-xl p-6">
              <label className="block text-xs font-mono-code text-neutral-300 uppercase tracking-wider mb-4">
                Step 1: Select Primary Directive
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { key: 'web', label: 'Web Dev', desc: 'Custom Site / App', price: '$200 - $250' },
                  { key: 'cyber', label: 'Cyber Sec', desc: 'Audit & Firewalls', price: '$100' },
                  { key: 'tech', label: 'Tech Support', desc: 'Network & Hardware', price: '$100' },
                  { key: 'career', label: 'Career / ATS', desc: 'Resume & Branding', price: '$45' },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setSelectedService(item.key as any)}
                    className={`p-4 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      selectedService === item.key
                        ? 'border-[#ff1a35] bg-[#1a0f12] text-white shadow-[0_0_15px_rgba(255,26,53,0.25)]'
                        : 'border-neutral-800 bg-[#09090d] text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-display font-bold text-white flex items-center justify-between">
                        <span>{item.label}</span>
                        <span className="text-xs font-mono-code text-[#ff1a35]">{item.price}</span>
                      </div>
                      <div className="text-xs text-neutral-400 mt-1 font-sans">{item.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Optional Enhancements */}
            <div className="bg-[#0c0c12] border border-neutral-800 rounded-xl p-6">
              <label className="block text-xs font-mono-code text-neutral-300 uppercase tracking-wider mb-4">
                Step 2: Optional Lab Add-Ons
              </label>

              <div className="space-y-3">
                {addonOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex items-start gap-3.5 p-3.5 rounded-lg border cursor-pointer transition-all ${
                      addons[opt.id]
                        ? 'border-[#ff1a35]/60 bg-[#160b0e] text-white'
                        : 'border-neutral-800/80 bg-[#09090d] text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={!!addons[opt.id]}
                      onChange={() => toggleAddon(opt.id)}
                      className="mt-1 rounded accent-[#ff1a35] focus:ring-0 cursor-pointer"
                    />
                    <div className="flex-1 text-xs">
                      <div className="flex items-center justify-between font-mono-code">
                        <span className="font-semibold text-neutral-200">{opt.name}</span>
                        <span className="text-[#ff1a35] font-bold">+${opt.price}</span>
                      </div>
                      <p className="text-neutral-400 mt-0.5 font-sans">{opt.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* Real-time Summary Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-[#0e0e16] border border-[#ff1a35]/50 rounded-xl p-6 crimson-glow space-y-6">
              
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 text-xs font-mono-code">
                <span className="text-[#ff1a35] font-bold">&gt; ESTIMATE_SUMMARY</span>
                <span className="text-neutral-400">INSTANT QUOTE</span>
              </div>

              {/* Service Line */}
              <div className="space-y-3 text-xs font-mono-code">
                <div className="flex justify-between items-center text-neutral-300">
                  <span>Selected Service:</span>
                  <span className="text-white font-bold">{currentBase.name}</span>
                </div>
                <div className="flex justify-between items-center text-neutral-300">
                  <span>Base Price:</span>
                  <span className="text-white tabular-nums">${currentBase.price}</span>
                </div>
                <div className="flex justify-between items-center text-neutral-300">
                  <span>Estimated Delivery:</span>
                  <span className="text-emerald-400 font-semibold">
                    {addons.rush ? '24 Hours (Rush Mode)' : currentBase.days}
                  </span>
                </div>

                {/* Add-ons line items */}
                {Object.values(addons).some(Boolean) && (
                  <div className="pt-3 border-t border-neutral-800 space-y-2">
                    <span className="text-neutral-400 block mb-1">Active Add-Ons:</span>
                    {addonOptions.filter((opt) => addons[opt.id]).map((opt) => (
                      <div key={opt.id} className="flex justify-between text-neutral-300 pl-2 border-l border-[#ff1a35]/40">
                        <span className="truncate pr-2">{opt.name}</span>
                        <span className="text-[#ff1a35] shrink-0 tabular-nums">+${opt.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Final Price Block */}
              <div className="pt-4 border-t border-neutral-800">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-xs font-mono-code text-neutral-400">Estimated Total:</span>
                  <div className="text-3xl font-display font-black text-white tabular-nums">
                    ${finalTotal}
                    <span className="text-xs font-mono-code font-normal text-neutral-400 ml-1">USD</span>
                  </div>
                </div>
                <p className="text-[11px] text-neutral-400 font-sans mt-1">
                  *Transparent pricing. No hidden fees or unexpected retainers.
                </p>
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={handleProceed}
                className="w-full py-3.5 px-4 text-xs font-mono-code font-bold uppercase tracking-wider text-white bg-[#ff1a35] hover:bg-[#d9122c] transition-all rounded flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(255,26,53,0.35)] hover:shadow-[0_0_28px_rgba(255,26,53,0.6)] cursor-pointer"
              >
                <span>Lock In Scope & Transmit Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
