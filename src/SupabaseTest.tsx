import { useEffect } from 'react';
import { supabase } from './supabase'; // أو عدّل المسار حسب مكان الملف

export default function SupabaseTest() {
  useEffect(() => {
    const checkConnection = async () => {
      const { data, error } = await supabase.from('menu').select('*');
      console.log('Data:', data);
      console.log('Error:', error);
    };
    checkConnection();
  }, []);

  return <div>Check the browser console</div>;
}
