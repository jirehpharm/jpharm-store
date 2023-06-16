// import { extendType, nonNull, stringArg, objectType } from "nexus";
// import { NexusGenObjects } from "../nexus-typegen";

// export const Link = objectType({
//   name: "Link",
//   definition(t) {
//     t.nonNull.int("id");
//     t.nonNull.string("description");
//     t.nonNull.string("url");
//   },
// });

// export const LinkQuery = extendType({
//   type: "Query",
//   definition(t) {
//     t.nonNull.list.nonNull.field("feed", {
//       type: "Link",
//       resolve(parent, args, context) {
//         return context.prisma.link.findMany();
//       },
//     });
//   },
// });

// export const LinkMutation = extendType({
//   type: "Mutation",
//   definition(t) {
//     t.nonNull.field("createLink", {
//       type: "Link",
//       args: {
//         description: nonNull(stringArg()),
//         url: nonNull(stringArg()),
//       },

//       resolve(parent, args, context) {
//         const { description, url } = args;
//         const newLink = context.prisma.link.create({
//           data: {
//             description,
//             url,
//           },
//         });
//         return newLink;
//       },
//     });
//   },
// });
