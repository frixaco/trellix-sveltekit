import { relations } from 'drizzle-orm';
import { serial, text, timestamp, integer, pgTable } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	email: text('email').unique().notNull(),
	password: text('password').notNull(),
	createdAt: timestamp('createdAt').defaultNow()
});

export const usersRelations = relations(users, ({ many }) => ({
	boards: many(boards)
}));

export const boards = pgTable('boards', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	authorId: integer('authorId').notNull(),
	createdAt: timestamp('createdAt').defaultNow().notNull()
});

export const boardsRelations = relations(boards, ({ one }) => ({
	author: one(users, {
		fields: [boards.authorId],
		references: [users.id]
	})
}));
