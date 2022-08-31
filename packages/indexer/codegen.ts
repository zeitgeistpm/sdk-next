import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://processor.bsr.zeitgeist.pm/graphql",
  documents: ["./src/**/*.ts"],
  generates: {
    "./src/graphql/generated.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};

export default config;
