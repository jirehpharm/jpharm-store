/* 
model attribute_group_link {
  attribute_group_link_id Int             @id @default(autoincrement())
  attribute_id            Int
  group_id                Int
  attribute               attribute       @relation(fields: [attribute_id], references: [attribute_id], onDelete: Cascade)
  attribute_group         attribute_group @relation(fields: [group_id], references: [attribute_group_id], onDelete: Cascade, onUpdate: NoAction)

  @@unique([attribute_id, group_id], map: "ATTRIBUTE_GROUP_LINK_UNIQUE")
  @@index([attribute_id], map: "FK_ATTRIBUTE_LINK")
  @@index([group_id], map: "FK_GROUP_LINK")
}

*/

import { extendType, objectType } from "nexus";

export const AttributeGroupLink = objectType({
  name: "AttributeGroupLink",
  definition(t) {
    t.nonNull.int("attribute_group_link_id");
    t.nonNull.int("attribute_id");
    t.nonNull.int("group_id");
    // t.nonNull.field("attribute", {
    //   type: "Attribute",
    //   resolve(parent, args, context, info) {
    //     return context.prisma.attribute.findUnique({
    //       where: { attribute_id: parent.attribute_id },
    //     }) as any;
    //   },
    // })
    t.nonNull.field("attribute_group", {
      type: "AttributeGroup",
      resolve(parent, args, context, info) {
        return context.prisma.attribute_group.findUnique({
          where: { attribute_group_id: parent.group_id },
        }) as any;
      },
    })
  },
});

export const attributeGroupLinkQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("listAttributeGroupLinks", {
      type: "AttributeGroupLink",
      resolve(parent, args, context, info) {
        return context.prisma.attribute_group_link.findMany() as any[];
      },
    });
  },
});
