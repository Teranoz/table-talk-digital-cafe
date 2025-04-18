import { useEffect } from 'react';
import { supabase } from '../supabase';

export default function SupabaseTest() {
  useEffect(() => {
    const checkTables = async () => {
      const { data, error } = await supabase.rpc('pg_catalog.pg_tables');
      console.log('Tables:', data);
      console.log('Error:', error);
    };
    checkTables();
  }, []);

  return <div>Checking tables in console...</div>;
}
