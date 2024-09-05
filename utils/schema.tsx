import { serial, text } from "drizzle-orm/pg-core";
import { pgTable, varchar } from "drizzle-orm/pg-core";

export const AiOutput = pgTable('AiOutput', {
    id: serial('id').primaryKey(),
    formData: varchar('formData').notNull(),
    aiResponse: text('aiResponse'),
    templateSlug: varchar('templateSlug').notNull(),
    createdBy: varchar('CreatedBy').notNull(),
    createdAt: varchar('createdAt')

});