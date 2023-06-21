/* 
model attribute_option {
  attribute_option_id           Int                             @id @default(autoincrement())
  uuid                          String                          @unique(map: "ATTRIBUTE_OPTION_UUID_UNIQUE") @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  attribute_id                  Int
  attribute_code                String                          @db.VarChar
  option_text                   String                          @db.VarChar
  attribute                     attribute                       @relation(fields: [attribute_id], references: [attribute_id], onDelete: Cascade, onUpdate: NoAction)
  product_attribute_value_index product_attribute_value_index[]

  @@index([attribute_id], map: "FK_ATTRIBUTE_OPTION")
}
*/

import { extendType, objectType } from "nexus";
import { IGraphQLContext } from "../../graphql";

export const AttributeOption = objectType({
  name: "AttributeOption",
  definition(t) {
    t.nonNull.int("attribute_option_id");
    t.nonNull.string("uuid");
    t.nonNull.int("attribute_id");
    t.nonNull.string("attribute_code");
    t.nonNull.string("option_text");
    t.nonNull.string("created_at");
    t.nonNull.string("updated_at");
    t.field("attribute", {
      type: "Attribute",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.attribute.findFirst({
          where: { attribute_id: parent.attribute_id },
        });
      },
    });
    t.field("product_attribute_value_index", {
      type: "ProductAttributeValueIndex",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product_attribute_value_index.findFirst({
          where: {
            product_attribute_value_index_id: parent.attribute_id,
          },
        });
      },
    });
  },
});

export const attributeOptionQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("listAttributeOptions", {
      type: "AttributeOption",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.attribute_option.findMany() as any;
      },
    });
  },
});
