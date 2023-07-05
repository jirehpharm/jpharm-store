/*

model shipping_zone_method {
  shipping_zone_method_id Int             @id @default(autoincrement())
  method_id               Int
  zone_id                 Int
  is_enabled              Boolean         @default(true)
  cost                    Decimal?        @db.Decimal(12, 4)
  calculate_api           String?         @db.VarChar
  condition_type          String?         @db.VarChar
  max                     Decimal?        @db.Decimal(12, 4)
  min                     Decimal?        @db.Decimal(12, 4)
  shipping_method         shipping_method @relation(fields: [method_id], references: [shipping_method_id], onDelete: Cascade, onUpdate: NoAction)
  shipping_zone           shipping_zone   @relation(fields: [zone_id], references: [shipping_zone_id], onDelete: Cascade, onUpdate: NoAction)

  @@unique([zone_id, method_id], map: "METHOD_ZONE_UNIQUE")
  @@index([method_id], map: "FK_METHOD_ZONE")
  @@index([zone_id], map: "FK_ZONE_METHOD")
}

*/

import { extendType, intArg, nonNull, objectType, stringArg } from 'nexus';
import { IGraphQLContext } from '../../graphql';

export const ShippingZoneMethod = objectType({
  name: 'ShippingZoneMethod',
  definition(t) {
    t.nonNull.int('shipping_zone_id');
    t.nonNull.int('method_id');
    t.nonNull.int('zone_id');
    t.nonNull.boolean('is_enabled');
    t.float('cost');
    t.string('calculate_api');
    t.string('condition_type');
    t.float('max');
    t.float('min');

    // t.list.field('shipping_method', {
    //   type: 'ShippingMethod',
    //   resolve: (parent, args, context: IGraphQLContext) => {
    //     return context.prisma.shipping_method.findUnique({
    //       where: {
    //         shipping_method_id: parent.shipping_zone_method_id,
    //       },
    //     });
    //   },
    // });

    // t.list.field('shipping_zone', {
    //   type: 'ShippingZone',
    //   resolve: (parent, args, context: IGraphQLContext) => {
    //     return context.prisma.shipping_zone.findUnique({
    //       where: {
    //         shipping_zone_id: parent.shipping_zone_id,
    //       },
    //     });
    //   },
    // });
  },
});

export const shippingZoneMethodQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('listShippingZoneMethods', {
      type: 'ShippingZoneMethod',
      resolve(parent, arg, context: IGraphQLContext, info) {
        return context.prisma.shipping_zone_method.findMany() as any;
      },
    });
  },
});
