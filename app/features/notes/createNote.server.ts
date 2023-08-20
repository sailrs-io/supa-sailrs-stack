import type { z } from "zod";

import type { CreateNoteMutation } from "~/integrations/graphql";
import { CreateNoteDocument, client } from "~/integrations/graphql";
import type { CreateNoteFormSchema } from "~/view/notes/CreateNoteForm";

type CreateNoteArgs = z.infer<typeof CreateNoteFormSchema> & {
  user_id: string;
};

export async function createNote(args: CreateNoteArgs) {
  const { data: result } = await client.mutate<CreateNoteMutation>({
    mutation: CreateNoteDocument,
    variables: {
      objects: [
        {
          ...args,
        },
      ],
    },
  });
  return result?.insertIntoNoteCollection?.records[0];
}
