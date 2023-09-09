import { client } from "~/integrations/graphql";

type DeleteNotesArgs = {
  ids: string[];
  userId: string;
};

export async function deleteNotes(args: DeleteNotesArgs) {
  const result = await client.DeleteNotes({
    ...args,
  });
  return result?.deleteFromNoteCollection?.affectedCount || 0;
}
