import React, { ReactNode } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardNavbar } from './DashboardNavbar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="flex h-full">
        <DashboardSidebar />
        <main className="flex-1 md:pl-64 pt-16">
          {children}
        </main>
      </div>
    </div>
  );
}