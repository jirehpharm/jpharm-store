import { extendType, objectType } from "nexus";
import { IGraphQLContext } from "../../graphql";

export const CustomerGroup = objectType({
  name: "CustomerGroup",
  definition(t) {
    t.nonNull.int("customer_group_id");
    t.nonNull.string("uuid");
    t.nonNull.string("group_name");
    t.string("created_at");
    t.string("updated_at");
    t.list.field("customer", { type: "CustomerGroup" });
  },
});

export const customerGroupQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("listCustomerGroups", {
      type: "CustomerGroup",
      resolve(parent, args, context: IGraphQLContext) {
        return context.prisma.customer_group.findMany() as any;
      },
    });
  },
});
