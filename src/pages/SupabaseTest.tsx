
import { useEffect, useState } from 'react';
import { supabase } from '../integrations/supabase/client';
import AppLayout from '@/components/layout/AppLayout';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

const SupabaseTest = () => {
  // State to store data
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        setLoading(true);
        // Using a more typesafe approach with generic types
        const { data, error } = await supabase
          .from('menu')
          .select('*')
          .returns<MenuItem[]>();
        
        if (error) {
          console.error("❌ Error:", error);
          setError(error.message);
        } else {
          console.log("✅ Data:", data);
          setMenuItems(data || []);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };
    
    checkConnection();
  }, []);

  return (
    <AppLayout>
      <div className="container p-4">
        <h1 className="text-2xl font-serif font-semibold mb-4">Menu</h1>
        
        {loading && <p className="text-muted-foreground">Loading menu items...</p>}
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            <p>Error: {error}</p>
            <p className="text-sm mt-1">Note: Make sure you've created a 'menu' table in your Supabase project.</p>
          </div>
        )}
        
        {!loading && !error && menuItems.length === 0 ? (
          <p className="text-muted-foreground">No items found</p>
        ) : (
          <ul className="grid gap-4 md:grid-cols-2">
            {menuItems.map((item) => (
              <li key={item.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium">{item.name}</h3>
                <p className="text-muted-foreground mt-1">{item.description}</p>
                <p className="text-cafe-primary font-medium mt-2">Price: ${item.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </AppLayout>
  );
};

export default SupabaseTest;
