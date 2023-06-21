/* 
model product_collection {
  product_collection_id Int        @id @default(autoincrement())
  collection_id         Int
  product_id            Int
  collection            collection @relation(fields: [collection_id], references: [collection_id], onDelete: Cascade, onUpdate: NoAction)
  product               product    @relation(fields: [product_id], references: [product_id], onDelete: Cascade, onUpdate: NoAction)

  @@unique([collection_id, product_id], map: "PRODUCT_COLLECTION_UNIQUE")
  @@index([collection_id], map: "FK_COLLECTION_PRODUCT_LINK")
  @@index([product_id], map: "FK_PRODUCT_COLLECTION_LINK")
}

*/

import { extendType, objectType } from "nexus";
import { IGraphQLContext } from "../../graphql";

export const ProductCollection = objectType({
  name: "ProductCollection",
  definition(t) {
    t.nonNull.int("product_collection_id");
    t.nonNull.int("collection_id");
    t.nonNull.int("product_id");
    t.field("collection", {
      type: "Collection",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.collection.findUnique({
          where: { collection_id: parent.collection_id },
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

export const productCollectionQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("listProductCollections", {
      type: "ProductCollection",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product_collection.findMany();
      },
    });
  },
});
