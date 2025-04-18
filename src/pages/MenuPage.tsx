import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      const { data, error } = await supabase.from('menu').select('*');
      if (error) {
        console.error('❌ Error fetching menu:', error);
      } else {
        setMenuItems(data);
      }
      setLoading(false);
    };
    fetchMenu();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      {loading ? (
        <p>Loading menu...</p>
      ) : menuItems.length === 0 ? (
        <p>No menu items found.</p>
      ) : (
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.id} className="border p-4 rounded shadow">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-md font-medium mt-2">${item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuPage;
