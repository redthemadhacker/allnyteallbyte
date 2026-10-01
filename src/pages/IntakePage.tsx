import React from 'react';
import { IntakePortal } from '../components/IntakePortal';

interface IntakePageProps {
  initialService?: string;
  initialMessage?: string;
  initialBudget?: number;
}

export const IntakePage: React.FC<IntakePageProps> = ({
  initialService,
  initialMessage,
  initialBudget,
}) => {
  return (
    <div className="py-6">
      <IntakePortal
        initialService={initialService}
        initialMessage={initialMessage}
        initialBudget={initialBudget}
      />
    </div>
  );
};
