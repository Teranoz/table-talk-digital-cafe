
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Check, AlertTriangle, Info, Bell, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AppLayout from '@/components/layout/AppLayout';
import { toast } from 'sonner';

const HelpPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const tableNumber = searchParams.get('table') || 'Not specified';
  const [activeRequest, setActiveRequest] = useState<string | null>(null);
  
  // Define help request types
  const helpRequests = [
    { 
      id: 'waiter', 
      title: 'Call Waiter', 
      description: 'Request assistance from the staff',
      icon: Bell,
      color: 'bg-blue-100 text-blue-700',
      urgency: 'normal'
    },
    { 
      id: 'water', 
      title: 'Water Please', 
      description: 'Request water for your table',
      icon: Info,
      color: 'bg-cyan-100 text-cyan-700',
      urgency: 'low'
    },
    { 
      id: 'problem', 
      title: 'Issue with Order', 
      description: 'Report a problem with your food or drinks',
      icon: AlertTriangle,
      color: 'bg-red-100 text-red-700',
      urgency: 'high'
    },
    { 
      id: 'bill', 
      title: 'Request Bill', 
      description: 'Ask for your check to pay',
      icon: Check,
      color: 'bg-green-100 text-green-700',
      urgency: 'normal'
    },
  ];
  
  const handleRequestHelp = (requestId: string) => {
    setActiveRequest(requestId);
    
    // In a real app, this would send the request to the server
    toast.success('Help request submitted', {
      description: `Your request has been sent to the staff. Someone will assist you shortly.`,
      duration: 3000,
    });
    
    // Simulate request being handled after a few seconds
    setTimeout(() => {
      setActiveRequest(null);
      toast.success('Request completed', {
        description: 'Your request has been handled by the staff.',
      });
    }, 5000);
  };
  
  const cancelRequest = () => {
    setActiveRequest(null);
    toast.info('Request canceled', {
      description: 'Your help request has been canceled.',
    });
  };
  
  return (
    <AppLayout>
      <div className="container pb-20">
        <div className="py-4">
          <h1 className="font-serif text-2xl font-semibold mb-2">Request Assistance</h1>
          <p className="text-muted-foreground">
            Table #{tableNumber} • Request assistance from our staff
          </p>
        </div>
        
        <div className="grid gap-4">
          {helpRequests.map((request) => (
            <Card key={request.id} className={`overflow-hidden ${activeRequest === request.id ? 'ring-2 ring-cafe-primary' : ''}`}>
              <CardContent className="p-0">
                <button
                  onClick={() => handleRequestHelp(request.id)}
                  disabled={!!activeRequest}
                  className="w-full h-full p-4 flex items-center text-left focus:outline-none"
                >
                  <div className={`rounded-full p-3 mr-4 ${request.color}`}>
                    <request.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{request.title}</h3>
                    <p className="text-sm text-muted-foreground">{request.description}</p>
                    {activeRequest === request.id && (
                      <div className="mt-2 flex items-center text-xs text-cafe-primary">
                        <div className="animate-pulse mr-2 h-2 w-2 rounded-full bg-cafe-primary"></div>
                        Request sent • Staff notified
                      </div>
                    )}
                  </div>
                  {activeRequest === request.id ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        cancelRequest();
                      }}
                      className="p-2 rounded-full hover:bg-red-50"
                    >
                      <X className="h-5 w-5 text-red-500" />
                    </button>
                  ) : (
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h3 className="font-medium mb-2">Need Something Else?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            For custom requests or immediate assistance, you can also call our staff directly.
          </p>
          <Button variant="outline" className="w-full">Contact Staff Directly</Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default HelpPage;
