import { error, json } from '@sveltejs/kit';
import { db } from '../../../hooks.server';
import { boards } from '../../../database/schema';
import { eq } from 'drizzle-orm';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	console.log('ACTION: DELETE BOARD');

	const body = await request.json();
	const name = body['name'];
	if (!name) {
		error(400, { message: "Missing 'name'" });
	}

	await db.delete(boards).where(eq(boards.name, name.toString())).execute();

	return json({ success: true });
}
