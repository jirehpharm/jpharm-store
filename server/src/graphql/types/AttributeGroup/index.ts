import { extendType, objectType } from "nexus";
import { IGraphQLContext } from "../../graphql";

export const AttributeGroup = objectType({
  name: "AttributeGroup",
  definition(t) {
    t.nonNull.int("attribute_group_id");
    t.nonNull.string("uuid");
    t.nonNull.string("group_name");
    t.string("created_at");
    t.string("updated_at");
    t.list.field("attribute_group_link", {
      type: "AttributeGroupLink",
      resolve: (parent, args, context) => {
        return context.prisma.attribute_group
          .findUnique({
            where: { attribute_group_id: parent.attribute_group_id },
          })
          .attribute_group_link();
      },
    });
    t.list.field("product", {
      type: "Product",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product.findMany({
          where: { group_id: parent.attribute_group_id },
        }) as any;
      },
    });
    t.list.field("variant_group", {
      type: "AdminUser",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.variant_group.findMany({
          where: { attribute_group_id: parent.attribute_group_id },
        }) as any;
      },
    });
  },
});

export const attributeGroupQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("listAttributeGroups", {
      type: "AttributeGroup",
      resolve(parent, args, context, info) {
        return context.prisma.attribute_group.findMany() as any[];
      },
    });
  },
});
