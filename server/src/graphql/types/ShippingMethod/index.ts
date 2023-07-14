/*

model shipping_method {
  shipping_method_id   Int                    @id @default(autoincrement())
  uuid                 String                 @unique(map: "SHIPPING_METHOD_UUID_UNIQUE") @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  name                 String                 @unique(map: "SHIPPING_METHOD_NAME_UNIQUE") @db.VarChar
  shipping_zone_method shipping_zone_method[]
}

*/

import { extendType, intArg, nonNull, objectType, stringArg } from 'nexus';
import { IGraphQLContext } from '../../graphql';

export const ShippingMethod = objectType({
  name: 'ShippingMethod',
  definition(t) {
    t.nonNull.int('shipping_method_id');
    t.nonNull.string('uuid');
    t.nonNull.string('name');
    t.nonNull.list.field('shipping_zone_method', {
      type: 'ShippingZoneMethod',
      resolve(parent, args, context: IGraphQLContext) {
        return context.prisma.shipping_zone_method.findMany({
          where: {
            shipping_method: { shipping_method_id: parent.shipping_method_id },
          },
        }) as any;
      },
    });
  },
});

export const shippingMethodQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('listShippingMethods', {
      type: 'ShippingMethod',
      resolve(parent, arg, context: IGraphQLContext, info) {
        return context.prisma.shipping_method.findMany() as any;
      },
    });
  },
})
