import React from 'react';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Settings, 
  HelpCircle,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 px-4 py-6">
      <div className="flex items-center mb-8 px-2">
        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">E</span>
        </div>
        <span className="ml-3 text-xl font-semibold">EcoShip</span>
      </div>

      <nav className="space-y-1">
        <NavItem icon={<LayoutDashboard />} text="Dashboard" active />
        <NavItem icon={<TrendingUp />} text="Analytics" />
        <NavItem icon={<Settings />} text="Settings" />
        <NavItem icon={<HelpCircle />} text="Help" />
      </nav>

      <div className="mt-auto pt-8">
        <button className="flex items-center px-2 py-2 text-gray-600 hover:text-gray-900 w-full">
          <LogOut className="w-5 h-5 mr-3" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

const NavItem = ({ 
  icon, 
  text, 
  active = false 
}: {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}) => {
  return (
    <a
      href="#"
      className={`
        flex items-center px-2 py-2 text-sm font-medium rounded-lg
        ${active 
          ? 'bg-green-50 text-green-600' 
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
      `}
    >
      {React.cloneElement(icon as React.ReactElement, { 
        className: "w-5 h-5 mr-3" 
      })}
      {text}
    </a>
  );
};

export default Sidebar;