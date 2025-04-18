import { useEffect, useState } from 'react';
import { supabase } from './supabase';

const SupabaseTest = () => {
  // حالة لتخزين البيانات
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const checkConnection = async () => {
      const { data, error } = await supabase.from('menu').select('*');
      if (error) {
        console.error("❌ Error:", error);
      } else {
        console.log("✅ Data:", data);
        setMenuItems(data); // تعيين البيانات إلى الحالة
      }
    };
    checkConnection();
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      {menuItems.length === 0 ? (
        <p>No items found</p>
      ) : (
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SupabaseTest;
