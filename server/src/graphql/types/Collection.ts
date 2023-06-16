// Importing the `objectType` function from the `nexus` module
import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";
import { collection } from "nexus-prisma";
import { prisma } from "../../utils/prisma";

import { NexusGenObjects } from "../nexus-typegen";

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

export const collections: any = async function getCollections(): Promise<any> {
  const collection = await prisma.collection.findMany();
  return collection;
};

export const collectionQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("listCollection", {
      type: "Collection",
      async resolve(parent, arg, context, info) {
        return await collections();
      },
    });
  },
});

// export const LinkMutation = extendType({
//   // 1
//   type: "Mutation",
//   definition(t) {
//     t.nonNull.field("post", {
//       // 2
//       type: "Link",
//       args: {
//         // 3
//         description: nonNull(stringArg()),
//         url: nonNull(stringArg()),
//         imageUrl: nonNull(stringArg()),
//       },

//       resolve(parent, args, context) {
//         const { description, url } = args; // 4

//         let idCount = links.length + 1; // 5
//         const link = {
//           id: idCount,
//           description: description,
//           url: url,
//           imageUrl: "https://picsum.photos/200/300",
//         };
//         links.push(link);
//         return link;
//       },
//     });
//     t.nonNull.field("deleteLink", {
//       type: "Link",
//       args: {
//         id: nonNull(intArg()),
//       },
//       resolve(parent, args, context) {
//         const index = links.findIndex((link) => link.id === args.id);
//         links.splice(index, 1);
//         return links[index];
//       },
//     });
//     t.nonNull.field("updateLink", {
//       type: "Link",
//       args: {
//         id: nonNull(intArg()),
//         description: nonNull(stringArg()),
//         url: nonNull(stringArg()),
//         imageUrl: nonNull(stringArg()),
//       },
//       resolve(parent, args, context) {
//         const index = links.findIndex((link) => link.id === args.id);
//         links[index].description = args.description;
//         links[index].url = args.url;
//         links[index].imageUrl = args.imageUrl;
//         return links[index];
//       },
//     });
//   },
// });
