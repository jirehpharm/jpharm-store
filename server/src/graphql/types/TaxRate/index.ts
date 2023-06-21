/* 
model tax_rate {
  tax_rate_id  Int        @id @default(autoincrement())
  uuid         String     @unique(map: "TAX_RATE_UUID_UNIQUE") @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  name         String     @db.VarChar
  tax_class_id Int?
  country      String     @default("*") @db.VarChar
  province     String     @default("*") @db.VarChar
  postcode     String     @default("*") @db.VarChar
  rate         Decimal    @db.Decimal(12, 4)
  is_compound  Boolean    @default(false)
  priority     Int
  tax_class    tax_class? @relation(fields: [tax_class_id], references: [tax_class_id], onDelete: Cascade, onUpdate: NoAction, map: "FK_TAX_RATE_TAX_CLASS")

  @@unique([priority, tax_class_id], map: "TAX_RATE_PRIORITY_UNIQUE")
}
*/

import { extendType, objectType } from "nexus";
import { IGraphQLContext } from "../../graphql";

export const TaxRate = objectType({
  name: "TaxRate",
  definition(t) {
    t.nonNull.int("tax_rate_id");
    t.nonNull.string("uuid");
    t.nonNull.string("name");
    t.int("tax_class_id");
    t.nonNull.string("country");
    t.nonNull.string("province");
    t.nonNull.string("postcode");
    t.nonNull.float("rate");
    t.nonNull.boolean("is_compound");
    t.nonNull.int("priority");
    t.field("tax_class", {
      type: "TaxClass",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.tax_class.findFirst({
          where: { tax_class_id: parent.tax_class_id },
        }) as any;
      },
    });
  },
});

export const taxRateQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("listTaxRates", {
      type: "TaxRate",
      resolve: (parent, args, context: IGraphQLContext) => {
        return context.prisma.tax_rate.findMany() as any;
      },
    });
  },
});
