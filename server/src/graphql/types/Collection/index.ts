// Importing the `objectType` function from the `nexus` module
import { extendType, objectType } from "nexus";

// Declaring a GraphQL object type named `Link` using the `objectType` function
export const Collection = objectType({
  // Providing a name for the GraphQL type
  name: "Collection",
  // Defining the fields of the GraphQL type
  definition(t) {
    t.nonNull.int("collection_id");
    t.nonNull.string("uuid");
    t.nonNull.string("name");
    t.string("description");
    t.nonNull.string("code");
    // t.typeName("product_collection");
    t.string("created_at");
    t.string("updated_at");
  },
});

export const collectionQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("listCollections", {
      type: "Collection",
      resolve(parent, args, context, info) {
        return context.prisma.collection.findMany() as any[];
      },
    });
  },
});
