import { Binding } from "./generated/binding";
import { ContextParameters } from "graphql-yoga/dist/types";

export interface Context extends ContextParameters {
  db: Binding;
}

export const passAuthDown = (ctx: Context) => {
  const auth = ctx.request.get("Authorization") || "";
  return {
    context: {
      jwtToken: auth.startsWith("Bearer ") ? auth.split("Bearer ")[1] : auth
    }
  };
};
