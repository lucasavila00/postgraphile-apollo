const {
  withPostGraphileContext,
  createPostGraphileSchema
} = require("postgraphile");

import { makeRemoteExecutableSchema } from "graphql-tools";
import * as fs from "fs";
import { FetcherOperation } from "graphql-tools/dist/stitching/makeRemoteExecutableSchema";
import { execute } from "graphql";
import { Pool } from "pg";
import {
  postgraphileSchemaOptions,
  connectionString,
  schemaName
} from "./config";

let _schema: any;
const getSchema = async () => {
  if (!_schema) {
    _schema = await createPostGraphileSchema(
      connectionString,
      schemaName,
      postgraphileSchemaOptions
    );
    return _schema;
  } else {
    return _schema;
  }
};

const fetcher = async (operation: FetcherOperation) => {
  const graphqlContext = operation.context
    ? operation.context.graphqlContext
    : {};

  const postGraphileContextOptions = {
    ...postgraphileSchemaOptions,
    ...graphqlContext,
    pgPool: new Pool({
      connectionString
    })
  };
  const postgraphileSchema = await getSchema();
  return withPostGraphileContext(postGraphileContextOptions, (context: any) =>
    execute(
      postgraphileSchema,
      operation.query,
      null,
      context,
      operation.variables,
      operation.operationName
    )
  );
};

const typeDefs = fs.readFileSync("./src/generated/schema.graphql", "utf-8");

const schema = makeRemoteExecutableSchema({ schema: typeDefs, fetcher });

export default schema;
