import { PrismaClient } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";

export const prisma = new PrismaClient();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

console.log(process.env);


const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase