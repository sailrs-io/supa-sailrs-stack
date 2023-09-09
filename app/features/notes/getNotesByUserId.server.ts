import { client } from "~/integrations/graphql/client";

type GetNotesByUserIdArgs = {
  userId: string;
};

export async function getNotesByUserId(args: GetNotesByUserIdArgs) {
  const result = await client.GetNotesByUserId({
    ...args,
  });
  return result?.noteCollection?.edges.map((edge) => edge?.node) ?? [];
}
