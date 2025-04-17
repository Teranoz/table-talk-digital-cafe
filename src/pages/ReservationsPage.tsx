
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
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>('');
  const [guests, setGuests] = useState<string>('2');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('new');
  
  // Mock reservations
  const pastReservations = [
    {
      id: 1,
      date: '2023-03-15',
      time: '19:00',
      guests: 4,
      status: 'completed',
      restaurantName: 'Café Moderne'
    },
    {
      id: 2, 
      date: '2023-02-20',
      time: '12:30',
      guests: 2,
      status: 'completed',
      restaurantName: 'Café Moderne'
    }
  ];
  
  const upcomingReservations = [
    {
      id: 3,
      date: '2023-04-25',
      time: '18:00',
      guests: 3,
      status: 'confirmed',
      restaurantName: 'Café Moderne'
    }
  ];
  
  // Generate time slots
  const timeSlots = [];
  for (let hour = 10; hour <= 22; hour++) {
    const formattedHour = hour.toString().padStart(2, '0');
    timeSlots.push(`${formattedHour}:00`);
    timeSlots.push(`${formattedHour}:30`);
  }
  
  // Generate guest options
  const guestOptions = Array.from({ length: 10 }, (_, i) => (i + 1).toString());
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!date || !time || !guests || !name || !phone) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // In a real app, this would send the reservation request to the API
    toast.success('Reservation request submitted', {
      description: `Your table for ${guests} on ${format(date, 'PP')} at ${time} has been reserved.`,
    });
    
    // Reset form
    setDate(undefined);
    setTime('');
    setGuests('2');
    setName('');
    setPhone('');
    setNotes('');
    
    // Switch to upcoming tab
    setActiveTab('upcoming');
  };
  
  return (
    <AppLayout>
      <div className="container pb-20">
        <div className="py-4">
          <h1 className="font-serif text-2xl font-semibold mb-2">Table Reservations</h1>
          <p className="text-muted-foreground">
            Book a table in advance or manage your reservations
          </p>
        </div>
        
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          
          <TabsContent value="new">
            <form onSubmit={handleSubmit} className="space-y-6 py-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal mt-1"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP') : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="time">Time</Label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger id="time" className="mt-1">
                        <Clock className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="guests">Guests</Label>
                    <Select value={guests} onValueChange={setGuests}>
                      <SelectTrigger id="guests" className="mt-1">
                        <Users className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="Number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {guestOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option} {parseInt(option) === 1 ? 'person' : 'people'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="notes">Special Requests (Optional)</Label>
                  <Input
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div className="flex items-center space-x-2 pt-2">
                  <input type="checkbox" id="preorder" className="rounded text-cafe-primary" />
                  <Label htmlFor="preorder" className="text-sm cursor-pointer">
                    I'd like to pre-order food
                  </Label>
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-cafe-primary">
                Confirm Reservation
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="upcoming">
            {upcomingReservations.length > 0 ? (
              <div className="space-y-4 py-4">
                {upcomingReservations.map((reservation) => (
                  <div key={reservation.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{reservation.restaurantName}</h3>
                        <div className="flex items-center space-x-4 mt-2 text-sm">
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{reservation.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{reservation.time}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{reservation.guests} guests</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                        {reservation.status}
                      </div>
                    </div>
                    <Separator className="my-3" />
                    <div className="flex justify-between">
                      <Button variant="outline" size="sm">Modify</Button>
                      <Button variant="destructive" size="sm">Cancel</Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-10">
                <div className="bg-muted rounded-full p-6 mb-4">
                  <UtensilsCrossed className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-medium text-lg">No upcoming reservations</h3>
                <p className="text-muted-foreground text-sm text-center max-w-xs mt-2 mb-4">
                  You don't have any upcoming reservations. Make a new one now.
                </p>
                <Button onClick={() => setActiveTab('new')}>Make a Reservation</Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="past">
            {pastReservations.length > 0 ? (
              <div className="space-y-4 py-4">
                {pastReservations.map((reservation) => (
                  <div key={reservation.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{reservation.restaurantName}</h3>
                        <div className="flex items-center space-x-4 mt-2 text-sm">
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{reservation.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{reservation.time}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{reservation.guests} guests</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {reservation.status}
                      </div>
                    </div>
                    <Separator className="my-3" />
                    <div className="flex justify-end">
                      <Button variant="ghost" size="sm" className="text-cafe-primary">
                        Book Again
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-10">
                <div className="bg-muted rounded-full p-6 mb-4">
                  <UtensilsCrossed className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-medium text-lg">No past reservations</h3>
                <p className="text-muted-foreground text-sm text-center max-w-xs mt-2">
                  Your reservation history will appear here.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default ReservationsPage;
