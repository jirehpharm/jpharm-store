/* 
model category {
  category_id          Int                   @id @default(autoincrement())
  uuid                 String                @unique(map: "CATEGORY_UUID_UNIQUE") @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  status               Boolean
  parent_id            Int?
  include_in_nav       Boolean
  position             Int?                  @db.SmallInt
  created_at           DateTime?             @default(now()) @db.Timestamptz(6)
  updated_at           DateTime?             @default(now()) @db.Timestamptz(6)
  category_description category_description?
  product_category     product_category[]
}
*/

import { extendType, objectType } from "nexus";
import { IGraphQLContext } from "../../graphql";

export const Category = objectType({
  name: "Category",
  definition(t) {
    t.nonNull.int("category_id");
    t.nonNull.string("uuid");
    t.nonNull.boolean("status");
    t.int("parent_id");
    t.nonNull.boolean("include_in_nav");
    t.int("position");
    t.string("created_at");
    t.string("updated_at");
    t.field("category_description", {
      type: "CategoryDescription",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.category_description.findFirst({
          where: { category_description_category_id: parent.category_id },
        }) as any;
      },
    });
    t.field("product_category", {
      type: "ProductCategory",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product_category.findMany({
          where: { category_id: parent.category_id },
        }) as any;
      },
    });
  },
});

export const categoryQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("listCategories", {
      type: "Category",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.category.findMany() as any;
      },
    });
  },
});
