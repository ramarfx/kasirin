"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const supabase_js_1 = require("@supabase/supabase-js");
exports.prisma = new client_1.PrismaClient();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
exports.default = supabase;
//# sourceMappingURL=database.js.map