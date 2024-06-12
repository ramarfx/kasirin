import { PrismaClient } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";

export const prisma = new PrismaClient();

const supabaseUrl = 'https://dmjmbsmlalzmlgqbewvi.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtam1ic21sYWx6bWxncWJld3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxMDExNzgsImV4cCI6MjAzMzY3NzE3OH0.PPTTP9VWzEy5RRMLpVgS2Jq5wTdnJoZrpEidD9Rrutk";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase