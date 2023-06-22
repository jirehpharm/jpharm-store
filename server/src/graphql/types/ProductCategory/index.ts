/* 
model product_category {
  product_category_id Int      @id @default(autoincrement())
  category_id         Int
  product_id          Int
  category            category @relation(fields: [category_id], references: [category_id], onDelete: Cascade, onUpdate: NoAction)
  product             product  @relation(fields: [product_id], references: [product_id], onDelete: Cascade, onUpdate: NoAction)

  @@unique([category_id, product_id], map: "PRODUCT_CATEGORY_UNIQUE")
  @@index([category_id], map: "FK_CATEGORY_PRODUCT_LINK")
  @@index([product_id], map: "FK_PRODUCT_CATEGORY_LINK")
}
*/

import { extendType, objectType } from "nexus";
import { IGraphQLContext } from "../../graphql";

export const ProductCategory = objectType({
  name: "ProductCategory",
  definition(t) {
    t.nonNull.int("product_category_id");
    t.nonNull.int("category_id");
    t.nonNull.int("product_id");
    t.field("category", {
      type: "Category",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.category.findUnique({
          where: { category_id: parent.category_id },
        }) as any;
      },
    });
    t.field("product", {
      type: "Product",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product.findUnique({
          where: { product_id: parent.product_id },
        }) as any;
      },
    });
  },
});

export const productCategoryQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("listProductCategories", {
      type: "ProductCategory",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product_category.findMany();
      },
    });
  },
});
