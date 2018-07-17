/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

type Resolver<Result, Args = any> = (
  parent: any,
  args: Args,
  context: any,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

/** A location in a connection that can be used for resuming pagination. */
export type Cursor = any;
/** An object with a globally unique `ID`. */
export interface Node {
  nodeId: string /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */;
}

export interface Query {
  me?: User | null;
}

export interface User extends Node {
  nodeId: string /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */;
  id: number;
  nickname: string;
}

export interface Mutation {
  createUser?: CreateUserPayload | null;
}
/** The output of our create `User` mutation. */
export interface CreateUserPayload {
  clientMutationId?:
    | string
    | null /** The exact same `clientMutationId` that was provided in the mutation input,unchanged and unused. May be used by a client to track mutations. */;
  user?: User | null /** The `User` that was created by this mutation. */;
  userEdge?: UsersEdge | null /** An edge for our `User`. May be used by Relay 1. */;
}
/** A `User` edge in the connection. */
export interface UsersEdge {
  cursor?: Cursor | null /** A cursor for use in pagination. */;
  node?: User | null /** The `User` at the end of the edge. */;
}

export interface CreateUserInput {
  nickname: string;
}
export interface CreateUserMutationArgs {
  input: CreateUserInput;
}
export interface UserEdgeCreateUserPayloadArgs {
  orderBy?:
    | UsersOrderBy[]
    | null /** The method to use when ordering `User`. */;
}
/** Methods to use when ordering `User`. */
export type UsersOrderBy =
  | "NATURAL"
  | "ID_ASC"
  | "ID_DESC"
  | "NICKNAME_ASC"
  | "NICKNAME_DESC"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC";

export namespace QueryResolvers {
  export interface Resolvers {
    me?: MeResolver;
  }

  export type MeResolver = Resolver<User | null>;
}
export namespace UserResolvers {
  export interface Resolvers {
    nodeId?: NodeIdResolver /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */;
    id?: IdResolver;
    nickname?: NicknameResolver;
  }

  export type NodeIdResolver = Resolver<string>;
  export type IdResolver = Resolver<number>;
  export type NicknameResolver = Resolver<string>;
}
export namespace MutationResolvers {
  export interface Resolvers {
    createUser?: CreateUserResolver;
  }

  export type CreateUserResolver = Resolver<
    CreateUserPayload | null,
    CreateUserArgs
  >;
  export interface CreateUserArgs {
    input: CreateUserInput;
  }
} /** The output of our create `User` mutation. */
export namespace CreateUserPayloadResolvers {
  export interface Resolvers {
    clientMutationId?: ClientMutationIdResolver /** The exact same `clientMutationId` that was provided in the mutation input,unchanged and unused. May be used by a client to track mutations. */;
    user?: UserResolver /** The `User` that was created by this mutation. */;
    userEdge?: UserEdgeResolver /** An edge for our `User`. May be used by Relay 1. */;
  }

  export type ClientMutationIdResolver = Resolver<string | null>;
  export type UserResolver = Resolver<User | null>;
  export type UserEdgeResolver = Resolver<UsersEdge | null, UserEdgeArgs>;
  export interface UserEdgeArgs {
    orderBy?:
      | UsersOrderBy[]
      | null /** The method to use when ordering `User`. */;
  }
} /** A `User` edge in the connection. */
export namespace UsersEdgeResolvers {
  export interface Resolvers {
    cursor?: CursorResolver /** A cursor for use in pagination. */;
    node?: NodeResolver /** The `User` at the end of the edge. */;
  }

  export type CursorResolver = Resolver<Cursor | null>;
  export type NodeResolver = Resolver<User | null>;
}
