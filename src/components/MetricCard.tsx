import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  trend: number;
  icon: React.ReactNode;
}

const MetricCard = ({ title, value, unit, trend, icon }: MetricCardProps) => {
  const isPositive = trend > 0;
  const trendColor = title === 'Carbon Footprint' || title === 'Water Usage'
    ? isPositive ? 'text-red-600' : 'text-green-600'
    : isPositive ? 'text-green-600' : 'text-red-600';

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-gray-50 rounded-lg">
          {React.cloneElement(icon as React.ReactElement, { 
            className: "w-6 h-6" 
          })}
        </div>
        <div className={`flex items-center ${trendColor}`}>
          {isPositive ? (
            <ArrowUpRight className="w-4 h-4" />
          ) : (
            <ArrowDownRight className="w-4 h-4" />
          )}
          <span className="text-sm font-medium ml-1">
            {Math.abs(trend)}%
          </span>
        </div>
      </div>
      <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <span className="ml-2 text-gray-500 text-sm">{unit}</span>
      </div>
    </div>
  );
};

export default MetricCard;