
import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode, Utensils, Users, Bell, Calendar, Star, Gift, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AppLayout from '@/components/layout/AppLayout';

const Index = () => {
  const features = [
    { 
      icon: QrCode, 
      title: 'Scan QR', 
      description: 'Scan table QR code to view menu', 
      path: '/scan',
      color: 'bg-yellow-100'
    },
    { 
      icon: Utensils, 
      title: 'Browse Menu', 
      description: 'View full menu and place orders', 
      path: '/menu',
      color: 'bg-green-100'
    },
    { 
      icon: Users, 
      title: 'Split Bill', 
      description: 'Easily split the bill with friends', 
      path: '/split-bill',
      color: 'bg-blue-100'
    },
    { 
      icon: Bell, 
      title: 'Request Help', 
      description: 'Call for assistance at your table', 
      path: '/help',
      color: 'bg-red-100'
    },
    { 
      icon: Calendar, 
      title: 'Reservations', 
      description: 'Book a table in advance', 
      path: '/reservations',
      color: 'bg-purple-100'
    },
    { 
      icon: Star, 
      title: 'Feedback', 
      description: 'Rate your experience', 
      path: '/feedback',
      color: 'bg-pink-100'
    },
    { 
      icon: Gift, 
      title: 'Loyalty', 
      description: 'View your rewards points', 
      path: '/loyalty',
      color: 'bg-orange-100'
    },
    { 
      icon: Clock, 
      title: 'Pre-order', 
      description: 'Order before arriving', 
      path: '/pre-order',
      color: 'bg-indigo-100'
    }
  ];

  // Mock promotions
  const promotions = [
    {
      id: 1,
      title: 'Happy Hour',
      description: '20% off all drinks from 3-5pm',
      image: 'https://source.unsplash.com/random/300x200/?coffee',
      expire: 'Today only'
    },
    {
      id: 2,
      title: 'Weekend Special',
      description: 'Buy one get one free on all pastries',
      image: 'https://source.unsplash.com/random/300x200/?pastry',
      expire: 'Sat-Sun'
    }
  ];

  return (
    <AppLayout>
      <div className="container space-y-8 pb-20">
        {/* Hero Section */}
        <section className="relative rounded-xl overflow-hidden h-48 mb-8">
          <img 
            src="https://source.unsplash.com/random/800x600/?cafe" 
            alt="Cafe" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cafe-dark/80 to-cafe-dark/40" />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h1 className="text-white font-serif text-2xl font-semibold mb-2">Welcome to SmartCafe</h1>
            <p className="text-white/80 text-sm mb-4">Enhancing your dining experience</p>
            <Button size="sm" className="w-fit bg-white text-cafe-dark hover:bg-white/90">
              <QrCode className="h-4 w-4 mr-2" />
              Scan QR Code
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section>
          <h2 className="font-serif text-xl font-semibold mb-4">Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature) => (
              <Link key={feature.path} to={feature.path}>
                <Card className="h-full hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className={`${feature.color} p-3 rounded-full mb-3`}>
                      <feature.icon className="h-6 w-6 text-cafe-primary" />
                    </div>
                    <h3 className="font-medium text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Promotions Carousel */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-xl font-semibold">Promotions</h2>
            <Button variant="link" size="sm" className="text-cafe-primary">
              View All
            </Button>
          </div>
          <div className="flex overflow-x-auto pb-4 space-x-4 -mx-4 px-4">
            {promotions.map((promo) => (
              <div key={promo.id} className="flex-none w-72">
                <Card className="overflow-hidden">
                  <img 
                    src={promo.image} 
                    alt={promo.title}
                    className="h-36 w-full object-cover"
                  />
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{promo.title}</h3>
                      <span className="text-xs bg-cafe-accent text-cafe-primary px-2 py-1 rounded-full">
                        {promo.expire}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{promo.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="grid grid-cols-2 gap-4">
          <Button size="lg" className="bg-cafe-primary h-auto py-4" asChild>
            <Link to="/reservations">
              <Calendar className="h-5 w-5 mr-2" />
              Book a Table
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-auto py-4" asChild>
            <Link to="/menu">
              <Utensils className="h-5 w-5 mr-2" />
              View Menu
            </Link>
          </Button>
        </section>
      </div>
    </AppLayout>
  );
};

export default Index;
