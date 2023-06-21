/* 
model category_description {
  category_description_id          Int      @id @default(autoincrement())
  category_description_category_id Int      @unique(map: "CATEGORY_ID_UNIQUE")
  name                             String   @db.VarChar
  short_description                String?
  description                      String?
  image                            String?  @db.VarChar
  meta_title                       String?
  meta_keywords                    String?
  meta_description                 String?
  url_key                          String   @unique(map: "CATEGORY_URL_KEY_UNIQUE") @db.VarChar
  category                         category @relation(fields: [category_description_category_id], references: [category_id], onDelete: Cascade, onUpdate: NoAction)

  @@index([category_description_category_id], map: "FK_CATEGORY_DESCRIPTION")
}

*/

import { extendType, objectType } from "nexus";
import { IGraphQLContext } from "../../graphql";

export const CategoryDescription = objectType({
  name: "CategoryDescription",
  definition(t) {
    t.nonNull.int("category_description_id");
    t.nonNull.int("category_description_category_id");
    t.nonNull.string("name");
    t.string("short_description");
    t.string("description");
    t.string("image");
    t.string("meta_title");
    t.string("meta_keywords");
    t.string("meta_description");
    t.nonNull.string("url_key");
    t.field("category", {
      type: "Category",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.category.findFirst({
          where: { category_id: parent.category_description_category_id },
        }) as any;
      },
    });
  },
})

export const categoryDescriptionQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("listCategoryDescriptions", {
      type: "CategoryDescription",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.category_description.findMany() as any;
      },
    });
  },
})