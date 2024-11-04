import React from 'react';

interface SustainabilityScoreProps {
  score: number;
}

const SustainabilityScore = ({ score }: SustainabilityScoreProps) => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-sm p-6 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">Sustainability Score</h2>
          <p className="text-green-50">Your company is performing well above industry average</p>
        </div>
        <div className="text-right">
          <div className="text-4xl font-bold">{score}</div>
          <div className="text-green-50">out of 100</div>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="h-2 bg-green-400/30 rounded-full">
          <div 
            className="h-2 bg-white rounded-full" 
            style={{ width: `${score}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default SustainabilityScore;