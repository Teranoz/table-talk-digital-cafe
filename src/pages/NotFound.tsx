
import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-cafe-light">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="bg-cafe-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Coffee className="h-10 w-10 text-cafe-primary" />
        </div>
        
        <h1 className="font-serif text-3xl font-bold mb-2">Page Not Found</h1>
        
        <p className="text-muted-foreground mb-6">
          We couldn't find the page you were looking for. It might have been moved or doesn't exist.
        </p>
        
        <div className="space-y-3">
          <Button className="w-full bg-cafe-primary" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <Button variant="outline" className="w-full" asChild>
            <Link to="/scan">Scan QR Code</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
