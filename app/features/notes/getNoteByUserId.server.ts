import type { GetNoteByIdQuery } from "~/integrations/graphql";
import { GetNoteByIdDocument } from "~/integrations/graphql";
import { client } from "~/integrations/graphql/client";

type GetNoteByUserIdArgs = {
  id: string;
  userId: string;
};

export async function getNoteByUserId(args: GetNoteByUserIdArgs) {
  const { data } = await client.query<GetNoteByIdQuery>({
    query: GetNoteByIdDocument,
    variables: {
      ...args,
    },
    fetchPolicy: "no-cache",
  });
  return data?.noteCollection?.edges[0]?.node;
}
