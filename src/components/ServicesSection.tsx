import React from 'react';
import { Code, ShieldCheck, Cpu, FileText, ArrowRight, Check, Zap } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const servicesData = [
  {
    id: 'web-dev',
    code: 'WEB_DEV',
    name: 'Custom Web Engineering',
    price: '$200 - $250',
    turnaround: '3 - 5 Days',
    tagline: 'Custom landing pages, full-stack business sites, and responsive web systems.',
    icon: Code,
    features: [
      'Tailored high-conversion landing page or multi-page business application',
      'Modern responsive framework (React / Next / TypeScript / Tailwind)',
      'Blazing fast performance (<1s initial load) & mobile optimization',
      'Production deployment, domain linking, and clean repository delivery',
      'SEO metadata, OpenGraph cards, and contact form integration'
    ]
  },
  {
    id: 'cyber-sec',
    code: 'CYBER_SEC',
    name: 'Cybersecurity Hardening & Audits',
    price: '$100',
    turnaround: '24 - 48 Hours',
    tagline: 'Firewalls, network vulnerability audits, secure hardening, and malware cleanup.',
    icon: ShieldCheck,
    features: [
      'Deep network and endpoint vulnerability surface scanning',
      'Host and firewall configuration with port isolation protocols',
      'Malware inspection, infected asset quarantine, and clean remediation',
      'SSL/TLS validation, DNSSEC check, and credential safety review',
      'Executive summary findings report with actionable fix checklist'
    ]
  },
  {
    id: 'tech-sup',
    code: 'TECH_SUP',
    name: 'Infrastructure & Tech Support',
    price: '$100',
    turnaround: '24 - 48 Hours',
    tagline: 'Home network optimization, WiFi diagnostic fixes, and core hardware setup.',
    icon: Cpu,
    features: [
      'Router firmware tuning, channel congestion analysis, and latency drops',
      'Mesh WiFi coverage mapping & dead-zone elimination',
      'IoT smart device network isolation (VLAN configuration)',
      'Hardware workstation diagnostics, driver cleanup, and thermal audit',
      'Remote screen-share or step-by-step guided configuration'
    ]
  },
  {
    id: 'career-ats',
    code: 'CAREER_ATS',
    name: 'Career & ATS Architecture',
    price: '$45',
    turnaround: '24 Hours',
    tagline: 'ATS-friendly resume restructuring, professional CVs, and custom branding.',
    icon: FileText,
    features: [
      'Algorithmic applicant tracking system (ATS) format overhaul',
      'Targeted keyword injection for tech roles and engineer positions',
      'Quantitative impact phrasing (converting tasks to measurable outcomes)',
      'Clean dual deliverables: Editable Word document + PDF export',
      'Custom tech branding recommendations for LinkedIn & GitHub'
    ]
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#060608] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#ff1a35] uppercase tracking-wider mb-2">
              <span>02. Byte Lab Offerings</span>
              <span aria-hidden="true" className="text-neutral-600">/</span>
              <span className="text-neutral-400">Direct Service Modules</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Engineering, Security, & Career Architecture
            </h2>
            <p className="mt-3 text-neutral-400 text-base font-sans">
              Direct, transparent rates with zero agency bloat. Lock in a sprint, work directly with 
              the builder, and receive verified production-grade results.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono-code text-neutral-400 bg-[#0d0d14] px-4 py-2.5 rounded-lg border border-neutral-800 shrink-0">
            <Zap className="w-4 h-4 text-[#ff1a35]" />
            <span>Fast Turnaround · Strict Confidentiality</span>
          </div>
        </div>

        {/* 4 Cards Bento / 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-[#0b0b10] border border-neutral-800 hover:border-[#ff1a35]/60 transition-all duration-300 rounded-xl p-7 flex flex-col justify-between crimson-glow group"
              >
                <div className="space-y-6">
                  
                  {/* Top Header with Price */}
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#14141d] border border-neutral-700/80 group-hover:border-[#ff1a35]/60 text-[#ff1a35] flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono-code text-neutral-500 uppercase">
                          [{service.code}]
                        </span>
                        <h3 className="font-display font-bold text-xl text-white group-hover:text-[#ff1a35] transition-colors">
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-mono-code font-bold text-2xl text-white tabular-nums">
                        {service.price}
                      </div>
                      <div className="text-[11px] font-mono-code text-neutral-400">
                        {service.turnaround}
                      </div>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                    {service.tagline}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider">
                      Included in Scope:
                    </div>
                    <ul className="space-y-2">
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
                <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between gap-4">
                  <div className="text-xs font-mono-code text-neutral-500">
                    Full Support Included
                  </div>
                  <button
                    onClick={() => onSelectService(service.code)}
                    className="px-4 py-2.5 text-xs font-mono-code font-bold uppercase tracking-wider text-white bg-[#14141f] hover:bg-[#ff1a35] border border-neutral-700 hover:border-[#ff1a35] transition-all rounded flex items-center gap-2 group-hover:shadow-[0_0_15px_rgba(255,26,53,0.3)] cursor-pointer"
                  >
                    <span>Initiate Request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
