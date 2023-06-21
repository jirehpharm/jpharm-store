/* 

model product_custom_option_value {
  product_custom_option_value_id Int                   @id @default(autoincrement())
  uuid                           String                @unique(map: "PRODUCT_CUSTOM_OPTION_VALUE_UUID_UNIQUE") @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  option_id                      Int
  extra_price                    Decimal?              @db.Decimal(12, 4)
  sort_order                     Int?
  value                          String                @db.VarChar
  product_custom_option          product_custom_option @relation(fields: [option_id], references: [product_custom_option_id], onDelete: Cascade, onUpdate: NoAction)

  @@index([option_id], map: "FK_CUSTOM_OPTION_VALUE")
}

*/

import { objectType } from "nexus";
import { IGraphQLContext } from "../../graphql";

export const ProductCustomOptionValue = objectType({
  name: "ProductCustomOptionValue",
  definition(t) {
    t.nonNull.int("product_custom_option_value_id");
    t.nonNull.string("uuid");
    t.nonNull.int("option_id");
    t.float("extra_price");
    t.int("sort_order");
    t.nonNull.string("value");
    t.nonNull.field("product_custom_option", {
      type: "ProductCustomOption",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product_custom_option.findUnique({
          where: {
            product_custom_option_id: parent.product_custom_option_value_id,
          },
        });
      },
    });
  },
});
