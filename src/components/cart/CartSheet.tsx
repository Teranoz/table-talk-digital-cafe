
import React from 'react';
import { X, Minus, Plus, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const CartSheet: React.FC = () => {
  // Mock cart data
  const cartItems = [];
  const tableNumber = null;
  const subtotal = 0;
  const tax = 0;
  const total = 0;
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between py-4">
        <h2 className="font-serif text-xl font-semibold">Your Order</h2>
        {tableNumber && (
          <div className="bg-muted px-3 py-1 rounded-full text-sm font-medium">
            Table #{tableNumber}
          </div>
        )}
      </div>
      
      <Separator />
      
      {cartItems.length > 0 ? (
        <>
          <ScrollArea className="flex-1 py-4">
            <div className="space-y-4">
              {/* Cart items would go here */}
              <div className="flex items-center justify-center py-8">
                <p className="text-muted-foreground text-sm">Your cart is empty</p>
              </div>
            </div>
          </ScrollArea>
          
          <div className="border-t pt-4 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Subtotal</span>
                <span className="text-sm font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Tax</span>
                <span className="text-sm font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            <Button className="w-full bg-cafe-primary hover:bg-cafe-dark">
              Place Order
            </Button>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="flex-1">
                Save for Later
              </Button>
              <Button variant="outline" className="flex-1 flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Pre-order</span>
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center space-y-4">
          <div className="bg-muted rounded-full p-6">
            <X className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="font-medium text-lg">Your cart is empty</h3>
          <p className="text-muted-foreground text-sm text-center max-w-xs">
            Scan a QR code at your table or browse the menu to add items to your cart
          </p>
          <Button className="mt-4" asChild>
            <a href="/scan">Scan QR Code</a>
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartSheet;
