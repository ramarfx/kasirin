import { PrismaClient } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";

export const prisma = new PrismaClient();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase