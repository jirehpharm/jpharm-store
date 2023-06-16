// Importing the `objectType` function from the `nexus` module
import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";
import { NexusGenObjects } from "../nexus-typegen";

// Declaring a GraphQL object type named `Link` using the `objectType` function
export const Link = objectType({
  // Providing a name for the GraphQL type
  name: "Link",
  // Defining the fields of the GraphQL type
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("description");
    t.nonNull.string("url");
    t.nonNull.string("imageUrl");
  },
});

let links: NexusGenObjects["Link"][] = [
  {
    id: 1,
    description: "Google",
    imageUrl: "https://picsum.photos/200/300",
    url: "https://google.com",
  },
  {
    id: 2,
    description: "Facebook",
    imageUrl: "https://picsum.photos/300/300",
    url: "https://facebook.com",
  },
];

export const linkQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("feed", {
      type: "Link",
      resolve(parent, arg, context, info) {
        return links;
      },
    });
  },
});

export const LinkMutation = extendType({
  // 1
  type: "Mutation",
  definition(t) {
    t.nonNull.field("post", {
      // 2
      type: "Link",
      args: {
        // 3
        description: nonNull(stringArg()),
        url: nonNull(stringArg()),
        imageUrl: nonNull(stringArg()),
      },

      resolve(parent, args, context) {
        const { description, url } = args; // 4

        let idCount = links.length + 1; // 5
        const link = {
          id: idCount,
          description: description,
          url: url,
          imageUrl: "https://picsum.photos/200/300",
        };
        links.push(link);
        return link;
      },
    });
    t.nonNull.field("deleteLink", {
      type: "Link",
      args: {
        id: nonNull(intArg()),
      },
      resolve(parent, args, context) {
        const index = links.findIndex((link) => link.id === args.id);
        links.splice(index, 1);
        return links[index];
      },
    });
    t.nonNull.field("updateLink", {
      type: "Link",
      args: {
        id: nonNull(intArg()),
        description: nonNull(stringArg()),
        url: nonNull(stringArg()),
        imageUrl: nonNull(stringArg()),
      },
      resolve(parent, args, context) {
        const index = links.findIndex((link) => link.id === args.id);
        links[index].description = args.description;
        links[index].url = args.url;
        links[index].imageUrl = args.imageUrl;
        return links[index];
      },
    });
  },
});
