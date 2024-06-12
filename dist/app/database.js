"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const supabase_js_1 = require("@supabase/supabase-js");
exports.prisma = new client_1.PrismaClient();
const supabaseUrl = 'https://dmjmbsmlalzmlgqbewvi.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtam1ic21sYWx6bWxncWJld3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxMDExNzgsImV4cCI6MjAzMzY3NzE3OH0.PPTTP9VWzEy5RRMLpVgS2Jq5wTdnJoZrpEidD9Rrutk";
const supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
exports.default = supabase;
//# sourceMappingURL=database.js.map