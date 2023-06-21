/* 
model attribute {
  attribute_id                                           Int                             @id @default(autoincrement())
  uuid                                                   String                          @unique(map: "ATTRIBUTE_CODE_UUID_UNIQUE") @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  attribute_code                                         String                          @unique(map: "ATTRIBUTE_CODE_UNIQUE") @db.VarChar
  attribute_name                                         String                          @db.VarChar
  type                                                   String                          @db.VarChar
  is_required                                            Boolean                         @default(false)
  display_on_frontend                                    Boolean                         @default(false)
  sort_order                                             Int                             @default(0)
  is_filterable                                          Boolean                         @default(false)
  attribute_group_link                                   attribute_group_link[]
  attribute_option                                       attribute_option[]
  product_attribute_value_index                          product_attribute_value_index[]
  variant_group_attributeTovariant_group_attribute_five  variant_group[]                 @relation("attributeTovariant_group_attribute_five")
  variant_group_attributeTovariant_group_attribute_four  variant_group[]                 @relation("attributeTovariant_group_attribute_four")
  variant_group_attributeTovariant_group_attribute_one   variant_group[]                 @relation("attributeTovariant_group_attribute_one")
  variant_group_attributeTovariant_group_attribute_three variant_group[]                 @relation("attributeTovariant_group_attribute_three")
  variant_group_attributeTovariant_group_attribute_two   variant_group[]                 @relation("attributeTovariant_group_attribute_two")
}
*/

import { objectType } from "nexus";
import { IGraphQLContext } from "../../graphql";

export const Attribute = objectType({
  name: "Attribute",
  definition(t) {
    t.nonNull.int("attribute_id");
    t.nonNull.string("uuid");
    t.nonNull.string("attribute_code");
    t.nonNull.string("attribute_name");
    t.nonNull.string("type");
    t.nonNull.boolean("is_required");
    t.nonNull.boolean("display_on_frontend");
    t.nonNull.int("sort_order");
    t.nonNull.boolean("is_filterable");
    t.field("attribute_group_link", {
      type: "AttributeGroupLink",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.attribute_group_link.findFirst({
          where: { attribute_id: parent.attribute_id },
        });
      },
    });
    t.field("attribute_option", {
      type: "AttributeOption",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.attribute_option.findFirst({
          where: { attribute_id: parent.attribute_id },
        }) as any;;
      },
    });

    t.field("product_attribute_value_index", {
      type: "ProductAttributeValueIndex",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product_attribute_value_index.findFirst({
          where: { attribute_id: parent.attribute_id },
        });
      },
    });

    t.field("variant_group_attributeTovariant_group_attribute_five", {
      type: "VariantGroup",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.variant_group.findFirst({
          where: { variant_group_id: parent.attribute_id },
        }) as any;;
      },
    });

    t.field("variant_group_attributeTovariant_group_attribute_four", {
      type: "VariantGroup",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.variant_group.findFirst({
          where: { variant_group_id: parent.attribute_id },
        }) as any;;
      },
    });

    t.field("variant_group_attributeTovariant_group_attribute_one", {
      type: "VariantGroup",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.variant_group.findFirst({
          where: { variant_group_id: parent.attribute_id },
        }) as any;;
      },
    });

    t.field("variant_group_attributeTovariant_group_attribute_three", {
      type: "VariantGroup",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.variant_group.findFirst({
          where: { variant_group_id: parent.attribute_id },
        }) as any;
      },
    });

    t.field("variant_group_attributeTovariant_group_attribute_two", {
      type: "VariantGroup",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.variant_group.findFirst({
          where: { variant_group_id: parent.attribute_id },
        }) as any;
      },
    });
  },
});
