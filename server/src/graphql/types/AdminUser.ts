import { extendType, nonNull, stringArg, objectType } from "nexus";

export const AdminUser = objectType({
  name: "AdminUser",
  definition(t) {
    t.nonNull.int("admin_user_id");
    t.nonNull.string("full_name");
    t.nonNull.string("email");
    t.nonNull.string("password");
  },
});

export const AdminQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("admin_user", {
      type: "AdminUser",
      resolve(parent, args, context) {
        return context.prisma.admin_user.findMany();
      },
    });
  },
});

export const AdminUserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createAdmins", {
      type: "AdminUser",
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
        full_name: nonNull(stringArg()),
      },

      resolve(parent, args, context) {
        const { email, password, full_name } = args;
        return context.prisma.admin_user.create({
          data: {
            email,
            password,
            full_name,
          },
        });
      },
    });
  },
});
