import { GraphQLClient } from "graphql-request";

import { SUPABASE_ANON_PUBLIC, SUPABASE_URL } from "~/utils/env";

import { getSdk } from "./types";

/**
 * Enabled you to query a graphql endpoint
 */
const _client = new GraphQLClient(`${SUPABASE_URL}/graphql/v1`, {
  headers: {
    Authorization: `Bearer ${SUPABASE_ANON_PUBLIC}`,
    apiKey: SUPABASE_ANON_PUBLIC,
  },
});

export const client = getSdk(_client);
