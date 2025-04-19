
import { useEffect, useState } from 'react';
import { supabase } from '../integrations/supabase/client';
import AppLayout from '@/components/layout/AppLayout';

const SupabaseTest = () => {
  // State to store data
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const checkConnection = async () => {
      const { data, error } = await supabase.from('menu').select('*');
      if (error) {
        console.error("❌ Error:", error);
      } else {
        console.log("✅ Data:", data);
        setMenuItems(data || []); // Set data to state, use empty array as fallback
      }
    };
    checkConnection();
  }, []);

  return (
    <AppLayout>
      <div className="container p-4">
        <h1 className="text-2xl font-serif font-semibold mb-4">Menu</h1>
        {menuItems.length === 0 ? (
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
