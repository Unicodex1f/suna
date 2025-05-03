import { createBrowserClient } from "@supabase/ssr";

export const createClient = () => {
  // Get URL and key from environment variables
  let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  
  // Ensure the URL is in the proper format with http/https protocol
  if (supabaseUrl && !supabaseUrl.startsWith('http')) {
    // If it's just a hostname without protocol, add http://
    supabaseUrl = `http://${supabaseUrl}`;
  }
  
  // console.log('Supabase URL:', supabaseUrl);
  // console.log('Supabase Anon Key:', supabaseAnonKey);
  
  return createBrowserClient(
    supabaseUrl,
    supabaseAnonKey,
  );
};

// 创建一个模拟的 Supabase 客户端
export const createClientMock = () => {
  return {
    auth: {
      signIn: () => Promise.resolve({ data: null, error: null }),
      signOut: () => Promise.resolve({ error: null }),
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    },
    from: () => ({
      select: () => Promise.resolve({ data: [], error: null }),
      insert: () => Promise.resolve({ data: null, error: null }),
      update: () => Promise.resolve({ data: null, error: null }),
      delete: () => Promise.resolve({ data: null, error: null }),
    }),
  };
};
