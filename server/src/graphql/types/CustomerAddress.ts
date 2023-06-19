import { objectType } from "nexus";
import { Context } from "../graphql";

export const CustomerAddress = objectType({
  name: "CustomerAddress",
  definition(t) {
    t.nonNull.int("customer_address_id");
    t.nonNull.string("uuid");
    t.nonNull.int("customer_id");
    t.string("full_name");
    t.string("telephone");
    t.string("address_1");
    t.string("address_2");
    t.string("postcode");
    t.string("city");
    t.string("province");
    t.nonNull.string("country");
    t.string("created_at");
    t.string("updated_at");
    t.int("is_default");
    t.field("customer", { type: "AdminUser" });
  },
});

export const customerAddressQuery = objectType({
  name: "Query",
  definition(t) {
    t.list.field("listCustomerAddresses", {
      type: "CustomerAddress",
      resolve: (parent, args, context: Context) => {
        return context.prisma.customer_address.findMany() as any;
      },
    });
  },
});
