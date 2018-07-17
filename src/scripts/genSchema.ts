import {
  postgraphileSchemaOptions,
  connectionString,
  schemaName
} from "../binding/config";

const { postgraphile } = require("postgraphile");

postgraphile(connectionString, schemaName, {
  ...postgraphileSchemaOptions,
  exportGqlSchemaPath: "./src/generated/schema.graphql"
});
