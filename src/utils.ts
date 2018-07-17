import { Binding } from "./generated/binding";
import { ContextParameters } from "graphql-yoga/dist/types";

export interface Context extends ContextParameters {
  db: Binding;
}

export const passAuthDown = (ctx: Context) => {
  return {
    context: {
      jwtToken: ctx.request.get("Authorization")
    }
  };
};
