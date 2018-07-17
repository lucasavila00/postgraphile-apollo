import { GraphQLServer } from "graphql-yoga";
import { Binding } from "./generated/binding";
import resolvers from "./resolvers";
import { ContextParameters } from "graphql-yoga/dist/types";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: resolvers as any, //TODO remove any
  context: (req: ContextParameters) => ({
    ...req,
    db: new Binding()
  })
});

server.start(() => console.log(`Server is running on 4000`));
