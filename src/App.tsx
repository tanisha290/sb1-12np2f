import React from 'react';
import { 
  Leaf, 
  Package, 
  Truck, 
  Recycle, 
  BarChart3, 
  Droplets,
  TreePine,
  Factory
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import MetricCard from './components/MetricCard';
import Chart from './components/Chart';
import SustainabilityScore from './components/SustainabilityScore';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Sustainability Dashboard</h1>
            <p className="mt-2 text-gray-600">Monitor and optimize your environmental impact</p>
          </header>

          <div className="mb-8">
            <SustainabilityScore score={87} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard 
              title="Carbon Footprint"
              value="12.5"
              unit="tons CO₂e"
              trend={-8.3}
              icon={<Factory className="text-green-600" />}
            />
            <MetricCard 
              title="Recycled Packaging"
              value="89"
              unit="%"
              trend={5.2}
              icon={<Recycle className="text-blue-600" />}
            />
            <MetricCard 
              title="Water Usage"
              value="2,450"
              unit="gallons"
              trend={-12.4}
              icon={<Droplets className="text-blue-400" />}
            />
            <MetricCard 
              title="Trees Saved"
              value="342"
              unit="trees"
              trend={24.8}
              icon={<TreePine className="text-emerald-600" />}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Chart 
              title="Monthly Carbon Emissions"
              type="line"
            />
            <Chart 
              title="Packaging Material Distribution"
              type="doughnut"
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Sustainability Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Initiative 
                icon={<Truck />}
                title="Route Optimization"
                description="AI-powered delivery routes reducing fuel consumption by 23%"
              />
              <Initiative 
                icon={<Package />}
                title="Eco Packaging"
                description="100% recyclable materials with 89% recycled content"
              />
              <Initiative 
                icon={<Leaf />}
                title="Carbon Offset"
                description="Partnership with local reforestation projects"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Initiative({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 p-3 bg-green-50 rounded-lg">
        {React.cloneElement(icon as React.ReactElement, { 
          className: "w-6 h-6 text-green-600" 
        })}
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default App;