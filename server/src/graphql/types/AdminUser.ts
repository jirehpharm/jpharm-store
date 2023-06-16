// Importing the `objectType` function from the `nexus` module
import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";
import { admin_user } from "nexus-prisma";
import { prisma } from "../../utils/prisma";

import { NexusGenObjects } from "../nexus-typegen";

// Declaring a GraphQL object type named `Link` using the `objectType` function
export const AdminUser = objectType({
  // Providing a name for the GraphQL type
  name: "AdminUser",
  // Defining the fields of the GraphQL type
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("uuid");
    t.nonNull.string("full_name");
    t.nonNull.string("email");
    t.nonNull.string("password");
    t.nonNull.boolean("status");
    t.string("created_at");
    t.string("updated_at");
  },
});

export const adminUsers: any = async function getAdminUsers(): Promise<any> {
  const adminUsers = await prisma.admin_user.findMany();
  return adminUsers;
};

export const Query = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("listAdminUsers", {
      type: "AdminUser",
      async resolve(parent, arg, context, info) {
        return await adminUsers();
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
