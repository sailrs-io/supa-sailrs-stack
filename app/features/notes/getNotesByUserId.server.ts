import type { GetNotesByUserIdQuery } from "~/integrations/graphql";
import { GetNotesByUserIdDocument } from "~/integrations/graphql";
import { client } from "~/integrations/graphql/client";

type GetNotesByUserIdArgs = {
  userId: string;
};

export async function getNotesByUserId(args: GetNotesByUserIdArgs) {
  const { data } = await client.query<GetNotesByUserIdQuery>({
    query: GetNotesByUserIdDocument,
    variables: {
      ...args,
    },
    fetchPolicy: "no-cache",
  });
  return data?.noteCollection?.edges.map((edge) => edge?.node) ?? [];
}
