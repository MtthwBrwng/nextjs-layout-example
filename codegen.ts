import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    "amplify/backend/api/nextjslayoutexample/build/schema.graphql",
    "amplify/backend/api/nextjslayoutexample/_aws.graphql",
  ],
  documents: ["src/**/*.graphql"],
  generates: {
    "src/graphql/generated.ts": {
      plugins: [{add: {content: ["// @ts-nocheck"]}},"typescript", "typescript-operations", "typescript-react-query"],
      config: {
        omitOperationSuffix: true,
        addInfiniteQuery: true,
        namingConvention: {
          typeNames: "pascal-case#pascalCase",
          transformUnderscore: true,
        },
        fetcher: {
          func: '../utils/fetcher#fetcher',
        }
      }
    }
  },
};

export default config;
