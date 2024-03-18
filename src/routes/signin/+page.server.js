import { eq } from 'drizzle-orm';
import { users } from '../../database/schema';
import { db } from '../../hooks.server';
import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		const email = data.get('email');
		if (!email) {
			return fail(400, { email, missing: true });
		}

		const password = data.get('password');
		if (!password) {
			return fail(400, { password, missing: true });
		}

		const response = await db.select().from(users).where(eq(users.email, email.toString()));

		if (response.length === 0) {
			return fail(400, { email, notFound: true });
		}

		cookies.set('auth', email.toString(), {
			path: '/',
			domain: 'localhost',
			maxAge: 60 * 5
		});

		redirect(301, '/home');
	}
};
