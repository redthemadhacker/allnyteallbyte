import React from 'react';
import { useLogo } from '../context/LogoContext';

interface StudioLogoProps {
  className?: string;
  size?: number | string;
  glow?: boolean;
}

export const StudioLogo: React.FC<StudioLogoProps> = ({
  className = '',
  size = '100%',
  glow = false,
}) => {
  const { logoUrl } = useLogo();

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center shrink-0 select-none overflow-hidden rounded-full ${
        glow ? 'crimson-glow-strong' : ''
      } ${className}`}
    >
      <img
        src={logoUrl}
        alt="All Nyte All Byte Logo"
        className="w-full h-full object-cover rounded-full block"
      />
    </div>
  );
};
