import React from 'react';
import { BarChart3 } from 'lucide-react';

interface ChartProps {
  title: string;
  type: 'line' | 'doughnut';
}

const Chart = ({ title, type }: ChartProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <button className="text-gray-400 hover:text-gray-500">
          <BarChart3 className="w-5 h-5" />
        </button>
      </div>
      
      <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
        <p className="text-gray-500">Chart visualization would go here</p>
      </div>
    </div>
  );
};

export default Chart;