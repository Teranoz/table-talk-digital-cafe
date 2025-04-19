import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Menu, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import UserProfile from '../user/UserProfile';
import CartSheet from '../cart/CartSheet';

const MobileHeader: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background">
      <div className="flex items-center justify-between h-16 px-4">
        {!isHome ? (
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
        ) : (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetTitle>القائمة</SheetTitle>
              <SheetDescription>معلومات المستخدم وإعدادات الحساب</SheetDescription>
              <UserProfile />
            </SheetContent>
          </Sheet>
        )}

        <div className="font-serif text-xl font-semibold">SmartCafe</div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-cafe-primary rounded-full">
                0
              </span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle>عربة التسوق</SheetTitle>
            <SheetDescription>راجع العناصر قبل الدفع</SheetDescription>
            <CartSheet />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default MobileHeader;
