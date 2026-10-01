import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { StudioLogo } from './StudioLogo';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'ventures', label: 'Ventures' },
    { id: 'services', label: 'Services' },
    { id: 'estimator', label: 'Scope Estimator' },
    { id: 'channels', label: 'Connect' },
  ];

  const handleNav = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#ff1a35]/25 bg-[#060608]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single element Brand Wordmark with new Studio Emblem */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a35] rounded-md px-1 py-1 text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full border border-[#ff1a35]/60 group-hover:border-[#ff1a35] transition-colors shrink-0 bg-black flex items-center justify-center p-0.5">
            <StudioLogo size="100%" />
          </div>
          <span className="font-display font-extrabold text-base sm:text-lg tracking-wider text-white group-hover:text-[#ff1a35] transition-colors whitespace-nowrap">
            ALL NYTE ALL BYTE
          </span>
        </button>

        {/* Zone 2: 4-5 Clean Text Navigation Links (Dev Wishlist removed from taskbar) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono-code uppercase tracking-wider">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`py-1 transition-all cursor-pointer relative ${
                  isActive
                    ? 'text-[#ff1a35] font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff1a35] shadow-[0_0_8px_#ff1a35]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-400 px-2.5 py-1 rounded bg-[#0f0f14] border border-neutral-800">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
            <span className="text-[11px] tracking-wide text-neutral-300">NIGHT_SHIFT: ACTIVE</span>
          </div>

          <button
            onClick={() => handleNav('intake')}
            className={`px-4 py-2 text-xs font-mono-code font-bold uppercase tracking-wider text-white transition-all rounded cursor-pointer whitespace-nowrap ${
              currentPage === 'intake'
                ? 'bg-[#d9122c] shadow-[0_0_20px_rgba(255,26,53,0.6)] ring-1 ring-white/50'
                : 'bg-[#ff1a35] hover:bg-[#e00d26] shadow-[0_0_15px_rgba(255,26,53,0.35)] hover:shadow-[0_0_22px_rgba(255,26,53,0.6)]'
            }`}
          >
            Initiate Request -&gt;
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => handleNav('intake')}
            className="px-3 py-1.5 text-[11px] font-mono-code font-semibold uppercase text-white bg-[#ff1a35] rounded"
          >
            Initiate
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white rounded focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0f] border-b border-[#ff1a35]/30 px-6 py-5 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono-code text-neutral-400 border-b border-neutral-800 pb-3">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
              System Status: Available for Projects
            </span>
            <span className="text-[#ff1a35]">2026</span>
          </div>
          <nav className="flex flex-col space-y-3 font-mono-code text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`py-1 text-left transition-colors cursor-pointer ${
                  currentPage === link.id
                    ? 'text-[#ff1a35] font-bold'
                    : 'text-neutral-300 hover:text-[#ff1a35]'
                }`}
              >
                &gt; {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('intake')}
              className={`py-1 text-left transition-colors cursor-pointer ${
                currentPage === 'intake'
                  ? 'text-[#ff1a35] font-bold'
                  : 'text-neutral-300 hover:text-[#ff1a35]'
              }`}
            >
              &gt; Transmission / Intake Portal
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
