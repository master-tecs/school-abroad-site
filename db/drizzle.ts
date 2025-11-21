import { config } from "dotenv";
import { drizzle } from 'drizzle-orm/neon-http';

config({ path: ".env" }); // or .env.local

// Use dummy URL during build if DATABASE_URL is not set
const databaseUrl = process.env.DATABASE_URL || "postgresql://dummy:dummy@dummy:5432/dummy";

export const db = drizzle(databaseUrl);
