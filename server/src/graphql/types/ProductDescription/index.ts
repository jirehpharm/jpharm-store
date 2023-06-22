/* 
model product_description {
  product_description_id         Int     @id @default(autoincrement())
  product_description_product_id Int     @unique(map: "PRODUCT_ID_UNIQUE")
  name                           String  @db.VarChar
  description                    String?
  short_description              String?
  url_key                        String  @unique(map: "PRODUCT_URL_KEY_UNIQUE") @db.VarChar
  meta_title                     String?
  meta_description               String?
  meta_keywords                  String?
  product                        product @relation(fields: [product_description_product_id], references: [product_id], onDelete: Cascade, onUpdate: NoAction)

  @@index([product_description_product_id], map: "FK_PRODUCT_DESCRIPTION")
}
*/

import { extendType, objectType } from "nexus";
import { IGraphQLContext } from "../../graphql";

export const ProductDescription = objectType({
  name: "ProductDescription",
  definition(t) {
    t.nonNull.int("product_description_id");
    t.nonNull.int("product_description_product_id");
    t.nonNull.string("name");
    t.string("description");
    t.string("short_description");
    t.nonNull.string("url_key");
    t.string("meta_title");
    t.string("meta_description");
    t.string("meta_keywords");
    t.string("created_at");
    t.string("updated_at");
    t.field("product", {
      type: "Product",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product.findUnique({
          where: { product_id: parent.product_description_product_id },
        }) as any;
      },
    });
  },
});

export const productDescriptionQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("product_description", {
      type: "ProductDescription",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product_description.findMany() as any;
      },
    });
  },
});
