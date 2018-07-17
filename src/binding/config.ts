const { defaultPlugins } = require("graphile-build-pg");
const {
  defaultPlugins: defaultGraphileBuildPlugins,
  MutationPayloadQueryPlugin
} = require("graphile-build");

const defaultPluginsToChange = defaultGraphileBuildPlugins.filter(
  (p: any) => p !== MutationPayloadQueryPlugin
);

export const postgraphileSchemaOptions = {
  ignoreRBAC: false,
  pgDefaultRole: "example_role",
  jwtSecret: "secret",
  jwtPgTypeIdentifier: "example.jwt_token",
  replaceAllPlugins: [...defaultPluginsToChange, ...defaultPlugins]
};
export const connectionString = "postgres://example_role:xyz@localhost:5432";
export const schemaName = "example";
