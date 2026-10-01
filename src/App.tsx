import React, { useState, useEffect } from 'react';
import { LogoProvider } from './context/LogoContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { VenturesPage } from './pages/VenturesPage';
import { ServicesPage } from './pages/ServicesPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { IntakePage } from './pages/IntakePage';
import { ChannelsPage } from './pages/ChannelsPage';

export default function App() {
  const getPageFromHash = (): string => {
    const hash = window.location.hash.replace('#/', '').replace('#', '').trim();
    if (['ventures', 'services', 'estimator', 'intake', 'channels'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getPageFromHash);
  const [selectedService, setSelectedService] = useState('WEB_DEV');
  const [initialMessage, setInitialMessage] = useState('');
  const [initialBudget, setInitialBudget] = useState<number | undefined>(undefined);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '#/' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceFromCard = (serviceCode: string) => {
    setSelectedService(serviceCode);
    setInitialMessage(`Initiating commission for [${serviceCode}]. Looking forward to discussing project timeline and deliverables.`);
    navigateTo('intake');
  };

  const handleCommitScopeFromEstimator = (scope: {
    serviceName: string;
    totalPrice: number;
    turnaround: string;
    addons: string[];
  }) => {
    let serviceCode = 'WEB_DEV';
    if (scope.serviceName.toLowerCase().includes('cyber')) serviceCode = 'CYBER_SEC';
    else if (scope.serviceName.toLowerCase().includes('tech') || scope.serviceName.toLowerCase().includes('network')) serviceCode = 'TECH_SUP';
    else if (scope.serviceName.toLowerCase().includes('career') || scope.serviceName.toLowerCase().includes('ats')) serviceCode = 'CAREER_ATS';
    else serviceCode = 'WEB_DEV';

    setSelectedService(serviceCode);
    setInitialBudget(scope.totalPrice);
    setInitialMessage(
      `Package: ${scope.serviceName}\nTurnaround: ${scope.turnaround}\nAdd-ons: ${
        scope.addons.length > 0 ? scope.addons.join(', ') : 'None'
      }\nEstimated Total: $${scope.totalPrice}\n\nProject details:`
    );
    navigateTo('intake');
  };

  return (
    <LogoProvider>
      <div className="min-h-screen bg-[#050508] text-[#e2e8f0] flex flex-col font-sans selection:bg-[#ff1a35] selection:text-white">
        {/* Top Bar Navigation */}
        <Navbar currentPage={currentPage} onNavigate={navigateTo} />

        {/* Dedicated Page Viewport */}
        <main className="flex-1">
          {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
          {currentPage === 'ventures' && <VenturesPage />}
          {currentPage === 'services' && (
            <ServicesPage
              onSelectService={handleSelectServiceFromCard}
              onNavigate={navigateTo}
            />
          )}
          {currentPage === 'estimator' && (
            <EstimatorPage onCommitScope={handleCommitScopeFromEstimator} />
          )}
          {currentPage === 'intake' && (
            <IntakePage
              initialService={selectedService}
              initialMessage={initialMessage}
              initialBudget={initialBudget}
            />
          )}
          {currentPage === 'channels' && <ChannelsPage />}
        </main>

        {/* Clean Footer */}
        <Footer onNavigate={navigateTo} />
      </div>
    </LogoProvider>
  );
}
