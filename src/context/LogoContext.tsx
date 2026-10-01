import React, { createContext, useContext, useState, useEffect } from 'react';

interface LogoContextType {
  logoUrl: string;
  isCustom: boolean;
  uploadLogoFromCpu: (file: File) => void;
  resetToDefault: () => void;
}

const DEFAULT_LOGO = '/nyte.jpeg';
const STORAGE_KEY = 'allnyte_custom_logo';

const LogoContext = createContext<LogoContextType | undefined>(undefined);

export const LogoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logoUrl, setLogoUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved || DEFAULT_LOGO;
    } catch {
      return DEFAULT_LOGO;
    }
  });

  const isCustom = logoUrl !== DEFAULT_LOGO;

  // Sync favicon whenever logoUrl changes
  useEffect(() => {
    try {
      let favicon = document.getElementById('app-favicon') as HTMLLinkElement | null;
      if (!favicon) {
        favicon = document.querySelector("link[rel*='icon']");
      }
      if (favicon) {
        favicon.href = logoUrl;
      } else {
        const newFavicon = document.createElement('link');
        newFavicon.id = 'app-favicon';
        newFavicon.rel = 'icon';
        newFavicon.href = logoUrl;
        document.head.appendChild(newFavicon);
      }
    } catch (e) {
      console.warn('Failed to update favicon:', e);
    }
  }, [logoUrl]);

  const uploadLogoFromCpu = (file: File) => {
    if (!file || !file.type.startsWith('image/')) {
      alert('Please select a valid image file (JPEG, PNG, WEBP, etc.).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setLogoUrl(dataUrl);
        try {
          localStorage.setItem(STORAGE_KEY, dataUrl);
        } catch {
          // In case localStorage quota exceeded with massive image
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const resetToDefault = () => {
    setLogoUrl(DEFAULT_LOGO);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  return (
    <LogoContext.Provider
      value={{
        logoUrl,
        isCustom,
        uploadLogoFromCpu,
        resetToDefault,
      }}
    >
      {children}
    </LogoContext.Provider>
  );
};

export const useLogo = (): LogoContextType => {
  const context = useContext(LogoContext);
  if (!context) {
    throw new Error('useLogo must be used within a LogoProvider');
  }
  return context;
};
