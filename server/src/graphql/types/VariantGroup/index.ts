/* 
model variant_group {
  variant_group_id                                   Int             @id @default(autoincrement())
  uuid                                               String          @unique(map: "VARIANT_GROUP_UUID_UNIQUE") @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  attribute_group_id                                 Int
  attribute_one                                      Int?
  attribute_two                                      Int?
  attribute_three                                    Int?
  attribute_four                                     Int?
  attribute_five                                     Int?
  visibility                                         Boolean         @default(false)
  attribute_attributeTovariant_group_attribute_five  attribute?      @relation("attributeTovariant_group_attribute_five", fields: [attribute_five], references: [attribute_id], onDelete: Cascade, onUpdate: NoAction)
  attribute_attributeTovariant_group_attribute_four  attribute?      @relation("attributeTovariant_group_attribute_four", fields: [attribute_four], references: [attribute_id], onDelete: Cascade, onUpdate: NoAction)
  attribute_group                                    attribute_group @relation(fields: [attribute_group_id], references: [attribute_group_id], onDelete: Cascade, onUpdate: NoAction)
  attribute_attributeTovariant_group_attribute_one   attribute?      @relation("attributeTovariant_group_attribute_one", fields: [attribute_one], references: [attribute_id], onDelete: Cascade, onUpdate: NoAction)
  attribute_attributeTovariant_group_attribute_three attribute?      @relation("attributeTovariant_group_attribute_three", fields: [attribute_three], references: [attribute_id], onDelete: Cascade, onUpdate: NoAction)
  attribute_attributeTovariant_group_attribute_two   attribute?      @relation("attributeTovariant_group_attribute_two", fields: [attribute_two], references: [attribute_id], onDelete: Cascade, onUpdate: NoAction)
  product                                            product[]

  @@index([attribute_group_id], map: "FK_ATTRIBUTE_GROUP_VARIANT")
  @@index([attribute_five], map: "FK_ATTRIBUTE_VARIANT_FIVE")
  @@index([attribute_four], map: "FK_ATTRIBUTE_VARIANT_FOUR")
  @@index([attribute_one], map: "FK_ATTRIBUTE_VARIANT_ONE")
  @@index([attribute_three], map: "FK_ATTRIBUTE_VARIANT_THREE")
  @@index([attribute_two], map: "FK_ATTRIBUTE_VARIANT_TWO")
}

*/

import { objectType } from "nexus";
import { IGraphQLContext } from "../../graphql";

export const VariantGroup = objectType({
  name: "VariantGroup",
  definition(t) {
    t.nonNull.int("variant_group_id");
    t.nonNull.string("uuid");
    t.nonNull.int("attribute_group_id");
    t.nonNull.string("attribute_one");
    t.nonNull.string("attribute_two");
    t.nonNull.string("attribute_three");
    t.nonNull.string("attribute_four");
    t.nonNull.string("attribute_five");
    t.nonNull.boolean("visibility");
    t.field("attribute_attributeTovariant_group_attribute_five", {
      type: "Attribute",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.attribute.findFirst({
          where: { attribute_id: parseInt(parent.attribute_five, 10) },
        });
      },
    });
    t.field("attribute_attributeTovariant_group_attribute_four", {
      type: "Attribute",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.attribute.findFirst({
          where: { attribute_id: parseInt(parent.attribute_four, 10) },
        });
      },
    });
    t.field("attribute_group", {
      type: "AttributeGroup",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.attribute_group.findFirst({
          where: { attribute_group_id: parent.attribute_group_id },
        }) as any;
      },
    });

    t.field("attribute_attributeTovariant_group_attribute_one", {
      type: "Attribute",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.attribute.findFirst({
          where: { attribute_id: parseInt(parent.attribute_one, 10) },
        });
      },
    });
    t.field("attribute_attributeTovariant_group_attribute_three", {
      type: "Attribute",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.attribute.findFirst({
          where: { attribute_id: parseInt(parent.attribute_three, 10) },
        });
      },
    });
    t.field("attribute_attributeTovariant_group_attribute_two", {
      type: "Attribute",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.attribute.findFirst({
          where: { attribute_id: parseInt(parent.attribute_two, 10) },
        });
      },
    });

    t.field("product", {
      type: "Product",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product.findMany({
          where: { variant_group_id: parent.variant_group_id },
        }) as any;
      },
    });
  },
});
