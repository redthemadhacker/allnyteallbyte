import React from 'react';
import { ProjectEstimator } from '../components/ProjectEstimator';

interface EstimatorPageProps {
  onCommitScope: (scope: {
    serviceName: string;
    totalPrice: number;
    turnaround: string;
    addons: string[];
  }) => void;
}

export const EstimatorPage: React.FC<EstimatorPageProps> = ({ onCommitScope }) => {
  return (
    <div className="py-6">
      <ProjectEstimator onCommitScope={onCommitScope} />
    </div>
  );
};
