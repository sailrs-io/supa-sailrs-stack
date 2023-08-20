// https://the-guild.dev/graphql/codegen/docs/config-reference/codegen-config

import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      [`${process.env.SUPABASE_URL}/graphql/v1`]: {
        headers: {
          apiKey: `${process.env.SUPABASE_SERVICE_ROLE}`,
        },
      },
    },
  ],
  documents: ["app/**/*.{ts,tsx,graphql}"],
  generates: {
    "app/integrations/graphql/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "@graphql-codegen/typescript-generic-sdk",
      ],
      config: {
        scalars: {
          JSONString: "string",
          UUID: "string",
          Metadata: "Record<string, string>",
          DateTime: "string",
        },
        dedupeOperationSuffix: true,
        enumsAsTypes: true,
      },
    },
    "graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
