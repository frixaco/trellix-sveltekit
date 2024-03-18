import { fail, json, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { db } from '../../hooks.server';
import { boards } from '../../database/schema';

/** @type {import('./$types').PageServerLoad} */
export async function load({ parent }) {
	console.log('LOAD: USER BOARDS');

	const parentData = await parent();

	const userBoards = await db
		.select()
		.from(boards)
		.where(eq(boards.authorId, parentData.user.id))
		.execute();

	return {
		boards: userBoards
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	signout: async ({ cookies }) => {
		console.log('ACTION: SIGN OUT');

		cookies.delete('auth', {
			path: '/'
		});

		redirect(301, '/signin');
	},
	createBoard: async ({ request }) => {
		console.log('ACTION: CREATE BOARD');

		const formData = await request.formData();
		const name = formData.get('boardName');
		if (!name) {
			return;
		}
		const authorId = formData.get('authorId');
		if (!authorId) {
			return;
		}

		const newBoard = await db
			.insert(boards)
			.values({
				name: name.toString(),
				authorId: parseInt(authorId.toString(), 10)
			})
			.returning({
				name: boards.name,
				userId: boards.authorId
			})
			.execute();

		return newBoard[0];
	}
};
