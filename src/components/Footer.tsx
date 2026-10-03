import React from 'react';
import { ArrowUp } from 'lucide-react';
import { StudioLogo } from './StudioLogo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-900 bg-[#050508] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-neutral-900">
          
          {/* Brand Wordmark & Tagline */}
          <div className="space-y-2">
            <button
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="flex items-center gap-3 text-left cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full border border-[#ff1a35]/60 bg-black shrink-0 flex items-center justify-center p-0.5">
                <StudioLogo size="100%" />
              </div>
              <span className="font-display font-black text-lg tracking-wider text-white hover:text-[#ff1a35] transition-colors">
                ALL NYTE ALL BYTE
              </span>
            </button>
            <p className="text-xs font-mono-code text-neutral-400">
              &gt; code // coffee // repeat · Independent Digital Studio
            </p>
          </div>

          {/* Navigation Mirror (Separate Pages) */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-mono-code text-neutral-400">
            <button
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="hover:text-[#ff1a35] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate('ventures');
                scrollToTop();
              }}
              className="hover:text-[#ff1a35] transition-colors cursor-pointer"
            >
              Ventures
            </button>
            <button
              onClick={() => {
                onNavigate('services');
                scrollToTop();
              }}
              className="hover:text-[#ff1a35] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => {
                onNavigate('estimator');
                scrollToTop();
              }}
              className="hover:text-[#ff1a35] transition-colors cursor-pointer"
            >
              Scope Estimator
            </button>
            <button
              onClick={() => {
                onNavigate('intake');
                scrollToTop();
              }}
              className="hover:text-[#ff1a35] transition-colors cursor-pointer"
            >
              Intake
            </button>
            <button
              onClick={() => {
                onNavigate('channels');
                scrollToTop();
              }}
              className="hover:text-[#ff1a35] transition-colors cursor-pointer"
            >
              Connect
            </button>
          </nav>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-[#0e0e16] border border-neutral-800 hover:border-[#ff1a35] text-neutral-400 hover:text-white transition-all cursor-pointer flex items-center gap-2 text-xs font-mono-code"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Legal & Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-neutral-500">
          <div>
            © 2026 All Nyte All Byte. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://reds-cyber-nook-a2ae0b8c4979.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff1a35] transition-colors"
            >
              Personal Portfolio Archive
            </a>
            <span>·</span>
            <a
              href="mailto:redthemadhacker@gmail.com"
              className="hover:text-[#ff1a35] transition-colors"
            >
              redthemadhacker@gmail.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
