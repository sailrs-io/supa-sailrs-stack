import { ApolloClient, InMemoryCache } from "@apollo/client";

import { SUPABASE_ANON_PUBLIC, SUPABASE_URL } from "~/utils/env";

export const client = new ApolloClient({
  uri: `${SUPABASE_URL}/graphql/v1`,
  cache: new InMemoryCache(),
  headers: {
    apiKey: `${SUPABASE_ANON_PUBLIC}`,
    Authorization: `Bearer ${SUPABASE_ANON_PUBLIC}`,
  },
});
