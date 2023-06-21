/* 
model tax_class {
  tax_class_id Int        @id @default(autoincrement())
  uuid         String     @unique(map: "TAX_CLASS_UUID_UNIQUE") @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  name         String     @db.VarChar
  product      product[]
  tax_rate     tax_rate[]
}
*/

import { extendType, objectType } from "nexus";
import { IGraphQLContext } from "../../graphql";

export const TaxClass = objectType({
  name: "TaxClass",
  definition(t) {
    t.nonNull.int("tax_class_id");
    t.nonNull.string("uuid");
    t.nonNull.string("name");
    t.nonNull.string("product");
    t.nonNull.field("tax_rate", {
      type: "TaxRate",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.tax_rate.findFirst({
          where: { tax_class_id: parent.tax_class_id },
        }) as any;
      },
    });
    t.nonNull.field("product", {
      type: "Product",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.product.findFirst({
          where: { tax_class: parent.tax_class_id },
        }) as any;
      },
    });
  },
});

export const taxClassQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("listTaxClasses", {
      type: "TaxClass",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.tax_class.findMany() as any;
      },
    });
  },
});
