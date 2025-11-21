import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY; // Use service key for backend operations

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Test connection
export const testConnection = async () => {
  try {
    const { data, error } = await supabase
      .from('quote_requests')
      .select('count')
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned (table empty)
      throw error;
    }

    console.log('Supabase Connected Successfully');
    return true;
  } catch (error) {
    console.error('Supabase connection error:', error.message);
    return false;
  }
};

export default supabase;