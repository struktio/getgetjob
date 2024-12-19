import React from 'react';
import { Home, FileText, Star } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', icon: Home, path: '/dashboard' },
  { name: 'My Resumes', icon: FileText, path: '/resumes' },
  { name: 'Saved Jobs', icon: Star, path: '/saved-jobs' },
];

export function DashboardSidebar() {
  const location = useLocation();

  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 pt-16">
      <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
              >
                <item.icon
                  className={`${
                    location.pathname === item.path
                      ? 'text-gray-500'
                      : 'text-gray-400 group-hover:text-gray-500'
                  } mr-3 flex-shrink-0 h-5 w-5`}
                />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}