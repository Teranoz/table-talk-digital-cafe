
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, QrCode, Calendar, Bell, Settings } from 'lucide-react';

const MobileNavbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: QrCode, label: 'Scan', path: '/scan' },
    { icon: Calendar, label: 'Reservations', path: '/reservations' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center space-y-1 w-full h-full ${
              isActive(item.path) ? 'text-cafe-primary' : 'text-muted-foreground'
            }`}
          >
            <item.icon className={`h-5 w-5 ${isActive(item.path) && 'animate-pulse-light'}`} />
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavbar;
