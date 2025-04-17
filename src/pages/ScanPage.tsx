
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, QrCode, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import AppLayout from '@/components/layout/AppLayout';

const ScanPage = () => {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(true);
  const [tableNumber, setTableNumber] = useState<number | null>(null);
  
  // Mock function to simulate scanning a QR code
  const mockScanQR = () => {
    setIsScanning(false);
    setTimeout(() => {
      // Mock table number from QR code
      const mockTable = Math.floor(Math.random() * 20) + 1;
      setTableNumber(mockTable);
    }, 1500);
  };
  
  const handleStartScan = () => {
    setIsScanning(true);
    mockScanQR();
  };
  
  const handleViewMenu = () => {
    navigate(`/menu?table=${tableNumber}`);
  };
  
  return (
    <AppLayout>
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
        <Card className="w-full max-w-md p-6 flex flex-col items-center space-y-6">
          <div className="font-serif text-2xl font-semibold">Scan QR Code</div>
          
          <div className="w-full aspect-square rounded-xl overflow-hidden relative bg-black/5">
            {isScanning ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="relative w-3/4 h-3/4 border-2 border-cafe-primary/40 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <QrCode className="w-16 h-16 text-cafe-primary/20" />
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-cafe-primary animate-[scan_2s_ease-in-out_infinite]" />
                </div>
                <p className="text-sm text-muted-foreground mt-4">Position the QR code within the frame</p>
              </div>
            ) : tableNumber ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-cafe-accent flex items-center justify-center mb-4">
                  <span className="text-4xl font-serif font-bold text-cafe-primary">{tableNumber}</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Table {tableNumber}</h3>
                <p className="text-sm text-muted-foreground mb-6">QR code successfully scanned</p>
                <Button onClick={handleViewMenu} className="w-3/4">
                  View Menu & Order
                </Button>
              </div>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-sm text-muted-foreground mb-4">Unable to detect QR code</p>
                <Button onClick={handleStartScan} variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
              </div>
            )}
          </div>
          
          <div className="w-full space-y-4">
            {isScanning ? (
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => setIsScanning(false)}
              >
                Cancel
              </Button>
            ) : !tableNumber ? (
              <Button 
                className="w-full"
                onClick={handleStartScan}
              >
                <Camera className="w-4 h-4 mr-2" />
                Start Scanning
              </Button>
            ) : (
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handleStartScan}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Scan Again
              </Button>
            )}
            
            <p className="text-xs text-center text-muted-foreground">
              You can also browse our menu without scanning a QR code
            </p>
            
            <Button 
              variant="ghost" 
              className="w-full text-cafe-primary"
              onClick={() => navigate('/menu')}
            >
              Browse Menu
            </Button>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
};

export default ScanPage;
