import type { z } from "zod";

import { client } from "~/integrations/graphql";
import type { CreateNoteFormSchema } from "~/view/notes/CreateNoteForm";

type CreateNoteArgs = z.infer<typeof CreateNoteFormSchema> & {
  user_id: string;
};

export async function createNote(args: CreateNoteArgs) {
  const result = await client.CreateNote({
    objects: args,
  });
  return result?.insertIntoNoteCollection?.records[0];
}
