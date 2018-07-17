import { MutationResolvers } from "../generated/types";
import { Context, passAuthDown } from "../utils";

export const createUser: MutationResolvers.CreateUserResolver = async (
  _,
  { input: { nickname } },
  ctx: Context,
  info
) => {
  return ctx.db.mutation.createUser(
    {
      input: {
        user: {
          nickname
        }
      }
    },
    info,
    passAuthDown(ctx)
  );
};
