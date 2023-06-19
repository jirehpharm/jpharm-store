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
