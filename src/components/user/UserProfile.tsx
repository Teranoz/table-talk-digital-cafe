
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, CreditCard, Heart, LogOut, HelpCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const UserProfile: React.FC = () => {
  // Mock user data
  const user = {
    name: 'Guest User',
    email: 'guest@example.com',
    avatarUrl: '',
    isLoggedIn: false,
    loyaltyPoints: 0,
    loyaltyTier: 'Silver',
  };
  
  const menuItems = [
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Heart, label: 'Favorites', path: '/favorites' },
    { icon: CreditCard, label: 'Payment Methods', path: '/payment-methods' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: HelpCircle, label: 'Help & Support', path: '/support' },
  ];
  
  return (
    <div className="flex flex-col h-full py-4">
      <div className="flex items-center space-x-4 p-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={user.avatarUrl} />
          <AvatarFallback className="bg-cafe-secondary text-cafe-dark">
            {user.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h2 className="text-lg font-medium">{user.name}</h2>
          {user.isLoggedIn ? (
            <>
              <p className="text-sm text-muted-foreground">{user.email}</p>
              <div className="flex items-center space-x-1">
                <span className="text-xs font-medium text-cafe-primary">
                  {user.loyaltyTier}
                </span>
                <span className="text-xs text-muted-foreground">
                  • {user.loyaltyPoints} points
                </span>
              </div>
            </>
          ) : (
            <div className="flex space-x-2 mt-2">
              <Button size="sm" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link to="/register">Register</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center space-x-3 px-4 py-2 text-sm hover:bg-accent rounded-md"
          >
            <item.icon className="h-5 w-5 text-cafe-primary" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
      
      <Button variant="ghost" className="mt-auto flex items-center space-x-3 px-4 py-2 text-sm text-destructive">
        <LogOut className="h-5 w-5" />
        <span>Sign Out</span>
      </Button>
    </div>
  );
};

export default UserProfile;
