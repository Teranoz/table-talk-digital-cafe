import { useEffect } from 'react';
import { supabase } from '../supabase';

export default function SupabaseTest() {
  useEffect(() => {
    const checkConnection = async () => {
      console.log('Trying to fetch data from Supabase...');
      const { data, error } = await supabase.from('menu').select('*');
      console.log('Data:', data);
      console.log('Error:', error);
    };
    checkConnection();
  }, []);

  return <div>Check the browser console for results</div>;
}
