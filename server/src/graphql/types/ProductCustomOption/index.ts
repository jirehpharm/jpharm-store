/* 
model product_custom_option {
  product_custom_option_id         Int                           @id @default(autoincrement())
  uuid                             String                        @unique(map: "PRODUCT_CUSTOM_OPTION_UUID_UNIQUE") @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  product_custom_option_product_id Int
  option_name                      String                        @db.VarChar
  option_type                      String                        @db.VarChar
  is_required                      Boolean                       @default(false)
  sort_order                       Int?
  product                          product                       @relation(fields: [product_custom_option_product_id], references: [product_id], onDelete: Cascade, onUpdate: NoAction)
  product_custom_option_value      product_custom_option_value[]

  @@index([product_custom_option_product_id], map: "FK_PRODUCT_CUSTOM_OPTION")
}
*/

import { objectType } from "nexus";
import { IGraphQLContext } from "../../graphql";

export const ProductCustomOption = objectType({
  name: "ProductCustomOption",
  definition(t) {
    t.nonNull.int("product_custom_option_id");
    t.nonNull.string("uuid");
    t.nonNull.int("product_custom_option_product_id");
    t.nonNull.string("option_name");
    t.nonNull.string("option_type");
    t.nonNull.boolean("is_required");
    t.int("sort_order");
    t.nonNull.field("product", {
      type: "Product",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product.findUnique({
          where: { product_id: parent.product_custom_option_product_id },
        }) as any;
      },
    });
    t.nonNull.list.nonNull.field("product_custom_option_value", {
      type: "ProductCustomOptionValue",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product_custom_option_value.findMany({
          where: { option_id: parent.product_custom_option_id },
        }) as any;
      },
    });
  },
});
