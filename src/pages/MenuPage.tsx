
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronRight, Filter, Search, Plus, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import AppLayout from '@/components/layout/AppLayout';

const MenuPage = () => {
  const [searchParams] = useSearchParams();
  const tableNumber = searchParams.get('table');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock menu categories
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'lunch', name: 'Lunch' },
    { id: 'dinner', name: 'Dinner' },
    { id: 'drinks', name: 'Drinks' },
    { id: 'desserts', name: 'Desserts' },
  ];
  
  // Mock menu items
  const menuItems = [
    {
      id: 1,
      name: 'Avocado Toast',
      description: 'Smashed avocado on toasted artisan bread with cherry tomatoes and microgreens',
      price: 12.99,
      image: 'https://source.unsplash.com/random/300x200/?avocado-toast',
      category: 'breakfast',
      popular: true,
      vegan: true,
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and a deep layer of foam',
      price: 4.99,
      image: 'https://source.unsplash.com/random/300x200/?cappuccino',
      category: 'drinks',
      popular: true,
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Chicken Caesar Salad',
      description: 'Romaine lettuce with grilled chicken, parmesan cheese, and house-made Caesar dressing',
      price: 14.99,
      image: 'https://source.unsplash.com/random/300x200/?caesar-salad',
      category: 'lunch',
      rating: 4.5,
    },
    {
      id: 4,
      name: 'Chocolate Cake',
      description: 'Rich chocolate layer cake with chocolate ganache',
      price: 7.99,
      image: 'https://source.unsplash.com/random/300x200/?chocolate-cake',
      category: 'desserts',
      rating: 4.7,
    },
    {
      id: 5,
      name: 'Grilled Salmon',
      description: 'Grilled salmon fillet with lemon dill sauce and seasonal vegetables',
      price: 22.99,
      image: 'https://source.unsplash.com/random/300x200/?grilled-salmon',
      category: 'dinner',
      rating: 4.6,
    },
  ];
  
  // Filter menu items based on active category and search query
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Display table banner if a table is selected
  useEffect(() => {
    // In a real app, we would fetch the menu for this specific table/restaurant
    console.log(`Loading menu for table: ${tableNumber}`);
  }, [tableNumber]);
  
  return (
    <AppLayout>
      <div className="container pb-20">
        {tableNumber && (
          <div className="bg-cafe-accent mt-4 px-4 py-3 rounded-lg flex items-center justify-between">
            <div>
              <h3 className="font-medium">Table {tableNumber}</h3>
              <p className="text-xs text-muted-foreground">Connected to your table</p>
            </div>
            <ChevronRight className="h-5 w-5 text-cafe-primary" />
          </div>
        )}
        
        <div className="sticky top-16 pt-4 pb-2 bg-background z-10">
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search menu..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          
          <TabsList className="w-full overflow-x-auto justify-start h-auto p-0 bg-transparent space-x-1">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-1.5 rounded-full text-sm ${
                  activeCategory === category.id
                    ? 'bg-cafe-primary text-white'
                    : 'bg-accent text-foreground'
                }`}
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <Separator className="my-2" />
        </div>
        
        <div className="space-y-4 pt-2">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="flex h-24 sm:h-32">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-1/3 object-cover"
                  />
                  <CardContent className="w-2/3 p-3 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-sm">{item.name}</h3>
                          {item.popular && (
                            <div className="flex items-center mt-1">
                              <Star className="h-3 w-3 text-yellow-500 mr-1" />
                              <span className="text-xs text-yellow-500">Popular</span>
                            </div>
                          )}
                        </div>
                        <span className="font-medium">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-1">
                        {item.vegan && (
                          <Badge variant="outline" className="text-xs h-5 bg-green-50 text-green-700 border-green-200">
                            Vegan
                          </Badge>
                        )}
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
                          {item.rating}
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        <Button size="icon" variant="ghost" className="h-7 w-7">
                          <Clock className="h-4 w-4" />
                        </Button>
                        <Button size="icon" className="h-7 w-7 bg-cafe-primary text-white hover:bg-cafe-dark">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-10">
              <div className="bg-muted rounded-full p-6 mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-medium text-lg">No results found</h3>
              <p className="text-muted-foreground text-sm text-center max-w-xs mt-2">
                Try adjusting your search or filter to find what you're looking for
              </p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default MenuPage;
