import 'dotenv/config';

/** @type {import('drizzle-kit').Config} */
export default {
	schema: './src/database/schema.js',
	out: './src/database/migrations',
	driver: 'pg',
	dbCredentials: {
		connectionString: process.env.DATABASE_URL
	}
};
