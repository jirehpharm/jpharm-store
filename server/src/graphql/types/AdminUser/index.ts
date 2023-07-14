// Importing the `objectType` function from the `nexus` module
import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";
import { IGraphQLContext } from "../../graphql";

export const AdminUser = objectType({
  name: "AdminUser",
  definition(t) {
    t.nonNull.int("admin_user_id");
    t.nonNull.string("uuid");
    t.nonNull.string("full_name");
    t.nonNull.string("email");
    t.nonNull.string("password");
    t.nonNull.boolean("status");
    t.string("created_at");
    t.string("updated_at");
  },
});

export const adminQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("listAdminUsers", {
      type: "AdminUser",
      resolve(parent, args, context: IGraphQLContext, info) {
        return context.prisma.admin_user.findMany() as any;
      },
    });
    t.nonNull.field("getAdminById", {
      type: "AdminUser",
      args: {
        id: nonNull(intArg()),
      },
      resolve(parent, args, context: IGraphQLContext, info) {
        return context.prisma.admin_user.findUnique({
          where: { admin_user_id: args.id },
        }) as any;
      },
    });
  },
});
