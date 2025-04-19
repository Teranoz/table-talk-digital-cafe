import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/components/layout/AppLayout';
import { format } from 'date-fns';
import { toast } from "sonner";

const ReservationsPage = () => {
  const [activeTab, setActiveTab] = useState<string>('new');  {/* القيمة الافتراضية لـ activeTab هنا */}
  
  // باقية الكود هنا
  
  return (
    <AppLayout>
      <div className="container pb-20">
        <div className="py-4">
          <h1 className="font-serif text-2xl font-semibold mb-2">Table Reservations</h1>
          <p className="text-muted-foreground">
            Book a table in advance or manage your reservations
          </p>
        </div>
        
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full"> {/* تحديد القيمة الافتراضية هنا */}
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          
          <TabsContent value="new">
            {/* محتوى التبويب "New" */}
          </TabsContent>
          <TabsContent value="upcoming">
            {/* محتوى التبويب "Upcoming" */}
          </TabsContent>
          <TabsContent value="past">
            {/* محتوى التبويب "Past" */}
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default ReservationsPage;
