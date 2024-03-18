CREATE SCHEMA "trellixSchema";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trellixSchema"."boards" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"userId" integer NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trellixSchema"."users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
