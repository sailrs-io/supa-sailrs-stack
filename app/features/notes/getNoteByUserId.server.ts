import { client } from "~/integrations/graphql/client";

type GetNoteByUserIdArgs = {
  id: string;
  userId: string;
};

export async function getNoteByUserId(args: GetNoteByUserIdArgs) {
  const result = await client.GetNoteById({
    ...args,
  });
  return result?.noteCollection?.edges[0]?.node;
}
