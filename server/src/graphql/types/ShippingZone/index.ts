/*
model shipping_zone {
  shipping_zone_id       Int                      @id @default(autoincrement())
  uuid                   String                   @unique(map: "SHIPPING_ZONE_UUID_UNIQUE") @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  name                   String                   @db.VarChar
  country                String                   @db.VarChar
  cart                   cart[]
  shipping_zone_method   shipping_zone_method[]
  shipping_zone_province shipping_zone_province[]
}

*/

import { extendType, intArg, nonNull, objectType, stringArg } from 'nexus';
import { IGraphQLContext } from '../../graphql';

export const ShippingZone = objectType({
  name: 'ShippingZone',
  definition(t) {
    t.nonNull.int('shipping_zone_id');
    t.nonNull.string('uuid');
    t.nonNull.string('name');
    t.nonNull.string('country');
    t.nonNull.list.field('cart', {
      type: 'Cart',
      resolve(parent, args, context: IGraphQLContext) {
        return context.prisma.cart.findMany({
          where: { shipping_zone_id: parent.shipping_zone_id },
        }) as any;
      },
    });
    t.nonNull.list.field('shipping_zone_method', {
      type: 'ShippingZoneMethod',
      resolve(parent, args, context: IGraphQLContext) {
        return context.prisma.shipping_zone_method.findMany({
          where: {
            shipping_zone: { shipping_zone_id: parent.shipping_zone_id },
          },
        }) as any;
      },
    });
  },
});

export const shippingZoneQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('listShippingZones', {
      type: 'ShippingZone',
      resolve(parent, arg, context: IGraphQLContext, info) {
        return context.prisma.shipping_zone.findMany() as any;
      },
    });
  },
});
