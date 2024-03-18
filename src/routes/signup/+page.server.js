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

		const userExists = await db.select().from(users).where(eq(users.email, email.toString()));

		if (userExists.length > 0) {
			return fail(400, { email, exists: true });
		}

		const response = await db
			.insert(users)
			.values({
				email: email.toString(),
				password: password.toString()
			})
			.returning({
				email: users.email
			})
			.execute();

		if (!response[0]) {
			return fail(500, { error: 'Failed to create user' });
		}

		cookies.set('auth', email.toString(), {
			path: '/',
			domain: 'localhost',
			maxAge: 60 * 5
		});

		redirect(301, '/home');
	}
};
