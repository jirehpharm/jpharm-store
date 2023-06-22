/* 

model product_image {
  product_image_id         Int     @id @default(autoincrement())
  uuid                     String  @unique(map: "PRODUCT_IMAGE_UUID_UNIQUE") @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  product_image_product_id Int
  image                    String  @db.VarChar
  product                  product @relation(fields: [product_image_product_id], references: [product_id], onDelete: Cascade, onUpdate: NoAction)

  @@index([product_image_product_id], map: "FK_PRODUCT_IMAGE_LINK")
}

*/

import { extendType, objectType } from "nexus";
import { IGraphQLContext } from "../../graphql";

export const ProductImage = objectType({
  name: "ProductImage",
  definition(t) {
    t.nonNull.int("product_image_id");
    t.nonNull.string("uuid");
    t.nonNull.string("product_image_product_id");
    t.nonNull.string("image");
    t.nonNull.field("product", {
      type: "Product",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product.findFirst({
          where: { product_id: parseInt(parent.product_image_product_id, 10) },
        }) as any;
      },
    });
  },
});

export const productImageQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("listProductImages", {
      type: "ProductImage",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product_image.findMany() as any;
      },
    });
  },
});
