/* 
model product_attribute_value_index {
  product_attribute_value_index_id Int               @id @default(autoincrement())
  uuid                             String            @unique(map: "PRODUCT_ATTRIBUTE_VALUE_UUID_UNIQUE") @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  product_id                       Int
  attribute_id                     Int
  option_id                        Int?
  option_text                      String?
  attribute                        attribute         @relation(fields: [attribute_id], references: [attribute_id], onDelete: Cascade, onUpdate: NoAction)
  attribute_option                 attribute_option? @relation(fields: [option_id], references: [attribute_option_id], onDelete: Cascade, onUpdate: NoAction)
  product                          product           @relation(fields: [product_id], references: [product_id], onDelete: Cascade, onUpdate: NoAction)

  @@unique([product_id, attribute_id, option_id], map: "OPTION_VALUE_UNIQUE")
  @@index([option_id], map: "FK_ATTRIBUTE_OPTION_VALUE_LINK")
  @@index([attribute_id], map: "FK_ATTRIBUTE_VALUE_LINK")
  @@index([product_id], map: "FK_PRODUCT_ATTRIBUTE_LINK")
}
*/

import { extendType, objectType } from "nexus";
import { IGraphQLContext } from "../../graphql";

export const ProductAttributeValueIndex = objectType({
  name: "ProductAttributeValueIndex",
  definition(t) {
    t.nonNull.int("product_attribute_value_index_id");
    t.nonNull.string("uuid");
    t.int("product_id");
    t.int("attribute_id");
    t.int("option_id");
    t.string("option_text");
    // t.field("attribute", {
    //   type: "Attribute",
    //   resolve: (parent, args, context: IGraphQLContext) => {
    //     return context.prisma.attribute.findFirst({
    //       where: { attribute_id: parent.attribute_id },
    //     });
    //   },
    // });
    // t.field("attribute_option", {
    //   type: "AttributeOption",
    //   resolve: (parent, args, context: IGraphQLContext) => {
    //     return context.prisma.attribute_option.findFirst({
    //       where: { attribute_option_id: parent.option_id },
    //     });
    //   },
    // });
    t.field("product", {
      type: "Product",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product.findFirst({
          where: { product_id: parent.product_id },
        }) as any;
      },
    });
  },
});

export const productAttributeValueIndexQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("listProductAttributeValueIndexes", {
      type: "ProductAttributeValueIndex",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product_attribute_value_index.findMany() as any;
      },
    });
  },
});
