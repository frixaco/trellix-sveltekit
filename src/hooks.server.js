import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

import 'dotenv/config';
import * as schema from './database/schema';

const sql = postgres(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });
