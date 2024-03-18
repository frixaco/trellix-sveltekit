ALTER TABLE "boards" ALTER COLUMN "createdAt" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "boards" ADD COLUMN "authorId" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "boards" DROP COLUMN IF EXISTS "userId";