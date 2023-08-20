import type { DeleteNotesMutation } from "~/integrations/graphql";
import { DeleteNotesDocument, client } from "~/integrations/graphql";

type DeleteNotesArgs = {
  ids: string[];
  userId: string;
};

export async function deleteNotes(args: DeleteNotesArgs) {
  const { data } = await client.mutate<DeleteNotesMutation>({
    mutation: DeleteNotesDocument,
    variables: {
      ...args,
    },
  });
  return data?.deleteFromNoteCollection?.affectedCount || 0;
}
