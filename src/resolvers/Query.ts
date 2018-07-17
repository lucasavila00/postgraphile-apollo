import { QueryResolvers } from "../generated/types";
import { Context, passAuthDown } from "../utils";

const authServiceGetId = (ctx: Context) => 1;
export const me: QueryResolvers.MeResolver = async (
  _,
  __,
  ctx: Context,
  info
) => {
  const id = authServiceGetId(ctx);
  return ctx.db.query.userById({ id }, info, passAuthDown(ctx));
};
