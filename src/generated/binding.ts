import { makeBindingClass, Options } from "graphql-binding";
import { GraphQLResolveInfo, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import schema from "../binding/index";

export interface Query {
  query: <T = Query>(
    args?: {},
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  nodeId: <T = ID_Output>(
    args?: {},
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  node: <T = Node | null>(
    args: { nodeId: ID_Output },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  allUsers: <T = UsersConnection | null>(
    args: {
      first?: Int;
      last?: Int;
      offset?: Int;
      before?: Cursor;
      after?: Cursor;
      orderBy?: UsersOrderBy[];
      condition?: UserCondition;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  userById: <T = User | null>(
    args: { id: Int },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  user: <T = User | null>(
    args: { nodeId: ID_Output },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
}

export interface Mutation {
  createUser: <T = CreateUserPayload | null>(
    args: { input: CreateUserInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateUser: <T = UpdateUserPayload | null>(
    args: { input: UpdateUserInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  updateUserById: <T = UpdateUserPayload | null>(
    args: { input: UpdateUserByIdInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteUser: <T = DeleteUserPayload | null>(
    args: { input: DeleteUserInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  deleteUserById: <T = DeleteUserPayload | null>(
    args: { input: DeleteUserByIdInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
}

export interface Subscription {}

export interface Binding {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
  request: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  delegate(
    operation: "query" | "mutation",
    fieldName: string,
    args: {
      [key: string]: any;
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options
  ): Promise<any>;
  delegateSubscription(
    fieldName: string,
    args?: {
      [key: string]: any;
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options
  ): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new (...args: any[]): T;
}

export const Binding = makeBindingClass<BindingConstructor<Binding>>({
  schema
});

/**
 * Types
 */

/*
 * Methods to use when ordering `User`.

 */
export type UsersOrderBy =
  | "NATURAL"
  | "ID_ASC"
  | "ID_DESC"
  | "NICKNAME_ASC"
  | "NICKNAME_DESC"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC";

/*
 * All input for the create `User` mutation.

 */
export interface CreateUserInput {
  clientMutationId?: String;
  user: UserInput;
}

/*
 * An input for mutations affecting `User`

 */
export interface UserInput {
  id?: Int;
  nickname: String;
}

/*
 * All input for the `updateUser` mutation.

 */
export interface UpdateUserInput {
  clientMutationId?: String;
  nodeId: ID_Input;
  userPatch: UserPatch;
}

/*
 * Represents an update to a `User`. Fields that are set will be updated.

 */
export interface UserPatch {
  id?: Int;
  nickname?: String;
}

/*
 * A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’

 */
export interface UserCondition {
  id?: Int;
  nickname?: String;
}

/*
 * All input for the `updateUserById` mutation.

 */
export interface UpdateUserByIdInput {
  clientMutationId?: String;
  userPatch: UserPatch;
  id: Int;
}

/*
 * All input for the `deleteUser` mutation.

 */
export interface DeleteUserInput {
  clientMutationId?: String;
  nodeId: ID_Input;
}

/*
 * All input for the `deleteUserById` mutation.

 */
export interface DeleteUserByIdInput {
  clientMutationId?: String;
  id: Int;
}

/*
 * An object with a globally unique `ID`.

 */
export interface Node {
  nodeId: ID_Output;
}

/*
 * The output of our update `User` mutation.

 */
export interface UpdateUserPayload {
  clientMutationId?: String;
  user?: User;
  userEdge?: UsersEdge;
}

/*
 * The output of our delete `User` mutation.

 */
export interface DeleteUserPayload {
  clientMutationId?: String;
  user?: User;
  deletedUserId?: ID_Output;
  userEdge?: UsersEdge;
}

/*
 * A connection to a list of `User` values.

 */
export interface UsersConnection {
  nodes: User[];
  edges: UsersEdge[];
  pageInfo: PageInfo;
  totalCount?: Int;
}

/*
 * The output of our create `User` mutation.

 */
export interface CreateUserPayload {
  clientMutationId?: String;
  user?: User;
  userEdge?: UsersEdge;
}

export interface User extends Node {
  nodeId: ID_Output;
  id: Int;
  nickname: String;
}

/*
 * A `User` edge in the connection.

 */
export interface UsersEdge {
  cursor?: Cursor;
  node?: User;
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: Cursor;
  endCursor?: Cursor;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
A location in a connection that can be used for resuming pagination.
*/
export type Cursor = string;
