
import React from 'react';
import { useLocation } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';
import MobileHeader from './MobileHeader';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isMenuPage = location.pathname.includes('/menu');
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <MobileHeader />
      <main className="flex-1 pt-16 pb-16">
        {children}
      </main>
      {!isMenuPage && <MobileNavbar />}
    </div>
  );
};

export default AppLayout;
