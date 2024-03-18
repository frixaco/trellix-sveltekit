import { redirect } from '@sveltejs/kit';
import { users } from '../../database/schema';
import { eq } from 'drizzle-orm';
import { db } from '../../hooks.server';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
	console.log('LOAD: USER DATA');
	const auth = cookies.get('auth');
	if (!auth) {
		redirect(301, '/signin');
	}

	const user = await db
		.select({
			id: users.id,
			email: users.email
		})
		.from(users)
		.where(eq(users.email, auth.toString()))
		.execute();

	if (!user[0]) {
		redirect(301, '/signin');
	}

	return {
		user: user[0]
	};
}
